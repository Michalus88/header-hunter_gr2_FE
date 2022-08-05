import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ExpectedTypeWork, StudentProfileUpdate, ExpectedContractType } from 'types';
import { ValidateMsg } from './ValidateMsg';

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

// interface StudentProfileRegister {
//   email: string;
//   tel: string | undefined;
//   firstName: string;
//   lastName: string;
//   githubUsername: string;
//   portfolioUrls: string[] | null;
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
  const [dataStudent, setDataStudent] = useState({
    email: 'gnys1001@gmail.com',
    tel: '60000000',
    firstName: 'Sławek',
    lastName: 'Gnyś',
    githubUsername: 'sgnys',
    portfolioUrls: ['portfolio1', 'portfolio2'],
    projectUrls: ['project1', 'project2'],
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

    portfolioArr = portfolios.map((el) => (el !== '' ? el : null));
    projectArr = projects.map((el) => (el !== '' ? el : null));
  }, [portfolioArr, projectArr]);

  const onSubmit: SubmitHandler<StudentProfileUpdate> = (data) => {
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="student-page__form">
        <div>
          <label>
            E-mail:
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

        <div>
          <label>
            Imię:
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

        <div>
          <label>
            Nazwisko:
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

        <div>
          <label>
            Numer telefonu:
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

        <div>
          <label>
            GitHub (username):
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

        <div>
          <label>
            Krótkie bio:
            <textarea className="student-page__textarea" rows={4} cols={50} {...register('bio')} />
          </label>
        </div>

        <div>
          <label>
            Preferowane miejsce pracy:
            <select {...register('expectedTypeWork')}>
              <option value={ExpectedTypeWork.AT_LOCATION}>Na miejscu</option>
              <option value={ExpectedTypeWork.READY_TO_MOVE}>Gotowość do przeprowadzki</option>
              <option value={ExpectedTypeWork.REMOTE}>Wyłącznie zdalnie</option>
              <option value={ExpectedTypeWork.HYBRID}>Hybrydowo</option>
              <option value={ExpectedTypeWork.IRRELEVANT}>Bez znaczenia</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Docelowe miasto pracy:
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

        <div>
          <label>
            Oczekiwany typ kontraktu:
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

        <div>
          <label>
            Oczekiwane miesięczne netto:
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

        <div>
          <label>
            <input
              className="student-page__radio"
              type="radio"
              value="Yes"
              {...register('canTakeApprenticeship', {
                required: 'one of this checkbox is required',
              })}
              defaultChecked={dataStudent.canTakeApprenticeship}
            />
            Tak
          </label>
        </div>

        <div>
          <label>
            <input
              className="student-page__input"
              type="radio"
              value="No"
              {...register('canTakeApprenticeship')}
              defaultChecked={!dataStudent.canTakeApprenticeship}
            />
            Nie
          </label>
        </div>

        <ValidateMsg text={errors.canTakeApprenticeship && errors.canTakeApprenticeship.message} />
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
        <ValidateMsg text={errors.monthsOfCommercialExp && errors.monthsOfCommercialExp.message} />
        <textarea
          className="student-page__textarea"
          rows={4}
          cols={50}
          {...register('education')}
        />
        <textarea
          className="student-page__textarea"
          rows={4}
          cols={50}
          {...register('workExperience')}
        />
        <textarea className="student-page__textarea" rows={4} cols={50} {...register('courses')} />

        <div>
          <input
            className="student-page__input"
            type="text"
            {...register('portfolio1')}
            defaultValue={dataStudent.portfolioUrls ? dataStudent.portfolioUrls[0] : ''}
          />
          <input
            className="student-page__input"
            type="text"
            {...register('portfolio2')}
            defaultValue={dataStudent.portfolioUrls ? dataStudent.portfolioUrls[1] : ''}
          />
          <input
            className="student-page__input"
            type="text"
            {...register('portfolio3')}
            defaultValue={dataStudent.portfolioUrls ? dataStudent.portfolioUrls[2] : ''}
          />
          <input
            className="student-page__input"
            type="text"
            {...register('portfolio4')}
            defaultValue={dataStudent.portfolioUrls ? dataStudent.portfolioUrls[3] : ''}
          />
          <input
            className="student-page__input"
            type="text"
            {...register('portfolio5')}
            defaultValue={dataStudent.portfolioUrls ? dataStudent.portfolioUrls[4] : ''}
          />
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

        <div>
          <input className="student-page__input" type="text" {...register('project1')} />
          <ValidateMsg text={errors.project1 && errors.project1.message} />
          <input
            className="student-page__input"
            type="text"
            {...register('project2')}
            defaultValue={dataStudent.projectUrls ? dataStudent.projectUrls[1] : ''}
          />
          <input
            className="student-page__input"
            type="text"
            {...register('project3')}
            defaultValue={dataStudent.projectUrls ? dataStudent.projectUrls[2] : ''}
          />
          <input
            className="student-page__input"
            type="text"
            {...register('project4')}
            defaultValue={dataStudent.projectUrls ? dataStudent.projectUrls[3] : ''}
          />
          <input
            className="student-page__input"
            type="text"
            {...register('project5')}
            defaultValue={dataStudent.projectUrls ? dataStudent.projectUrls[4] : ''}
          />
        </div>

        <button type="submit">Edytuj</button>
      </div>
    </form>
  );
};
