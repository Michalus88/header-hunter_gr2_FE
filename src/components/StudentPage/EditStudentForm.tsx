import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  ExpectedTypeWork,
  StudentProfileUpdate,
  ExpectedContractType,
  DetailedStudentDataRes,
  StudentProfileRegister,
} from 'types';
import { ValidateMsg } from './ValidateMsg';
import { MegaButton } from '../Elements/MegaButton';
import { MainStudentWrapper } from './MainStudentWrapper';

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

// interface Props {
//   tel: string | undefined;
//   firstName: string;
//   lastName: string;
//   githubUsername: string;
//   portfolioUrls: string[] | [];
//   projectUrls: string[];
//   bio: string | undefined;
//   expectedTypeWork: ExpectedTypeWork;
//   targetWorkCity: string | undefined;
//   expectedContractType: ExpectedContractType;
//   expectedSalary: string | undefined;
//   canTakeApprenticeship: boolean;
//   monthsOfCommercialExp: number;
//   education: string | undefined;
//   workExperience: string | undefined;
//   courses: string | undefined;
// }

export const EditStudentForm = () => {
  const navigate = useNavigate();
  const goBack = () => navigate('/student');
  const [dataStudent, setDataStudent] = useState<DetailedStudentDataRes | null>(null);
  const getStudentDetails = async () => {
    setDataStudent(null);

    const res = await fetch(`http://localhost:3001/api/student/detailed`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(res);
    const data = await res.json();
    setDataStudent(data);
    // console.log(data);
  };

  useEffect(() => {
    getStudentDetails();
  }, []);

  // const [dataStudent, setDataStudent] = useState({
  //   email: 'gnys1001@gmail.com',
  //   tel: '60000000',
  //   firstName: 'Sławek',
  //   lastName: 'Gnyś',
  //   githubUsername: 'sgnys',
  //   portfolioUrls: ['https://portfolio1', 'https://portfolio2'],
  //   projectUrls: ['https://project1', 'https://project2'],
  //   bio: 'Lorem ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus',
  //   expectedTypeWork: ExpectedTypeWork.IRRELEVANT,
  //   targetWorkCity: 'Łódź',
  //   expectedContractType: ExpectedContractType.EMPLOYMENT_CONTRACT,
  //   expectedSalary: '5 000',
  //   canTakeApprenticeship: false,
  //   monthsOfCommercialExp: 0,
  //   education: 'edukacja',
  //   workExperience: 'doświadczenie',
  //   courses: 'ukończone kursy',
  // });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<StudentProfileWithArrayUrls>({
    // defaultValues: {
    //   firstName,
    //   lastName,
    //   tel,
    //   githubUsername: dataStudent?.studentInfo.githubUsername,
    //   // portfolioUrls: dataStudent.portfolioUrls,
    //   // projectUrls: dataStudent.projectUrls,
    //   bio: dataStudent?.studentInfo.bio,
    //   expectedTypeWork: dataStudent?.studentInfo.expectedTypeWork,
    //   targetWorkCity: dataStudent?.studentInfo.targetWorkCity,
    //   expectedContractType: dataStudent?.studentInfo.expectedContractType,
    //   expectedSalary: dataStudent?.studentInfo.expectedSalary,
    //   canTakeApprenticeship: dataStudent?.studentInfo.canTakeApprenticeship,
    //   monthsOfCommercialExp: dataStudent?.studentInfo.monthsOfCommercialExp,
    //   education: dataStudent?.studentInfo.education,
    //   workExperience: dataStudent?.studentInfo.workExperience,
    //   courses: dataStudent?.studentInfo.courses,
    // },
    mode: 'onChange',
  });

  const phone = String(watch('tel')) === '' ? null : watch('tel');
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
      tel: phone,
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
    const res = await fetch(`http://localhost:3001/api/student`, {
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
    <MainStudentWrapper>
      <h2 className="student-page__title-form">Twoje dane które możesz modyfikować</h2>
      <div className="student-page_btns">
        <MegaButton buttonTitle="Wróć do CV" onClick={goBack} classNameAdd="megak-primary" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="student-page__form">
          <div className="student-page__input-container">
            <label>
              <span>Imię:</span>
              <input
                defaultValue={dataStudent?.studentInfo.firstName}
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
                defaultValue={dataStudent?.studentInfo.lastName}
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
                defaultValue={dataStudent?.studentInfo.tel}
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
                defaultValue={dataStudent?.studentInfo.githubUsername}
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
          <ValidateMsg text={errors.githubUsername && errors.githubUsername.message} />

          <div className="student-page__input-container">
            <label>
              <span>Krótkie bio:</span>
              <textarea
                defaultValue={dataStudent?.studentInfo.bio}
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
              <select
                {...register('expectedTypeWork')}
                defaultValue={
                  dataStudent?.studentInfo.expectedTypeWork !== null
                    ? dataStudent?.studentInfo.expectedTypeWork
                    : ''
                }
              >
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
                defaultValue={dataStudent?.studentInfo.targetWorkCity}
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
              <select
                {...register('expectedContractType')}
                defaultValue={
                  dataStudent?.studentInfo.expectedContractType !== null
                    ? dataStudent?.studentInfo.expectedContractType
                    : ''
                }
              >
                {/* <option value="">Brak preferencji</option> */}
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
                defaultValue={dataStudent?.studentInfo.expectedSalary}
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
                defaultChecked={dataStudent?.studentInfo.canTakeApprenticeship}
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
                defaultChecked={!dataStudent?.studentInfo.canTakeApprenticeship}
                type="radio"
                value="No"
                {...register('canTakeApprenticeship')}
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
                defaultValue={dataStudent?.studentInfo.monthsOfCommercialExp}
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
                defaultValue={dataStudent?.studentInfo.education}
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
                defaultValue={dataStudent?.studentInfo.workExperience}
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
                defaultValue={dataStudent?.studentInfo.courses}
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
                  defaultValue={
                    dataStudent?.studentInfo.portfolioUrls
                      ? dataStudent.studentInfo.portfolioUrls[0]?.url
                      : ''
                  }
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
                  defaultValue={
                    dataStudent?.studentInfo.portfolioUrls
                      ? dataStudent.studentInfo.portfolioUrls[1]?.url
                      : ''
                  }
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
                  defaultValue={
                    dataStudent?.studentInfo.portfolioUrls
                      ? dataStudent.studentInfo.portfolioUrls[2]?.url
                      : ''
                  }
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
                  defaultValue={
                    dataStudent?.studentInfo.portfolioUrls
                      ? dataStudent.studentInfo.portfolioUrls[3]?.url
                      : ''
                  }
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
                  defaultValue={
                    dataStudent?.studentInfo.portfolioUrls
                      ? dataStudent.studentInfo.portfolioUrls[4]?.url
                      : ''
                  }
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
                  defaultValue={
                    dataStudent?.studentInfo.projectUrls
                      ? dataStudent.studentInfo.projectUrls[0]?.url
                      : ''
                  }
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
                  defaultValue={
                    dataStudent?.studentInfo.projectUrls
                      ? dataStudent.studentInfo.projectUrls[1]?.url
                      : ''
                  }
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
                  defaultValue={
                    dataStudent?.studentInfo.projectUrls
                      ? dataStudent.studentInfo.projectUrls[2]?.url
                      : ''
                  }
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
                  defaultValue={
                    dataStudent?.studentInfo.projectUrls
                      ? dataStudent.studentInfo.projectUrls[3]?.url
                      : ''
                  }
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
                  defaultValue={
                    dataStudent?.studentInfo.projectUrls
                      ? dataStudent.studentInfo.projectUrls[4]?.url
                      : ''
                  }
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
    </MainStudentWrapper>
  );
};
