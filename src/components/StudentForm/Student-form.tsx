import React, { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { ExpectedTypeWork, StudentProfileRegister, ExpectedContractType } from 'types';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { ValidateMsg } from '../StudentPage/ValidateMsg';
import { setIfErrMsg } from '../../helpers/setIfErrMsg';
import { setNotification } from '../../helpers/setNotification';
import { useApp } from '../../hooks/useApp';
import { useStudentForm } from '../../hooks/useStudentForm';

interface Props {
  mode: 'update' | 'activate';
}

// interface StudentProfileWithArrayUrls extends StudentProfileRegister {
//   portfolio1: string | undefined;
//   portfolio2: string | undefined;
//   portfolio3: string | undefined;
//   portfolio4: string | undefined;
//   portfolio5: string | undefined;
//   project1: string | undefined;
//   project2: string | undefined;
//   project3: string | undefined;
//   project4: string | undefined;
//   project5: string | undefined;
// }

// const DEFAULT_VALUES: StudentProfileWithArrayUrls = {
//   tel: '',
//   firstName: '',
//   lastName: '',
//   githubUsername: '',
//   portfolioUrls: [],
//   projectUrls: [],
//   portfolio1: undefined,
//   portfolio2: undefined,
//   portfolio3: undefined,
//   portfolio4: undefined,
//   portfolio5: undefined,
//   project1: undefined,
//   project2: undefined,
//   project3: undefined,
//   project4: undefined,
//   project5: undefined,
//   bio: undefined,
//   expectedTypeWork: undefined,
//   targetWorkCity: undefined,
//   expectedContractType: undefined,
//   expectedSalary: undefined,
//   canTakeApprenticeship: false,
//   monthsOfCommercialExp: 0,
//   education: undefined,
//   workExperience: undefined,
//   courses: undefined,
// };

export const StudentForm = ({ mode }: Props) => {
  const navigate = useNavigate();
  const { userId, registerToken } = useParams();
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   reset,
  //   formState: { errors },
  // } = useForm<StudentProfileWithArrayUrls>({
  //   defaultValues,
  //   mode: 'onChange',
  // });
  const { toast } = useApp();
  const { defaultValues, register, handleSubmit, watch, errors } = useStudentForm({ mode });

  // const [defaultValues, setDefaultValues] = useState<StudentProfileWithArrayUrls>(DEFAULT_VALUES);

  // const getStudentDetails = async () => {
  //   const res = await fetch(
  //     `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_STUDENT}`,
  //     {
  //       method: 'GET',
  //       credentials: 'include',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     },
  //   );
  //   const urlsObject: Record<string, any> = {};
  //   const data = (await res.json()) as DetailedStudentDataRes;
  //   data.studentInfo.portfolioUrls.forEach(({ url }, index) => {
  //     const name = `portfolio${index + 1}`;
  //     urlsObject[name] = url;
  //   });
  //   data.studentInfo.projectUrls.forEach(({ url }, index) => {
  //     const name = `project${index + 1}`;
  //     urlsObject[name] = url;
  //   });
  //   const studentInfoWithoutUrls: Omit<StudentInfo, 'portfolioUrls' | 'projectUrls'> =
  //     data.studentInfo;
  //   const studentInfo = { ...DEFAULT_VALUES, ...urlsObject, ...studentInfoWithoutUrls };
  //   setDefaultValues(studentInfo);
  //   reset(studentInfo);
  // };
  //
  // useEffect(() => {
  //   if (mode === 'update') {
  //     getStudentDetails();
  //   }
  // }, []);

  const telFromForm = String(watch('tel')) === '' ? null : watch('tel');
  const bioFromForm = String(watch('bio')) === '' ? null : watch('bio');
  const targetWorkCityFromForm =
    String(watch('targetWorkCity')) === '' ? null : watch('targetWorkCity');
  const expectedSalary = String(watch('expectedSalary')) === '' ? null : watch('expectedSalary');
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
    portfolioArr = [];
    projectArr = [];
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
    const studentInfo = {
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
      expectedSalary,
      canTakeApprenticeship: canTakeApprenticeshipFromForm,
      monthsOfCommercialExp: Number(data.monthsOfCommercialExp),
      education: educationFromForm,
      workExperience: workExperienceFromForm,
      courses: coursesFromForm,
    };
    const path =
      mode === 'update'
        ? process.env.REACT_APP_STUDENT
        : `${process.env.REACT_APP_STUDENT_ACTIVATE}/${userId}/${registerToken}`;
    const method = mode === 'update' ? 'PUT' : 'POST';
    const redirect = mode === 'update' ? '/student' : '/';
    const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}${path}`, {
      method,
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentInfo),
    });
    const errMsg = await setIfErrMsg(res);
    if (errMsg) {
      setNotification(toast, errMsg);
      if (res.status === 403) {
        navigate('/');
      }
    }
    const resObj = await res.json();
    setNotification(toast, resObj.message, 'success');
    navigate(redirect);
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
                <option value={ExpectedTypeWork.IRRELEVANT}>Bez znaczenia</option>
                <option value={ExpectedTypeWork.AT_LOCATION}>Na miejscu</option>
                <option value={ExpectedTypeWork.READY_TO_MOVE}>Gotowość do przeprowadzki</option>
                <option value={ExpectedTypeWork.REMOTE}>Wyłącznie zdalnie</option>
                <option value={ExpectedTypeWork.HYBRID}>Hybrydowo</option>
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
                <option value={ExpectedContractType.IRRELEVANT}>Brak preferencji</option>
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
