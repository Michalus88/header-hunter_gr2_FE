import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// import { ExpectedTypeWork } from 'types';
// import { StudentProfileUpdate } from 'types';
import { ValidateMsg } from './ValidateMsg';

enum ExpectedTypeWork {
  AT_LOCATION,
  READY_TO_MOVE,
  REMOTE,
  HYBRID,
  IRRELEVANT,
}

enum ExpectedContractType {
  EMPLOYMENT_CONTRACT,
  B_TO_B,
  COMMISSION_CONTRACT_OR_SPECIFIC_TASK_CONTRACT,
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
  const [dataStudent, setDataStudent] = useState<StudentProfileRegister>({
    email: 'gnys1001@gmail.com',
    tel: '60000000',
    firstName: 'Sławek',
    lastName: 'Gnyś',
    githubUsername: 'sgnys',
    portfolioUrls: ['http'],
    projectUrls: ['url1'],
    bio: 'Lorem ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus',
    expectedTypeWork: ExpectedTypeWork.IRRELEVANT,
    targetWorkCity: 'Łódź',
    expectedContractType: ExpectedContractType.EMPLOYMENT_CONTRACT,
    expectedSalary: '5 000 zł',
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
  } = useForm<StudentProfileRegister>({
    defaultValues: {
      firstName: dataStudent.firstName,
      lastName: dataStudent.lastName,
      tel: dataStudent.tel,
      githubUsername: dataStudent.githubUsername,
      portfolioUrls: dataStudent.portfolioUrls,
      bio: dataStudent.bio,
      expectedTypeWork: dataStudent.expectedTypeWork,
      email: dataStudent.email,
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<StudentProfileRegister> = (data) => {
    alert(JSON.stringify(data));
  };

  const names = watch(['firstName', 'lastName']);
  const [firstName, lastName] = names;
  console.log(lastName);
  console.log(names);

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
        <ValidateMsg text={errors.email && errors.email.message} />
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
        <button type="submit">Edytuj</button>
      </div>
    </form>
  );
};
