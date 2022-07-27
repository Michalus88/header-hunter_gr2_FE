import React, {useState} from 'react';
import megaK from '../../assets/img/MegaK.webp';
import { MegaButton } from '../Elements/MegaButton';
// import {HrProfileRegister} from 'types';

interface HrProfileRegister {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  maxReservedStudents: number;
}

export const AdminPage = () => {
  // const [mail, setMail] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [company, setCompany] = useState('');
  // const [maxReservedStudents, setMaxReservedStudents] = useState('');
  const [file, setFile] = useState('');
  const [form, setForm] = useState<HrProfileRegister>({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    maxReservedStudents: 0,
  });

  const updateForm = (key: string, value: string | number) => {
    setForm(form => ({
      ...form,
      [key]: value,
    }));
  }

  const clicked1 = (form: HrProfileRegister) => {
    console.log(form);
  };

  const clicked2 = (info: string) => {
    console.log(`plik: ${info}`);
  };

  return (
    <div>
      <div className="admin-page-wrapper">
        <h1>Panel Administratora</h1>
        <img src={megaK} alt="MegaK logo" className="admin-page-image" />
        <h3 className="title">Dodaj HR-a</h3>
        <form className="hr-form">
          {/*Email input*/}
          <div className="admin-input">
            <input
                type="email"
                placeholder="E-mail"
                value={form.email}
                onChange={(e) => updateForm('email', e.target.value)}
            />
          </div>
          {/*first name input*/}
          <div className="admin-input">
            <input
                type="text"
                placeholder="Imię"
                value={form.firstName}
                onChange={(e) => updateForm('firstName', e.target.value)}
            />
          </div>
          {/*last name input*/}
          <div className="admin-input">
            <input
                type="text"
                placeholder="Nazwisko"
                value={form.lastName}
                onChange={(e) => updateForm('lastName', e.target.value)}
            />
          </div>
          {/*company input*/}
          <div className="admin-input">
            <input
                type="text"
                placeholder="Firma / Organizacja"
                value={form.company}
                onChange={(e) => updateForm('company', e.target.value)}
            />
          </div>
          {/*max reserved students input*/}
          <div className="admin-input">
            <input
                type="number"
                placeholder="Limit studentów"
                value={form.maxReservedStudents}
                onChange={(e) => updateForm('maxReservedStudents', e.target.value)}
                min="1"
                max="50"
            />
          </div>
          <MegaButton
              buttonTitle="Dodaj"
              onClick={() => clicked1(form)}
              classNameAdd="admin-button-send"
          />
        </form>

        <h3 className="title">Import studentów z pliku CSV</h3>
        <form className="csv-form">
          {/*file input*/}
          <div className="admin-input">
            <div className="button-file-wrapper">
              <button className="button-file">Wybierz plik CSV</button>
              <input type="file" value={file} onChange={(e) => setFile(e.target.value)} />
            </div>
          </div>

          <MegaButton
            buttonTitle="Wyślij"
            onClick={() => clicked2(file)}
            classNameAdd="admin-button-send"
          />
        </form>
      </div>
    </div>
  );
};
