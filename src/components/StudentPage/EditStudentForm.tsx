import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ExpectedTypeWork, StudentProfileUpdate, ExpectedContractType } from 'types';
import { ValidateMsg } from './ValidateMsg';
import { MegaButton } from '../Elements/MegaButton';

interface StudentProfileWithArrayUrls extends StudentProfileUpdate {
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

export const EditStudentForm = () => {
  const [dataStudent, setDataStudent] = useState({
    email: 'gnys1001@gmail.com',
    tel: '60000000',
    firstName: 'Sławek',
    lastName: 'Gnyś',
    githubUsername: 'sgnys',
    portfolioUrls: ['https://portfolio1', 'https://portfolio2'],
    projectUrls: ['https://project1', 'https://project2'],
    bio: 'Lorem ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus',
    expectedTypeWork: ExpectedTypeWork.IRRELEVANT,
    targetWorkCity: 'Łódź',
    expectedContractType: ExpectedContractType.EMPLOYMENT_CONTRACT,
    expectedSalary: '5 000',
    canTakeApprenticeship: false,
    monthsOfCommercialExp: 0,
    education: 'edukacja',
    workExperience: 'doświadczenie',
    courses: 'ukończone kursy',
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<StudentProfileWithArrayUrls>({
    defaultValues: {
      firstName: dataStudent.firstName,
      lastName: dataStudent.lastName,
      tel: dataStudent.tel,
      githubUsername: dataStudent.githubUsername,
      portfolioUrls: dataStudent.portfolioUrls,
      projectUrls: dataStudent.projectUrls,
      bio: dataStudent.bio,
      expectedTypeWork: dataStudent.expectedTypeWork,
      email: dataStudent.email,
      targetWorkCity: dataStudent.targetWorkCity,
      expectedContractType: dataStudent.expectedContractType,
      expectedSalary: dataStudent.expectedSalary,
      canTakeApprenticeship: dataStudent.canTakeApprenticeship,
      monthsOfCommercialExp: dataStudent.monthsOfCommercialExp,
      education: dataStudent.education,
      workExperience: dataStudent.workExperience,
      courses: dataStudent.courses,
    },
    mode: 'onChange',
  });

  const userId = '2609e8f2-36d4-4f8f-a886-00156a721119';

  const tel = String(watch('tel')) === '' ? null : watch('tel');
  const bio = String(watch('bio')) === '' ? null : watch('bio');
  const targetWorkCity = String(watch('targetWorkCity')) === '' ? null : watch('targetWorkCity');
  const expectedSalary = String(watch('expectedSalary')) === '' ? null : watch('expectedSalary');
  const education = String(watch('education')) === '' ? null : watch('education');
  const workExperience = String(watch('workExperience')) === '' ? null : watch('workExperience');
  const courses = String(watch('courses')) === '' ? null : watch('courses');
  const expectedContractType =
    String(watch('expectedContractType')) === '' ? null : watch('expectedContractType');
  const canTakeApprenticeship = String(watch('canTakeApprenticeship')) !== 'No';

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

  const onSubmit: SubmitHandler<StudentProfileUpdate> = async (data) => {
    const fff = {
      email: data.email,
      tel,
      firstName: data.firstName,
      lastName: data.lastName,
      githubUsername: data.githubUsername,
      portfolioUrls: portfolioArr,
      projectUrls: projectArr,
      bio,
      expectedTypeWork: data.expectedTypeWork,
      targetWorkCity,
      expectedContractType,
      expectedSalary,
      canTakeApprenticeship,
      monthsOfCommercialExp: Number(data.monthsOfCommercialExp),
      education,
      workExperience,
      courses,
    };
    alert(JSON.stringify(fff));
    const res = await fetch(`http://localhost:3001/api/student/${userId}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fff),
    });
    console.log(res);
    const test = await res.json();
    console.log(test);
  };

  return (
    <>
      <h2 className="student-page__title-form">Twoje dane które możesz modyfikować</h2>
      <div className="student-page_btns">
        <MegaButton buttonTitle="Zatrudniony" onClick={() => {}} classNameAdd="megak-primary" />
        <MegaButton buttonTitle="Pokaż CV" onClick={() => {}} classNameAdd="megak-primary" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="student-page__form">
          <div className="student-page__input-container">
            <label>
              <span>E-mail:</span>
              <input
                className="student-page__input"
                type="email"
                {...register('email', {
                  required: 'this is required',
                  pattern: {
                    value: /@/,
                    message: 'Invalid email address',
                  },
                })}
              />
            </label>
          </div>
          <ValidateMsg text={errors.email?.message} />

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
                  maxLength: {
                    value: 255,
                    message: 'Max length is 255',
                  },
                })}
              />
            </label>
          </div>
          {/* ToDO -check that user exist at github
        https://github.com/shinnn/gh-account-exists */}
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
                <option value={ExpectedTypeWork.AT_LOCATION}>Na miejscu</option>
                <option value={ExpectedTypeWork.READY_TO_MOVE}>Gotowość do przeprowadzki</option>
                <option value={ExpectedTypeWork.REMOTE}>Wyłącznie zdalnie</option>
                <option value={ExpectedTypeWork.HYBRID}>Hybrydowo</option>
                <option value={ExpectedTypeWork.IRRELEVANT}>Bez znaczenia</option>
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
                defaultChecked={dataStudent.canTakeApprenticeship}
              />
              <span>Tak</span>
            </div>
            <div className="student-page__radio">
              <input
                type="radio"
                value="No"
                {...register('canTakeApprenticeship')}
                defaultChecked={!dataStudent.canTakeApprenticeship}
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
                  defaultValue={dataStudent.portfolioUrls ? dataStudent.portfolioUrls[0] : ''}
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
                  defaultValue={dataStudent.portfolioUrls ? dataStudent.portfolioUrls[1] : ''}
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
                  defaultValue={dataStudent.portfolioUrls ? dataStudent.portfolioUrls[2] : ''}
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
                  defaultValue={dataStudent.portfolioUrls ? dataStudent.portfolioUrls[3] : ''}
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
                  defaultValue={dataStudent.portfolioUrls ? dataStudent.portfolioUrls[3] : ''}
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
                  defaultValue={dataStudent.projectUrls ? dataStudent.projectUrls[0] : ''}
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
                  defaultValue={dataStudent.projectUrls ? dataStudent.projectUrls[1] : ''}
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
                  defaultValue={dataStudent.projectUrls ? dataStudent.projectUrls[2] : ''}
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
                  defaultValue={dataStudent.projectUrls ? dataStudent.projectUrls[3] : ''}
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
                  defaultValue={dataStudent.projectUrls ? dataStudent.projectUrls[4] : ''}
                />
              </label>
            </div>
            <ValidateMsg text={errors.project5 && errors.project5.message} />
          </div>

          <button className="mega-k-button megak-primary edit" type="submit">
            Edytuj
          </button>
        </div>
      </form>
    </>
  );
};
