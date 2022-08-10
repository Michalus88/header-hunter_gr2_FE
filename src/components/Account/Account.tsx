import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EmailChange, PasswordChange } from 'types';
import { useAuth } from '../../hooks/useAuth';
import { ValidateMsg } from './ValidateMsg';

export const Account = () => {
  const [dataUser, setdataUser] = useState(null!);
  const { user } = useAuth();

  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    watch: watchEmail,
    formState: { errors: errorsEmail },
  } = useForm<EmailChange>({
    defaultValues: {
      oldEmail: user?.email,
      newEmail: '',
      repeatNewEmail: '',
    },
    mode: 'onChange',
  });

  const oldEmail = String(watchEmail('oldEmail')) === '' ? null : watchEmail('oldEmail');
  const newEmail = String(watchEmail('newEmail')) === '' ? null : watchEmail('newEmail');
  const repeatNewEmail =
    String(watchEmail('repeatNewEmail')) === '' ? null : watchEmail('repeatNewEmail');

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    watch: watchPassword,
    formState: { errors: errorsPassword },
  } = useForm<PasswordChange>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
    },
    mode: 'onChange',
  });

  const oldPassword =
    String(watchPassword('oldPassword')) === '' ? null : watchPassword('oldPassword');
  const newPassword =
    String(watchPassword('newPassword')) === '' ? null : watchPassword('newPassword');
  const repeatPassword =
    String(watchPassword('repeatPassword')) === '' ? null : watchPassword('repeatPassword');

  const formChangeEmailOnSubmit: SubmitHandler<EmailChange> = (data) => {
    console.log({ data });

    // console.log(JSON.stringify(data));
  };
  const formChangePasswordOnSubmit: SubmitHandler<PasswordChange> = (data) => {
    console.log({ data });

    // console.log(JSON.stringify(data));
  };
  useEffect(() => {
    console.log({ user });
  }, []);
  return (
    <>
      <h2 className="student-page__title-form">Zmiana adresu e-mail</h2>

      <form onSubmit={handleSubmitEmail(formChangeEmailOnSubmit)}>
        <div className="student-page__form">
          <div className="student-page__input-container">
            <label>
              <span>Stary e-mail:</span>
              <input
                className="student-page__input"
                type="email"
                {...registerEmail('oldEmail', {
                  required: 'this is required',
                  maxLength: 255,
                  pattern: {
                    value: /@/,
                    message: 'Invalid email address',
                  },
                })}
              />
            </label>
          </div>
          <ValidateMsg text={errorsEmail.oldEmail?.message} />
          <div className="student-page__input-container">
            <label>
              <span>Nowy e-mail:</span>
              <input
                className="student-page__input"
                type="email"
                {...registerEmail('newEmail', {
                  required: 'this is required',
                  maxLength: 255,
                  pattern: {
                    value: /@/,
                    message: 'Invalid email address',
                  },
                })}
              />
            </label>
          </div>
          <ValidateMsg text={errorsEmail.newEmail?.message} />
          <div className="student-page__input-container">
            <label>
              <span>Powtórz nowy e-mail:</span>
              <input
                className="student-page__input"
                type="email"
                {...registerEmail('repeatNewEmail', {
                  required: 'this is required',
                  maxLength: 255,
                  pattern: {
                    value: /@/,

                    message: 'Invalid email address',
                  },
                })}
              />
            </label>
          </div>
          <ValidateMsg text={errorsEmail.repeatNewEmail?.message} />

          <div className="student-page_btns">
            <button
              className="mega-k-button megak-primary edit"
              type="submit"
              style={{ margin: '20px auto', padding: '10px' }}
            >
              Zmień e-mail
            </button>
          </div>
        </div>
      </form>
      <h2 className="student-page__title-form">Zmiana hasła</h2>
      <form onSubmit={handleSubmitPassword(formChangePasswordOnSubmit)}>
        <div className="student-page__form">
          <div className="student-page__input-container">
            <label>
              <span>Stare hasło:</span>
              <input
                className="student-page__input"
                type="password"
                {...registerPassword('oldPassword', {
                  required: 'this is required',
                  maxLength: 255,
                })}
              />
            </label>
          </div>
          <ValidateMsg text={errorsPassword.oldPassword?.message} />
          <div className="student-page__input-container">
            <label>
              <span>Nowe hasło:</span>
              <input
                className="student-page__input"
                type="password"
                {...registerPassword('newPassword', {
                  required: 'this is required',
                  maxLength: 255,
                })}
              />
            </label>
          </div>
          <ValidateMsg text={errorsPassword.newPassword?.message} />
          <div className="student-page__input-container">
            <label>
              <span>Powtórz nowe hasło:</span>
              <input
                className="student-page__input"
                type="password"
                {...registerPassword('repeatPassword', {
                  required: 'this is required',
                  maxLength: 255,
                })}
              />
            </label>
          </div>
          <ValidateMsg text={errorsPassword.repeatPassword?.message} />

          <div className="student-page_btns">
            <button
              className="mega-k-button megak-primary edit"
              type="submit"
              style={{ margin: '20px auto', padding: '10px' }}
            >
              Zmień hasło
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
