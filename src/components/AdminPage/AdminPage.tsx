import React, { LegacyRef, MutableRefObject, RefObject, useRef, useState } from 'react';
import { Path, UseFormRegister, SubmitHandler, useForm } from 'react-hook-form';
import { HrProfileRegister } from 'types';
import megaK from '../../assets/img/MegaK.webp';
import { MegaButton } from '../Elements/MegaButton';
import { TopPanel } from '../TopPanel/TopPanel';

type InputProps = {
  name: Path<HrProfileRegister>;
  placeholder: string;
  type: 'text' | 'number' | 'email';
  register: UseFormRegister<HrProfileRegister>;
  required: boolean;
  min: { minValue: number; minMessage: string };
  max: { value: number; message: string };
  pattern: { value: RegExp; message: string };
};

const Input = ({
  name,
  type,
  placeholder,
  register,
  required,
  min: { minValue, minMessage },
}: InputProps) => {
  return (
    <div className="admin-input">
      <label>
        {placeholder}
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, { required, min: { value: minValue, message: minMessage } })}
        />
      </label>
    </div>
  );
};

export const AdminPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<HrProfileRegister>({ mode: 'onChange' });
  const [file, setFile] = useState<File | null>(null);
  const formFileRef = useRef<HTMLFormElement | any>(null);
  const inputFileRef = useRef<HTMLFormElement | any>(null);

  const onSubmit: SubmitHandler<HrProfileRegister> = (data) => {
    alert(JSON.stringify(data));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];

    if (!fileObj) {
      return;
    }
    setFile(fileObj);
  };

  const cvsSendHandleClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const data = new FormData();
    data.append('studentsList', file as File);

    const headers = new Headers();

    headers.append('Origin', '*');
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');

    fetch('http://localhost:3001/api/user/student', {
      mode: 'cors',
      credentials: 'include',
      method: 'POST',
      headers,
      body: data,
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(`Failed: ${error.message}`));
  };

  return (
    <>
      {' '}
      <TopPanel />
      <div>
        <div className="admin-page-wrapper">
          <h1>Panel Administratora</h1>
          <img src={megaK} alt="MegaK logo" className="admin-page-image" />
          <h3 className="title">Dodaj HR-a</h3>
          <form className="hr-form" onSubmit={handleSubmit(onSubmit)}>
            {/* Email input */}
            <div className="admin-input">
              <label htmlFor="email">
                E-mail:
                <input
                  type="email"
                  placeholder="E-mail"
                  {...register('email', {
                    required: 'Pole Wymagane',
                    maxLength: {
                      value: 255,
                      message: 'Maksimum 255 znaków',
                    },
                    minLength: {
                      value: 5,
                      message: 'Minimum 5 znaków',
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: 'Nieprawidłowy adres E-mail',
                    },
                  })}
                />
              </label>
              <p>{errors.email && errors.email.message}</p>
            </div>
            {/* first name input */}
            <div className="admin-input">
              <label htmlFor="firstName">
                Imię:
                <input
                  type="text"
                  placeholder="Imię"
                  {...register('firstName', {
                    required: 'Pole Wymagane',
                    maxLength: {
                      value: 255,
                      message: 'Maksimum 255 znaków',
                    },
                    minLength: {
                      value: 2,
                      message: 'Minimum 2 znaków',
                    },
                  })}
                />
              </label>
              <p>{errors.firstName && errors.firstName.message}</p>
            </div>
            {/* last name input */}
            <div className="admin-input">
              <label htmlFor="lastName">
                Nazwisko:
                <input
                  type="text"
                  placeholder="Nazwisko"
                  {...register('lastName', {
                    required: 'Pole Wymagane',
                    maxLength: {
                      value: 255,
                      message: 'Maksimum 255 znaków',
                    },
                    minLength: {
                      value: 2,
                      message: 'Minimum 2 znaków',
                    },
                  })}
                />
              </label>
              <p>{errors.lastName && errors.lastName.message}</p>
            </div>
            {/* company input */}
            <div className="admin-input">
              <label htmlFor="company">
                Firma / Organizacja:
                <input
                  type="text"
                  placeholder="Firma / Organizacja"
                  {...register('company', {
                    required: 'Pole Wymagane',
                    maxLength: {
                      value: 255,
                      message: 'Maksimum 255 znaków',
                    },
                    minLength: {
                      value: 2,
                      message: 'Minimum 2 znaków',
                    },
                  })}
                />
              </label>
              <p>{errors.company && errors.company.message}</p>
            </div>
            {/* max reserved students input */}
            <div className="admin-input">
              <label htmlFor="maxReservedStudents">
                Limit kursantów:
                <input
                  type="number"
                  placeholder="Limit kursantów"
                  {...register('maxReservedStudents', {
                    required: 'Pole Wymagane',
                    max: {
                      value: 100,
                      message: 'Maksimum 100 kursantów',
                    },
                    min: {
                      value: 1,
                      message: 'Minimum 1 kursant',
                    },
                  })}
                />
              </label>
              <p>{errors.maxReservedStudents && errors.maxReservedStudents.message}</p>
            </div>
            <button className="mega-k-button admin-button-send" type="submit">
              Dodaj
            </button>
          </form>

          <h3 className="title">Import studentów z pliku CSV</h3>
          <form ref={formFileRef} className="csv-form">
            <div className="admin-input">
              {/* <div className="button-file-wrapper"> */}
              <input
                ref={inputFileRef}
                type="file"
                accept=".csv"
                placeholder="Wybierz plik CSV"
                onChange={handleFileChange}
              />
              {/* </div> */}
            </div>

            <MegaButton
              buttonTitle="Wyślij"
              onClick={cvsSendHandleClick}
              classNameAdd="admin-button-send"
            />
          </form>
        </div>
      </div>
    </>
  );
};
