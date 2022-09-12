import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ExpectedTypeWork, StudentProfileRegister, ExpectedContractType, UrlEntity } from 'types';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { ValidateMsg } from '../StudentPage/ValidateMsg';
import { setIfErrMsg } from '../../helpers/setIfErrMsg';
import { setNotification } from '../../helpers/setNotification';
import { useAuth } from '../../hooks/useAuth';

interface Props {
  mode: 'update' | 'activate';
}

interface StudentProfileWithArrayUrls extends StudentProfileRegister {
  portfolio1: string | undefined;
  portfolio2: string | undefined;
  portfolio3: string | undefined;
  portfolio4: string | undefined;
  portfolio5: string | undefined;
  project1: string | undefined;
  project2: string | undefined;
  project3: string | undefined;
  project4: string | undefined;
  project5: string | undefined;
}

export const StudentForm = (props?: Props) => {
  const navigate = useNavigate();
  const { toast } = useAuth();
  const { userId, registerToken } = useParams();
  const [defaultValues, setDefaultValues] = useState<DefaultValues | null>(null);

  useEffect(() => {
    if (props !== undefined) {
      const {
        tel = undefined,
        firstName,
        lastName,
        githubUsername,
        projectUrls,
        portfolioUrls,
        bio,
        expectedTypeWork,
        targetWorkCity,
        expectedContractType,
        expectedSalary,
        canTakeApprenticeship,
        monthsOfCommercialExp,
        education,
        workExperience,
        courses,
      } = props;

      const projectUrlsWithoutId = projectUrls.map((el) => (el ? el.url : undefined));
      const portfolioUrlsWithoutId = portfolioUrls.map((el) => (el ? el.url : undefined));
      setDefaultValues({
        firstName,
        lastName,
        tel,
        githubUsername,
        projectUrls: projectUrlsWithoutId,
        portfolioUrls: portfolioUrlsWithoutId,
        bio,
        expectedTypeWork,
        targetWorkCity,
        expectedContractType,
        expectedSalary,
        canTakeApprenticeship,
        monthsOfCommercialExp,
        education,
        workExperience,
        courses,
      });
    }
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<StudentProfileWithArrayUrls>({
    defaultValues: defaultValues ?? {},
    mode: 'onChange',
  });

  const telFromForm = String(watch('tel')) === '' ? null : watch('tel');
  const bioFromForm = String(watch('bio')) === '' ? null : watch('bio');
  const targetWorkCityFromForm =
    String(watch('targetWorkCity')) === '' ? null : watch('targetWorkCity');
  const expectedSalaryFromForm =
    String(watch('expectedSalary')) === '' ? null : watch('expectedSalary');
  const educationFromForm = String(watch('education')) === '' ? null : watch('education');
  const workExperienceFromForm =
    String(watch('workExperience')) === '' ? null : watch('workExperience');
  const coursesFromForm = String(watch('courses')) === '' ? null : watch('courses');
  const expectedContractTypeFromForm =
    String(watch('expectedContractType')) === '' ? null : watch('expectedContractType');
  const canTakeApprenticeshipFromForm = String(watch('canTakeApprenticeship')) !== 'No';

  let portfolioArr: (string | undefined | null)[] = [];
  let projectArr: (string | undefined | null)[] = [];
  useEffect(() => {
    const portfolios = watch([
      'portfolio1',
      'portfolio2',
      'portfolio3',
      'portfolio4',
      'portfolio5',
    ]);
    const projects = watch(['project1', 'project2', 'project3', 'project4', 'project5']);

    portfolioArr = portfolios.filter((el) => el);
    projectArr = projects.filter((el) => el);
  }, [portfolioArr, projectArr]);

  const onSubmit: SubmitHandler<StudentProfileRegister> = async (data) => {
    const data2 = {
      tel: telFromForm,
      firstName: data.firstName,
      lastName: data.lastName,
      githubUsername: data.githubUsername,
      portfolioUrls: portfolioArr,
      projectUrls: projectArr,
      bio: bioFromForm,
      expectedTypeWork: data.expectedTypeWork,
      targetWorkCity: targetWorkCityFromForm,
      expectedContractType: expectedContractTypeFromForm,
      expectedSalary: expectedSalaryFromForm,
      canTakeApprenticeship: canTakeApprenticeshipFromForm,
      monthsOfCommercialExp: Number(data.monthsOfCommercialExp),
      education: educationFromForm,
      workExperience: workExperienceFromForm,
      courses: coursesFromForm,
    };
    const res = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_STUDENT_ACTIVATE}/${userId}/${registerToken}`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data2),
      },
    );
    const errMsg = await setIfErrMsg(res);
    if (errMsg) {
      setNotification(toast, errMsg);
      if (res.status === 403) {
        navigate('/');
      }
    }
    const resObj = await res.json();
    setNotification(toast, resObj.message, 'success');
    navigate('/');
  };

  return (
    <>
      <h2 style={{ marginTop: '90px' }} className="student-page__title-form">
        Formularz aktywacyjny
      </h2>
      <div className="student-page_btns" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="student-page__form">
          <div className="student-page__input-container">
            <label>
              <span>Imię:</span>
              <input
                className="student-page__input"
                type="text"
                {...register('firstName', {
                  required: 'this is a required',
                  maxLength: {
                    value: 255,
                    message: 'Max length is 255',
                  },
                  minLength: {
                    value: 3,
                    message: 'Min length is 3',
                  },
                })}
              />
            </label>
          </div>
          <ValidateMsg text={errors.firstName && errors.firstName.message} />

          <div className="student-page__input-container">
            <label>
              <span>Nazwisko:</span>
              <input
                className="student-page__input"
                type="text"
                {...register('lastName', {
                  required: 'this is a required',
                  maxLength: {
                    value: 255,
                    message: 'Max length is 255',
                  },
                  minLength: {
                    value: 3,
                    message: 'Min length is 3',
                  },
                })}
              />
            </label>
          </div>
          <ValidateMsg text={errors.lastName && errors.lastName.message} />

          <div className="student-page__input-container">
            <label>
              <span>Numer telefonu:</span>
              <input
                className="student-page__input"
                type="text"
                {...register('tel', {
                  maxLength: {
                    value: 9,
                    message: 'Max length is 9',
                  },
                })}
              />
            </label>
          </div>
          <ValidateMsg text={errors.tel && errors.tel.message} />

          <div className="student-page__input-container">
            <label>
              <span>GitHub (username):</span>
              <input
                className="student-page__input"
                type="text"
                {...register('githubUsername', {
                  required: 'this is a required',
                  maxLength: {
                    value: 255,
                    message: 'Max length is 255',
                  },
                })}
              />
            </label>
          </div>
          <ValidateMsg text={errors.githubUsername && errors.githubUsername.message} />

          <div className="student-page__input-container">
            <label>
              <span>Krótkie bio:</span>
              <textarea
                className="student-page__textarea"
                rows={4}
                cols={50}
                {...register('bio')}
              />
            </label>
          </div>

          <div className="student-page__input-container">
            <label>
              <span>Preferowane miejsce pracy:</span>
              <select {...register('expectedTypeWork')}>
                <option value="">Bez znaczenia</option>
                <option value={ExpectedTypeWork.AT_LOCATION}>Na miejscu</option>
                <option value={ExpectedTypeWork.READY_TO_MOVE}>Gotowość do przeprowadzki</option>
                <option value={ExpectedTypeWork.REMOTE}>Wyłącznie zdalnie</option>
                <option value={ExpectedTypeWork.HYBRID}>Hybrydowo</option>
                {/* <option value={ExpectedTypeWork.IRRELEVANT}>Bez znaczenia</option> */}
              </select>
            </label>
          </div>

          <div className="student-page__input-container">
            <label>
              <span>Docelowe miasto pracy:</span>
              <input
                className="student-page__input"
                type="text"
                {...register('targetWorkCity', {
                  maxLength: {
                    value: 30,
                    message: 'Max length is 30',
                  },
                })}
              />
            </label>
          </div>
          <ValidateMsg text={errors.targetWorkCity && errors.targetWorkCity.message} />

          <div className="student-page__input-container">
            <label>
              <span>Oczekiwany typ kontraktu:</span>
              <select {...register('expectedContractType')}>
                <option value="">Brak preferencji</option>
                <option value={ExpectedContractType.EMPLOYMENT_CONTRACT}>Tylko UoP</option>
                <option value={ExpectedContractType.B_TO_B}>Możliwe B2B</option>
                <option value={ExpectedContractType.COMMISSION_CONTRACT_OR_SPECIFIC_TASK_CONTRACT}>
                  Możliwe UZ/UoD
                </option>
              </select>
            </label>
          </div>

          <div className="student-page__input-container">
            <label>
              <span>Oczekiwane wynagrodzenie netto:</span>
              <input
                className="student-page__input"
                type="text"
                {...register('expectedSalary', {
                  maxLength: {
                    value: 5,
                    message: 'Max length 5',
                  },
                })}
              />
              zł.
            </label>
          </div>
          <ValidateMsg text={errors.expectedSalary && errors.expectedSalary.message} />

          <div className="student-page__radio-container">
            <p>Zgoda na bezplatne praktyki/staż:</p>
            <div className="student-page__radio">
              <input
                type="radio"
                value="Yes"
                {...register('canTakeApprenticeship', {
                  required: 'one of this checkbox is required',
                })}
              />
              <span>Tak</span>
            </div>
            <div className="student-page__radio">
              <input
                type="radio"
                value="No"
                {...register('canTakeApprenticeship')}
                defaultChecked
              />
              <span>Nie</span>
            </div>
          </div>

          <ValidateMsg
            text={errors.canTakeApprenticeship && errors.canTakeApprenticeship.message}
          />

          <div className="student-page__input-container">
            <label>
              <span>Ilość m-cy doświadczenia komercyjnego:</span>
              <input
                className="student-page__input"
                type="number"
                {...register('monthsOfCommercialExp', {
                  max: {
                    value: 999,
                    message: 'Max length is 999',
                  },
                })}
              />
            </label>
          </div>
          <ValidateMsg
            text={errors.monthsOfCommercialExp && errors.monthsOfCommercialExp.message}
          />

          <div className="student-page__input-container">
            <label>
              <span>Edukacja:</span>
              <textarea
                className="student-page__textarea"
                rows={4}
                cols={50}
                {...register('education')}
              />
            </label>
          </div>

          <div className="student-page__input-container">
            <label>
              <span>Doświadczenie:</span>
              <textarea
                className="student-page__textarea"
                rows={4}
                cols={50}
                {...register('workExperience')}
              />
            </label>
          </div>

          <div className="student-page__input-container">
            <label>
              <span>Ukończone kursy:</span>
              <textarea
                className="student-page__textarea"
                rows={4}
                cols={50}
                {...register('courses')}
              />
            </label>
          </div>

          <h3>Linki do Portfolio</h3>
          <div className="student-page__portfolio-urls">
            <div className="student-page__input-container">
              <label>
                <span>No. 1:</span>
                <input
                  className="student-page__input"
                  type="text"
                  {...register('portfolio1', {
                    pattern: {
                      value: /^http/,
                      message: 'Invalid url',
                    },
                  })}
                />
              </label>
            </div>
            <ValidateMsg text={errors.portfolio1 && errors.portfolio1.message} />

            <div className="student-page__input-container">
              <label>
                <span>No. 2:</span>
                <input
                  className="student-page__input"
                  type="text"
                  {...register('portfolio2', {
                    pattern: {
                      value: /^http/,
                      message: 'Invalid url',
                    },
                  })}
                />
              </label>
            </div>
            <ValidateMsg text={errors.portfolio2 && errors.portfolio2.message} />

            <div className="student-page__input-container">
              <label>
                <span>No. 3:</span>
                <input
                  className="student-page__input"
                  type="text"
                  {...register('portfolio3', {
                    pattern: {
                      value: /^http/,
                      message: 'Invalid url',
                    },
                  })}
                />
              </label>
            </div>
            <ValidateMsg text={errors.portfolio3 && errors.portfolio3.message} />

            <div className="student-page__input-container">
              <label>
                <span>No. 4:</span>
                <input
                  className="student-page__input"
                  type="text"
                  {...register('portfolio4', {
                    pattern: {
                      value: /^http/,
                      message: 'Invalid url',
                    },
                  })}
                />
              </label>
            </div>
            <ValidateMsg text={errors.portfolio4 && errors.portfolio4.message} />

            <div className="student-page__input-container">
              <label>
                <span>No. 5:</span>
                <input
                  className="student-page__input"
                  type="text"
                  {...register('portfolio5', {
                    pattern: {
                      value: /^http/,
                      message: 'Invalid url',
                    },
                  })}
                />
              </label>
            </div>
            <ValidateMsg text={errors.portfolio5 && errors.portfolio5.message} />
          </div>

          {/* <div> */}
          {/*  <h3>test</h3> */}
          {/*  {dataStudent.portfolioUrls?.map((url: string, index: number) => { */}
          {/*    const portfolio = `portfolio${index + 1}`; */}
          {/*    console.log('sprawdzenie', portfolio); */}

          {/*    return ( */}
          {/*      <> */}
          {/*        <input key={url} type="url" {...register({ portfolio1 })} defaultValue={url} /> */}
          {/*        <p>{url}</p> */}
          {/*      </> */}
          {/*    ); */}
          {/*  })} */}
          {/* </div> */}
          <h3>Linki do Projektów zaliczeniowych</h3>
          <div className="student-page__project-urls">
            <div className="student-page__input-container">
              <label>
                <span>No. 1:</span>
                <input
                  className="student-page__input"
                  type="text"
                  {...register('project1', {
                    required: 'this is a required',
                    pattern: {
                      value: /^http/,
                      message: 'Invalid url',
                    },
                  })}
                />
              </label>
            </div>
            <ValidateMsg text={errors.project1 && errors.project1.message} />

            <div className="student-page__input-container">
              <label>
                <span>No. 2:</span>
                <input
                  className="student-page__input"
                  type="text"
                  {...register('project2', {
                    pattern: {
                      value: /^http/,
                      message: 'Invalid url',
                    },
                  })}
                />
              </label>
            </div>
            <ValidateMsg text={errors.project2 && errors.project2.message} />

            <div className="student-page__input-container">
              <label>
                <span>No. 3:</span>
                <input
                  className="student-page__input"
                  type="text"
                  {...register('project3', {
                    pattern: {
                      value: /^http/,
                      message: 'Invalid url',
                    },
                  })}
                />
              </label>
            </div>
            <ValidateMsg text={errors.project3 && errors.project3.message} />

            <div className="student-page__input-container">
              <label>
                <span>No. 4:</span>
                <input
                  className="student-page__input"
                  type="text"
                  {...register('project4', {
                    pattern: {
                      value: /^http/,
                      message: 'Invalid url',
                    },
                  })}
                />
              </label>
            </div>
            <ValidateMsg text={errors.project4 && errors.project4.message} />

            <div className="student-page__input-container">
              <label>
                <span>No. 5:</span>
                <input
                  className="student-page__input"
                  type="text"
                  {...register('project5', {
                    pattern: {
                      value: /^http/,
                      message: 'Invalid url',
                    },
                  })}
                />
              </label>
            </div>
            <ValidateMsg text={errors.project5 && errors.project5.message} />
          </div>

          <button className="mega-k-button megak-primary edit" type="submit">
            Zapisz
          </button>
        </div>
      </form>
    </>
  );
};