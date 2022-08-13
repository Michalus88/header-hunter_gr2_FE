import { useForm, SubmitHandler } from 'react-hook-form';
import { EmailChange } from 'types';
import { useAuth } from '../../hooks/useAuth';
import { ValidateMsg } from './ValidateMsg';

export const ChangeEmail = () => {
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

  const formChangeEmailOnSubmit: SubmitHandler<EmailChange> = (data) => {
    console.log({ data });

    fetch(`${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USER_EMAIL}`, {
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
      <h2 className="student-page__title-form" style={{ marginTop: '85px' }}>
        Zmiana adresu e-mail
      </h2>

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
    </>
  );
};
