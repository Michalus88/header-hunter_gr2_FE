import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ExpectedTypeWork, StudentProfileUpdate, ExpectedContractType } from 'types';
// import { StudentProfileUpdate } from 'types';
import { ValidateMsg } from './ValidateMsg';

// enum ExpectedTypeWork {
//   AT_LOCATION,
//   READY_TO_MOVE,
//   REMOTE,
//   HYBRID,
//   IRRELEVANT,
// }

// enum ExpectedContractType {
//   EMPLOYMENT_CONTRACT,
//   B_TO_B,
//   COMMISSION_CONTRACT_OR_SPECIFIC_TASK_CONTRACT,
// }

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

interface StudentProfileRegister {
  email: string;
  tel: string | undefined;
  firstName: string;
  lastName: string;
  githubUsername: string;
  portfolioUrls: string[] | undefined;
  projectUrls: string[];
  bio: string | undefined;
  expectedTypeWork: ExpectedTypeWork;
  targetWorkCity: string | undefined;
  expectedContractType: ExpectedContractType;
  expectedSalary: string | undefined;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: number;
  education: string | undefined;
  workExperience: string | undefined;
  courses: string | undefined;
}

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
      // portfolioUrls: dataStudent.portfolioUrls,
      // projectUrls: dataStudent.projectUrls,
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

  const portfolios = watch(['portfolio1', 'portfolio2', 'portfolio3', 'portfolio4', 'portfolio5']);
  const projects = watch(['project1', 'project2', 'project3', 'project4', 'project5']);

  const expected =
    String(watch('expectedContractType')) === '' ? null : watch('expectedContractType');
  console.log(expected);

  const portfolioArr = portfolios.map((el) => {
    if (el !== '') {
      return el;
    }
    return null;
  });
  const projectArr = projects.map((el) => {
    if (el !== '') {
      return el;
    }
    return null;
  });

  // const names = watch(['firstName', 'lastName']);
  // const [firstName, lastName] = names;
  // console.log(lastName);
  // console.log('imiona', names);
  //
  // const potfrolio = watch('portfolioUrls');
  // console.log(potfrolio);

  const canTakeApprenticeshipFromForm = String(watch('canTakeApprenticeship')) !== 'No';
  console.log('log', canTakeApprenticeshipFromForm);

  const onSubmit: SubmitHandler<StudentProfileUpdate> = (data) => {
    const fff = {
      email: data.email,
      tel: data.tel,
      firstName: data.firstName,
      lastName: data.lastName,
      githubUsername: data.githubUsername,
      portfolioUrls: portfolioArr,
      projectUrls: projectArr,
      bio: data.bio,
      expectedTypeWork: data.expectedTypeWork,
      targetWorkCity: data.targetWorkCity,
      expectedContractType: data.expectedContractType,
      expectedSalary: data.expectedSalary,
      canTakeApprenticeship: canTakeApprenticeshipFromForm,
      // canTakeApprenticeship: false,
      monthsOfCommercialExp: 0,
      education: data.education,
      workExperience: data.workExperience,
      courses: data.courses,
    };
    alert(JSON.stringify(fff));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="student-page__form">
        <input
          type="email"
          {...register('email', {
            required: 'this is required',
            pattern: {
              value: /@/,
              message: 'Invalid email address',
            },
          })}
        />
        <ValidateMsg text={errors.email?.message} />
        <input
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
        <ValidateMsg text={errors.firstName && errors.firstName.message} />
        <input
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
        <ValidateMsg text={errors.lastName && errors.lastName.message} />
        <input
          type="text"
          {...register('tel', {
            maxLength: {
              value: 9,
              message: 'Max length is 9',
            },
          })}
        />
        <ValidateMsg text={errors.tel && errors.tel.message} />
        <input
          type="text"
          {...register('githubUsername', {
            maxLength: {
              value: 255,
              message: 'Max length is 255',
            },
          })}
        />
        {/* ToDO -check that user exist at github
        https://github.com/shinnn/gh-account-exists */}
        <ValidateMsg text={errors.githubUsername && errors.githubUsername.message} />
        <textarea rows={4} cols={50} {...register('bio')} />
        <select {...register('expectedTypeWork')}>
          <option value={ExpectedTypeWork.AT_LOCATION}>Na miejscu</option>
          <option value={ExpectedTypeWork.READY_TO_MOVE}>Gotowość do przeprowadzki</option>
          <option value={ExpectedTypeWork.REMOTE}>Wyłącznie zdalnie</option>
          <option value={ExpectedTypeWork.HYBRID}>Hybrydowo</option>
          <option value={ExpectedTypeWork.IRRELEVANT}>Bez znaczenia</option>
        </select>
        <input
          type="text"
          {...register('targetWorkCity', {
            maxLength: {
              value: 30,
              message: 'Max length is 30',
            },
          })}
        />
        <ValidateMsg text={errors.targetWorkCity && errors.targetWorkCity.message} />
        <select {...register('expectedContractType')}>
          <option value="">Brak preferencji</option>
          <option value={ExpectedContractType.EMPLOYMENT_CONTRACT}>Tylko UoP</option>
          <option value={ExpectedContractType.B_TO_B}>Możliwe B2B</option>
          <option value={ExpectedContractType.COMMISSION_CONTRACT_OR_SPECIFIC_TASK_CONTRACT}>
            Możliwe UZ/UoD
          </option>
        </select>
        <input
          type="text"
          {...register('expectedSalary', {
            maxLength: {
              value: 5,
              message: 'Max length 5',
            },
          })}
        />
        <ValidateMsg text={errors.expectedSalary && errors.expectedSalary.message} />
        <label>
          <div>
            <input
              type="radio"
              value="Yes"
              {...register('canTakeApprenticeship', {
                required: 'one of this checkbox is required',
              })}
              defaultChecked={dataStudent.canTakeApprenticeship}
            />
            Tak
          </div>
        </label>
        <label>
          <div>
            <input
              type="radio"
              value="No"
              {...register('canTakeApprenticeship')}
              defaultChecked={!dataStudent.canTakeApprenticeship}
            />
            Nie
          </div>
        </label>
        <ValidateMsg text={errors.canTakeApprenticeship && errors.canTakeApprenticeship.message} />
        <input
          type="number"
          {...register('monthsOfCommercialExp', {
            max: {
              value: 999,
              message: 'Max length is 999',
            },
          })}
        />
        <ValidateMsg text={errors.monthsOfCommercialExp && errors.monthsOfCommercialExp.message} />
        <input type="text" {...register('education')} />
        <input type="text" {...register('workExperience')} />
        <input type="text" {...register('courses')} />

        <div>
          <input
            type="text"
            {...register('portfolio1')}
            defaultValue={dataStudent.portfolioUrls ? dataStudent.portfolioUrls[0] : ''}
          />
          <input
            type="text"
            {...register('portfolio2')}
            defaultValue={dataStudent.portfolioUrls ? dataStudent.portfolioUrls[1] : ''}
          />
          <input
            type="text"
            {...register('portfolio3')}
            defaultValue={dataStudent.portfolioUrls ? dataStudent.portfolioUrls[2] : ''}
          />
          <input
            type="text"
            {...register('portfolio4')}
            defaultValue={dataStudent.portfolioUrls ? dataStudent.portfolioUrls[3] : ''}
          />
          <input
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
          <input type="text" {...register('project1')} />
          <ValidateMsg text={errors.project1 && errors.project1.message} />
          <input
            type="text"
            {...register('project2')}
            defaultValue={dataStudent.projectUrls ? dataStudent.projectUrls[1] : ''}
          />
          <input
            type="text"
            {...register('project3')}
            defaultValue={dataStudent.projectUrls ? dataStudent.projectUrls[2] : ''}
          />
          <input
            type="text"
            {...register('project4')}
            defaultValue={dataStudent.projectUrls ? dataStudent.projectUrls[3] : ''}
          />
          <input
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
