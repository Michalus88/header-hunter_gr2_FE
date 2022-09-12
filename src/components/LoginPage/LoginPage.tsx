import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { NavLink } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Login } from 'types';
import megaK from '../../assets/img/MegaK.webp';
import { useApp } from '../../hooks/useApp';
import { setIfErrMsg } from '../../helpers/setIfErrMsg';
import { setNotification } from '../../helpers/setNotification';

export const LoginPage = () => {
  const [login, setLogin] = useState(true);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const { signIn, user } = useApp();
  const recaptchaRef = React.createRef<ReCAPTCHA>();
  const { toast } = useApp();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Login>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<Login> = async (e) => {
    if (recaptchaRef.current) {
      recaptchaRef.current.execute();
    }

    if (!login && !user) {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USER_PASSWORD_RECOVERY}`,
        {
          mode: 'cors',
          credentials: 'include',
          method: 'PATCH',
          body: JSON.stringify({ email: e.email }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const errMsg = await setIfErrMsg(res);
      if (errMsg) {
        console.log(errMsg);
        setNotification(toast, errMsg);
        return;
      }
      setLogin(true);
      setNotification(toast, 'Success. Check your email.');
    } else {
      const credential = { email: e.email, password: e.password };
      await signIn(credential);
    }
  };

  const toggleLostPass = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLogin(!login);
    if (login) {
      setValue2('');
    }
  };

  return (
    <div className="login-page-login-group">
      <img className="login-group-image" src={megaK} alt="MegaK logo" />
      <div>
        <form
          className="sign-form row  justify-content-center mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <ReCAPTCHA
            className="reCaptcha"
            sitekey={String(process.env.REACT_APP_RECAPTCHA_PUBLIC_KEY)}
            size="invisible"
            ref={recaptchaRef}
          />
          <div className="login-input-email">
            <span className="p-float-label">
              <InputText
                id="email"
                size={40}
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
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
              />
              <label className="login-input-label" htmlFor="email">
                E-mail
              </label>
            </span>
            <p>{errors.email && errors.email.message}</p>
          </div>
          {login ? (
            <div className="login-input-password">
              <span className="p-float-label">
                <InputText
                  type="password"
                  id="password"
                  size={40}
                  {...register('password', {
                    // required: 'Pole Wymagane',
                    maxLength: {
                      value: 255,
                      message: 'Maksimum 255 znaków',
                    },
                    minLength: {
                      value: 5,
                      message: 'Minimum 5 znaków',
                    },
                  })}
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                />
                <label className="login-input-label" htmlFor="password">
                  Hasło
                </label>
              </span>
              <p>{errors.password && errors.password.message}</p>
            </div>
          ) : (
            <div className="lost-password-text">Zapomniałeś hasła - Wpisz swój adres e-mail.</div>
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
            {login ? (
              <button
                type="submit"
                className="register-new-acc-button mega-k-button"
                // onClick={() => navigate('/hr/available-students')}
              >
                Zaloguj się
              </button>
            ) : (
              <button type="submit" className="register-new-acc-button mega-k-button">
                Wyślij e-mail
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
