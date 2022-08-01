import React from 'react';
import { useForm } from 'react-hook-form';
// import { ExpectedTypeWork } from 'types';
import '../../assets/css/RegisterStudentView.css';

export const RegisterStudentView = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<any>({
    mode: 'onChange',
    defaultValues: {
      monthsOfCommercialExp: 0,
    },
  });

  return (
    <div className="RegisterStudentView">
      <div className="RegisterStudentView__Wrapper">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <label>
            Adres e-mail
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('email', {
                required: 'Pole wymagane',
                minLength: {
                  value: 7,
                  message: 'E-Mail musi zawierać conajmniej 7 znaków i @',
                },
                maxLength: {
                  value: 255,
                  message: 'Adres email maksymalnie może zawierać 255 znaków',
                },
              })}
              placeholder="Adres e-mail"
            />
          </label>
          <p className="RegisterStudentView__Input--error">{errors.firstName?.message}</p>
          <br />
          <label>
            Telefon
            <br />
            <input
              className="RegisterStudentView__Input"
              type="number"
              {...register('tel', {
                minLength: {
                  value: 9,
                  message: 'Numer musi mieć 9 cyfr',
                },
                maxLength: {
                  value: 9,
                  message: 'Numer musi mieć 9 cyfr',
                },
              })}
              placeholder="Numer telefonu"
            />
          </label>
          <p className="RegisterStudentView__Input--error">{errors.number?.message}</p>
          <br />
          <label>
            Imię
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('firstName', {
                required: 'Pole wymagane',
                maxLength: {
                  value: 28,
                  message: 'Maksymalna długość imion to 28 znaków',
                },
                minLength: {
                  value: 3,
                  message: 'Minimalna ilość znaków to 3',
                },
              })}
              placeholder="Imię"
            />
            <p className="RegisterStudentView__Input--error">{errors.firstName?.message}</p>
            <br />
          </label>
          <label>
            Nazwisko
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('lastName', {
                required: 'Pole wymagane',
                maxLength: {
                  value: 28,
                  message: 'Maksymalna długość znaków to 28',
                },
                minLength: {
                  value: 3,
                  message: 'Minimalna długość znaków to 3',
                },
              })}
              placeholder="Nazwisko"
            />
          </label>
          <p className="RegisterStudentView__Input--error">{errors.lastName?.message}</p>
          <label>
            Github Login
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('githubUsername', {
                required: 'Pole wymagane',
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długośc 255 znaki',
                },
                minLength: {
                  value: 1,
                  message: 'Pole nie może być puste',
                },
              })}
              placeholder="Login GitHuba"
            />
          </label>
          <p className="RegisterStudentView__Input--error">{errors.githubUsername?.message}</p>
          <br />
          <label>
            Link do portfolio nr 1
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('portfolioUrls', {
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
              })}
              placeholder="URL do portfolio nr 1"
            />
          </label>
          <p className="RegisterStudentView__Input--error">{errors.portfolioUrls?.message}</p>
          <br />
          <label>
            Link do portfolio 2
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('portfolioUrls', {
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
              })}
              placeholder="URL do portfolio nr 2"
            />
          </label>
          <p className="RegisterStudentView__Input--error">{errors.portfolioUrls?.message}</p>
          <br />
          <label>
            Link do portfolio nr 3
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('portfolioUrls', {
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
              })}
              placeholder="URL do portfolio nr 3"
            />
          </label>
          <p className="RegisterStudentView__Input--error">{errors.portfolioUrls?.message}</p>
          <br />
          <label>
            Link do portfolio nr 4
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('portfolioUrls', {
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
              })}
              placeholder="URL do portfolio nr 4"
            />
          </label>
          <p className="RegisterStudentView__Input--error">{errors.portfolioUrls?.message}</p>
          <br />
          <label>
            Link do portfolio nr 5
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('portfolioUrls', {
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
              })}
              placeholder="URL do portfolio nr 5"
            />
          </label>
          <p className="RegisterStudentView__Input--error">{errors.portfolioUrls?.message}</p>
          <br />
          <label>
            Link do projektu bonusowego
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('bonusProjectUrls', {
                required: 'Pole wymagane',
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
                minLength: {
                  value: 1,
                  message: 'Pole nie może być puste',
                },
              })}
              placeholder="Repozytorium do projektu zaliczeniowego"
            />
          </label>
          <br />
          <br />
          <label>
            Link do projektu bonusowego nr 2
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('bonusProjectUrls', {
                required: 'Pole wymagane',
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
                minLength: {
                  value: 1,
                  message: 'Pole nie może być puste',
                },
              })}
              placeholder="Repozytorium do projektu zaliczeniowego nr 2"
            />
          </label>
          <br />
          <br />
          <label>
            Link do projektu bonusowego nr 3
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('bonusProjectUrls', {
                required: 'Pole wymagane',
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
                minLength: {
                  value: 1,
                  message: 'Pole nie może być puste',
                },
              })}
              placeholder="Repozytorium do projektu zaliczeniowego nr 3"
            />
          </label>
          <br />
          <label>
            Kilka słów o sobie
            <p className="RegisterStudentView__Input--error">{errors.portfolioUrls?.message}</p>
            <br />
            <textarea
              className="RegisterStudentView__Input--more-info"
              {...register('bio', {
                maxLength: {
                  value: 255,
                  message: 'Musisz się zmieścić w 255 znakach',
                },
              })}
              placeholder="Napisz kilka słów o sobie"
            />
          </label>
          <p className="RegisterStudentView__Input--error">{errors.bio?.message}</p>
          <br />
          <label>
            Preferowany typ pracy
            <br />
            <select
              {...register('expectedTypeWork', { required: 'Pole wymagane' })}
              placeholder="Preferowane miejsce pracy"
            >
              <option value={ExpectedTypeWork}>Bez znaczenia</option>
              <option value="AT_LOCATION">Na miejscu</option>
              <option value="READY_TO_MOVE">Gotowość do przeprowadzki</option>
              <option value="REMOTE">Wyłącznie zdalnie</option>
            </select>
          </label>
          <p className="RegisterStudentView__Input--info">Domyślnie bez znaczenia</p>
          <br />
          <label>
            Docelowe miasto
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('targetWorkCity', {
                maxLength: {
                  value: 30,
                  message: 'Maksymalna długośc nazwy miasta to 30 znaków',
                },
              })}
              placeholder="Docelowe miasto"
            />
          </label>
          <p className="RegisterStudentView__Input--error">{errors.targetWorkCity?.message}</p>
          <br />
          <label>
            Oczekiwany typ kontraktu
            <br />
            <select
              {...register('expectedContractType', { required: 'Pole wymagane' })}
              placeholder="Oczekiwany typ kontraktu"
            >
              <option value="NULL">Brak preferencji</option>
              <option value="EMPLOYMENT_CONTRACT">Tylko umowa o pracę</option>
              <option value="B_TO_B">Możliwe B2B</option>
              <option value="COMMISSION_CONTRACT_OR_SPECIFIC_TASK_CONTRACT">Możliwe UZ/UoD</option>
            </select>
          </label>
          <br />
          <label>
            Oczekiwane wynagrodzenie miesięczne netto
            <br />
            <input
              className="RegisterStudentView__Input"
              type="number"
              {...register('expectedSalary')}
              placeholder="Oczekiwane wynagrodzenie miesięczne netto"
            />
          </label>
          <br />
          <label>
            Czy zgadzasz się na bezpłatne praktyki/staż
            <br />
            <select
              {...register('canTakeApprenticeship', { required: 'Pole wymagane' })}
              placeholder="Wyrażam zgodę na bezpłatne praktyki/staż na początek"
            >
              <option value="NO">Nie</option>
              <option value="YES">Tak</option>
            </select>
          </label>
          <p className="RegisterStudentView__Input--info">Domyślnie Nie</p>
          <br />
          <label>
            Komercyjne doświadczenie
            <br />
            <input
              className="RegisterStudentView__Input"
              type="number"
              {...register('monthsOfCommercialExp', { required: 'Pole wymagane' })}
              placeholder="Przebieg edukacji"
            />
          </label>
          <p className="RegisterStudentView__Input--error">
            {errors.monthsOfCommercialExp?.message}
          </p>
          <br />
          <label>
            Przebieg edukacji
            <br />
            <textarea
              className="RegisterStudentView__Input--more-info"
              {...register('education', {
                maxLength: {
                  value: 65535,
                  message: 'Musisz zmieścić się w 65535 znakach.',
                },
              })}
              placeholder="Przebieg edukacji"
            />
          </label>
          <p className="RegisterStudentView__Input--error">{errors.education?.message}</p>
          <br />
          <label>
            Przebieg doświadczenie zawodowego
            <br />
            <textarea
              className="RegisterStudentView__Input--more-info"
              {...register('workExperience', {
                maxLength: {
                  value: 65535,
                  message: 'Musisz zmieścić się w 65535 znakach.',
                },
              })}
              placeholder="Przebieg doświadczenia zawodowego"
            />
          </label>
          <p className="RegisterStudentView__Input--error">{errors.workExperience?.message}</p>
          <br />
          <label>
            Ukończone kursy
            <br />
            <textarea
              className="RegisterStudentView__Input--more-info"
              {...register('courses', {
                maxLength: {
                  value: 65535,
                  message: 'Musisz zmieścić się w 65535 znakach.',
                },
              })}
              placeholder="Przebieg Kursy i certyfikaty związane z programowaniem."
            />
          </label>
          <p className="RegisterStudentView__Input--error">{errors.courses?.message}</p>
          <br />
          <button className="mega-k-button">Zapisz</button>
        </form>
      </div>
    </div>
  );
};
