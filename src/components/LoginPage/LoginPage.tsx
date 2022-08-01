import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { NavLink } from 'react-router-dom';
import megaK from '../../assets/img/MegaK.webp';
import { MegaButton } from '../Elements/MegaButton';
import { TestBtn2 } from '../Test/TestBtn2';
import { TestBtn3 } from '../Test/TestBtn3';
import { TestBtn4 } from '../Test/TestBtn4';
import { TestBtn5 } from '../Test/TestBtn5';

export const LoginPage = () => {
  const [login, setLogin] = useState(true);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('SUBMIT', value1, value2);
  };
  const toggleLostPass = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLogin(!login);
    if (login) {
      setValue2('');
    }
    console.log('Zapomniało się...', value1);
  };

  return (
    <div className="login-page-login-group">
      <img className="login-group-image" src={megaK} alt="MegaK logo" />
      <div>
        <form className="sign-form row  justify-content-center mt-5" onSubmit={handleSubmit}>
          <div className="login-input-email">
            <span className="p-float-label">
              <InputText
                id="email"
                size={40}
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
              />
              <label className="login-input-label" htmlFor="email">
                E-mail
              </label>
            </span>
          </div>
          {login ? (
            <div className="login-input-password">
              <span className="p-float-label">
                <Password
                  id="password"
                  size={40}
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                  promptLabel="Wpisz hasło"
                  feedback={false}
                />
                <label className="login-input-label" htmlFor="password">
                  Hasło
                </label>
              </span>
            </div>
          ) : (
            <div>Podaj email</div>
          )}
          <div className="login-forgot-pass">
            {login ? (
              <NavLink to="#" onClick={toggleLostPass}>
                Zapominiałeś hasła?
              </NavLink>
            ) : (
              <NavLink to="#" onClick={toggleLostPass}>
                Zaloguj się
              </NavLink>
            )}
          </div>
          <div className="register-new-acc">
            <div className="register-new-acc-text">
              Nie masz konta?
              <span className="register-new-acc-register">
                <NavLink className="register" to="no_link_yet">
                  Zarejestruj się
                </NavLink>
              </span>
            </div>
            {login ? (
              <button type="submit" className="register-new-acc-button mega-k-button">
                Zaloguj się
              </button>
            ) : (
              <button type="submit" className="register-new-acc-button mega-k-button">
                Wyślij email
              </button>
            )}
          </div>
        </form>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TestBtn2 />
        <TestBtn3 />
        <TestBtn4 />
        <TestBtn5 />
      </div>
    </div>
  );
};
