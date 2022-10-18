import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { EmailChange } from 'types';
import { useApp } from '../../hooks/useApp';
import { ValidateMsg } from './ValidateMsg';
import { setIfErrMsg } from '../../helpers/setIfErrMsg';
import { setNotification } from '../../helpers/setNotification';

export const ChangeEmail = () => {
  const { user, toast } = useApp();
  const navigate = useNavigate();
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

  const formChangeEmailOnSubmit: SubmitHandler<EmailChange> = async (data) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USER_EMAIL}`,
        {
          mode: 'cors',
          credentials: 'include',
          method: 'PATCH',
          body: JSON.stringify(data),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const errMsg = await setIfErrMsg(res);
      if (!errMsg) {
        setNotification(toast, 'Your e-mail has been changed', 'success');
        navigate(-1);
      } else {
        setNotification(toast, errMsg);
      }
    } catch (err) {
      setNotification(toast);
      navigate(-1);
    }
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
