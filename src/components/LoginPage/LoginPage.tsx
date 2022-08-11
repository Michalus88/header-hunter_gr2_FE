import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { NavLink } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import ReCAPTCHA from 'react-google-recaptcha';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Login } from 'types';
import megaK from '../../assets/img/MegaK.webp';
import { useAuth } from '../../hooks/useAuth';

export const LoginPage = () => {
  const [login, setLogin] = useState(true);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const toast = useRef<any>(null);
  const { signIn, user } = useAuth();
  const recaptchaRef = React.createRef<ReCAPTCHA>();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Login>({ mode: 'onChange' });

  const showSuccess = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Sukces',
      detail: 'Wysłano wiadomość e-mail na podany adres',
      life: 4000,
    });
  };

  // const onSubmit: SubmitHandler<Login> = data => console.log(data.email, data.password);

  const onSubmit: SubmitHandler<Login> = async (e) => {
    // : { preventDefault: () => void }
    //   e.preventDefault();

    if (recaptchaRef.current) {
      recaptchaRef.current.execute();
    }

    if (!login && !user) {
      console.log(`SUBMIT LOST PASS email ${e.email}`);
      fetch(
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
      )
        .then((response) => response.json())
        .then((json) => {
          if (json.statusCode === 200) {
            toast.current.show({
              severity: 'success',
              summary: 'Sukces',
              detail: 'Wysłano wiadomość e-mail na podany adres',
              life: 4000,
            });
          }
        })
        .catch((error) =>
          toast.current.show({
            severity: 'error',
            summary: 'Błąd',
            detail: 'Coś poszło nie tak. Spróbuj później.',
            life: 4000,
          }),
        );
      // e.password = '';
      setLogin(true);
      showSuccess();
    } else {
      // console.log(e.password, 'okiiiii');
      const credential = { email: e.email, password: e.password };
      await signIn(credential);
      if (!user) {
        toast.current.show({
          severity: 'error',
          summary: 'Błąd',
          detail: 'Podano błędne dane logowania. Spróbuj jeszcze raz.',
          life: 4000,
        });
        // console.log(`SUBMIT e-mial ${e.email} password ${e.password}`);
      }
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
    <>
      <Toast ref={toast} />
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
                    // promptLabel="Wpisz hasło"
                    // feedback={false}
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
    </>
  );
};
