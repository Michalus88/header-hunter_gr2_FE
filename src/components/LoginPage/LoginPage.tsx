import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import megaK from '../../assets/img/MegaK.webp';

export const LoginPage = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
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
            <label htmlFor="email">Email</label>
          </span>
        </div>
        <div className="login-input-password">
          <span className="p-float-label">
            <InputText
              id="password"
              size={40}
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
            />
            <label htmlFor="password">Hasło</label>
          </span>
        </div>
        <div className="login-forgot-pass">Zapominiałeś hasła?</div>
        <div className="register-new-acc">
          <div className="register-new-acc-text">
            Nie masz konta? <span className="register-new-acc-register">Zarejestruj się</span>
          </div>
          <Button className="register-new-acc-button" label="Zaloguj się" />
        </div>
      </div>
    </div>
  );
};
