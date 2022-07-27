import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { NavLink } from 'react-router-dom';
import megaK from '../../assets/img/MegaK.webp';
import { TestBtn } from '../Test/TestBtn';
import { MegaButton } from '../Elements/MegaButton';
import { TestBtn2 } from '../Test/TestBtn2';
import { TestBtn3 } from '../Test/TestBtn3';

export const LoginPage = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const clicked = () => {
    console.log('Clicked');
  };

  return (
    <div className="login-page-login-group">
      <img className="login-group-image" src={megaK} alt="MegaK logo" />
      <div>
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
        <div className="login-forgot-pass">
          <NavLink to="no_link_yet">Zapominiałeś hasła?</NavLink>
        </div>
        <div className="register-new-acc">
          <div className="register-new-acc-text">
            Nie masz konta?
            <span className="register-new-acc-register">
              <NavLink to="no_link_yet">Zarejestruj się</NavLink>
            </span>
          </div>
          <MegaButton
            classNameAdd="register-new-acc-button"
            buttonTitle="Zaloguj się"
            onClick={() => clicked()}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TestBtn />
        <TestBtn2 />
        <TestBtn3 />
      </div>
    </div>
  );
};
