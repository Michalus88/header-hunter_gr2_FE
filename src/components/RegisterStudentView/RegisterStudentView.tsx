import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ExpectedTypeWork, ExpectedContractType, StudentProfileRegister } from 'types';
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

  const expected =
    String(watch('expectedContractType')) === '' ? null : watch('expectedContractType');

  const phone = String(watch('tel')) === '' ? null : watch('tel');

  const ArrayPortfolioUrls = watch([
    'portfolioUrlFirst',
    'portfolioUrlSecond',
    'portfolioUrlThird',
    'portfolioUrlFourth',
    'portfolioUrlFifth',
  ]);
  console.log('array watch ', ArrayPortfolioUrls);

  const testarray = ArrayPortfolioUrls.map((arr) => {
    if (arr !== '') {
      return arr;
    }
    return null;
  });

  console.log(testarray, 'testarray');
  const ArrayBonusProjectUrls = watch([
    'bonusProjectUrlFirst',
    'bonusProjectUrlSecond',
    'bonusProjectUrlThird',
    'bonusProjectUrlFourth',
    'bonusProjectUrlFifth',
  ]);

  const canTakeApprenticeshipFromForm = String(watch('canTakeApprenticeship')) !== 'No';

  const onSubmit: SubmitHandler<StudentProfileRegister> = (data) => {
    const fff = {
      tel: phone,
      firstName: data.firstName,
      lastName: data.lastName,
      githubUsername: data.githubUsername,
      portfolioUrls: ArrayPortfolioUrls,
      projectUrls: ArrayBonusProjectUrls,
      bio: data.bio,
      expectedTypeWork: ExpectedTypeWork.IRRELEVANT,
      targetWorkCity: data.targetWorkCity,
      expectedContractType: ExpectedContractType.EMPLOYMENT_CONTRACT,
      expectedSalary: data.expectedSalary,
      canTakeApprenticeship: canTakeApprenticeshipFromForm,
      // canTakeApprenticeship: false,
      monthsOfCommercialExp: 0,
      education: data.education,
      workExperience: data.workExperience,
      courses: data.courses,
    };
    console.log(fff);
  };

  // console.log('watch', ArrayBonusProjectUrls);

  return (
    <div className="RegisterStudentView">
      <div className="RegisterStudentView__Wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Adres e-mail
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('email', {
                required: 'Pole wymagane',
                minLength: {
                  value: 6,
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

          {errors.email && (
            <p className="RegisterStudentView__Input--error">
              Adres e-mail nie może zawierać mniej niż 6 znaków i więcej niż 255
            </p>
          )}
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
          {errors.tel && (
            <p className="RegisterStudentView__Input--error">Numer telefonu musi zawierać 9 cyfr</p>
          )}
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
            {errors.firstName && (
              <p className="RegisterStudentView__Input--error">
                Musi zawierać minimu, 3 znaki, a maksymalnie 28
              </p>
            )}
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

          {errors.lastName && (
            <p className="RegisterStudentView__Input--error">
              Nazwikso nie musi zawierać conajmniej 3 znaki, a maksymalnie 28
            </p>
          )}
          <label>
            <br />
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
          {errors.githubUsername && (
            <p className="RegisterStudentView__Input--error">
              Pole nie może być puste. Musi zawierać conajmniej 1 znak maksymalnie 255.
            </p>
          )}
          <br />

          <label>
            <br />
            Kilka słów o sobie
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
          {errors.bio && (
            <p className="RegisterStudentView__Input--error">Musisz zmieścić się w 255 znakach</p>
          )}
          <label>
            <br />
            Preferowany typ pracy
            <br />
            <select
              {...register('expectedTypeWork', { required: 'Pole wymagane' })}
              placeholder="Preferowane miejsce pracy"
            >
              <option value={ExpectedTypeWork.IRRELEVANT}>Bez znaczenia</option>
              <option value={ExpectedTypeWork.AT_LOCATION}>Na miejscu</option>
              <option value={ExpectedTypeWork.READY_TO_MOVE}>Gotowość do przeprowadzki</option>
              <option value={ExpectedTypeWork.REMOTE}>Wyłącznie zdalnie</option>
            </select>
          </label>
          <p className="RegisterStudentView__Input--info">Domyślnie bez znaczenia</p>
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
          {errors.targetWorkCity && (
            <p className="RegisterStudentView__Input--error">
              Maksymalna długość nazwy miasta to 30 znaków
            </p>
          )}
          <label>
            <br />
            Oczekiwany typ kontraktu
            <br />
            <select
              {...register('expectedContractType', { required: 'Pole wymagane' })}
              placeholder="Oczekiwany typ kontraktu"
            >
              <option value="">Brak preferencji</option>
              <option value={ExpectedContractType.EMPLOYMENT_CONTRACT}>Tylko umowa o pracę</option>
              <option value={ExpectedContractType.B_TO_B}>Możliwe B2B</option>
              <option value={ExpectedContractType.COMMISSION_CONTRACT_OR_SPECIFIC_TASK_CONTRACT}>
                Możliwe UZ/UoD
              </option>
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
              <option defaultValue="false">Nie</option>
              <option value="true">Tak</option>
            </select>
          </label>
          <p className="RegisterStudentView__Input--info">Domyślnie Nie</p>
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
          {errors.monthsOfCommercialExp && (
            <p className="RegisterStudentView__Input--error">Pole wymagane</p>
          )}
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
          {errors.education && (
            <p className="RegisterStudentView__Input--error">
              Test za długi. Możliwość 65535 znaków
            </p>
          )}
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
          {errors.workExperience && (
            <p className="RegisterStudentView__Input--error">
              Test za długi. Możliwość 65535 znaków
            </p>
          )}
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
          {errors.courses && (
            <p className="RegisterStudentView__Input--error">
              Test za długi. Możliwość 65535 znaków
            </p>
          )}
          <br />
          <label>
            Link do portfolio nr 1
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('portfolioUrlFirst', {
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
              })}
              placeholder="URL do portfolio nr 1"
            />
          </label>

          {errors.portfolioUrlFirst && (
            <p className="RegisterStudentView__Input--error">
              Link do portfolio może mieć maksymalnie 255 znaków.
            </p>
          )}
          <br />

          <label>
            Link do portfolio 2
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('portfolioUrlSecond', {
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
              })}
              placeholder="URL do portfolio nr 2"
            />
          </label>

          {errors.portfolioUrlSecond && (
            <p className="RegisterStudentView__Input--error">
              Link do portfolio może mieć maksymalnie 255 znaków.
            </p>
          )}
          <br />
          <label>
            Link do portfolio nr 3
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('portfolioUrlThird', {
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
              })}
              placeholder="URL do portfolio nr 3"
            />
          </label>

          {errors.portfolioUrlThird && (
            <p className="RegisterStudentView__Input--error">
              Link do portfolio może mieć maksymalnie 255 znaków.
            </p>
          )}
          <br />

          <label>
            Link do portfolio nr 4
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('portfolioUrlFourth', {
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
              })}
              placeholder="URL do portfolio nr 4"
            />
          </label>
          {errors.portfolioUrlFourth && (
            <p className="RegisterStudentView__Input--error">
              Link do portfolio może mieć maksymalnie 255 znaków.
            </p>
          )}
          <br />
          <label>
            Link do portfolio nr 5
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('portfolioUrlFifth', {
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
              })}
              placeholder="URL do portfolio nr 5"
            />
          </label>
          {errors.portfolioUrlFifth && (
            <p className="RegisterStudentView__Input--error">
              Link do portfolio może mieć maksymalnie 255 znaków.
            </p>
          )}
          <br />
          <label>
            Link do projektu bonusowego nr 1
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('bonusProjectUrlFirst', {
                required: 'Pole wymagane',
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
                minLength: {
                  value: 1,
                  message: 'Pole wymagane',
                },
              })}
              placeholder="Repozytorium do projektu zaliczeniowego"
            />
          </label>
          {errors.bonusProjectUrlFirst && (
            <p className="RegisterStudentView__Input--error">
              Pole wymagane. Pole musi zawierać conajmniej 1 znak maksymalnie 255.
            </p>
          )}
          <label>
            <br />
            Link do projektu bonusowego nr 2
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('bonusProjectUrlSecond', {
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
              })}
              placeholder="Repozytorium do projektu zaliczeniowego nr 2"
            />
          </label>
          {errors.bonusProjectUrlSecond && (
            <p className="RegisterStudentView__Input--error">Pole może maksymalnie zawierać 255.</p>
          )}
          <label>
            <br />
            Link do projektu bonusowego nr 3
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('bonusProjectUrlThird', {
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
              })}
              placeholder="Repozytorium do projektu zaliczeniowego nr 3"
            />
          </label>
          {errors.bonusProjectUrlThird && (
            <p className="RegisterStudentView__Input--error">Pole może maksymalnie zawierać 255.</p>
          )}
          <label>
            <br />
            Link do projektu bonusowego nr 4
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('bonusProjectUrlFourth', {
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
              })}
              placeholder="Repozytorium do projektu zaliczeniowego nr 4"
            />
          </label>
          {errors.bonusProjectUrlFourth && (
            <p className="RegisterStudentView__Input--error">Pole może maksymalnie zawierać 255.</p>
          )}
          <label>
            <br />
            Link do projektu bonusowego nr 5
            <br />
            <input
              className="RegisterStudentView__Input"
              {...register('bonusProjectUrlFifth', {
                maxLength: {
                  value: 255,
                  message: 'Maksymalna długość znaków 255',
                },
              })}
              placeholder="Repozytorium do projektu zaliczeniowego nr 5"
            />
          </label>
          {errors.bonusProjectUrlFifth && (
            <p className="RegisterStudentView__Input--error">Pole może maksymalnie zawierać 255.</p>
          )}
          <br />
          <button type="submit" className="mega-k-button">
            Zapisz
          </button>
        </form>
      </div>
    </div>
  );
};
