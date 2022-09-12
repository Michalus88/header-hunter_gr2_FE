import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PasswordChange } from 'types';
import { useApp } from '../../hooks/useApp';
import { ValidateMsg } from './ValidateMsg';

export const ChangePassword = () => {
  const { user } = useApp();

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

  const formChangePasswordOnSubmit: SubmitHandler<PasswordChange> = (data) => {
    if (data.newPassword !== data.repeatPassword)
      console.log('Nowe hasło i jego powtórzenie są różne.');
    if (data.newPassword === data.oldPassword) console.log('Nowe i stare hasło są jednakowe.');

    fetch(`${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USER_PASSWORD}`, {
      mode: 'cors',
      credentials: 'include',
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(`Failed: ${error.message}`));
  };

  return (
    <>
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
