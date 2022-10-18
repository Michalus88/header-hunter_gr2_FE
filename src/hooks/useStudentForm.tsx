import React, { useEffect, useState } from 'react';
import { StudentProfileRegister, DetailedStudentDataRes, StudentInfo } from 'types';
import { useForm } from 'react-hook-form';
import { useApp } from './useApp';
import { setNotification } from '../helpers/setNotification';

interface Props {
  mode: 'update' | 'activate';
}
export interface StudentProfileWithArrayUrls extends StudentProfileRegister {
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
export const DEFAULT_VALUES: StudentProfileWithArrayUrls = {
  tel: '',
  firstName: '',
  lastName: '',
  githubUsername: '',
  portfolioUrls: [],
  projectUrls: [],
  portfolio1: undefined,
  portfolio2: undefined,
  portfolio3: undefined,
  portfolio4: undefined,
  portfolio5: undefined,
  project1: undefined,
  project2: undefined,
  project3: undefined,
  project4: undefined,
  project5: undefined,
  bio: undefined,
  expectedTypeWork: undefined,
  targetWorkCity: undefined,
  expectedContractType: undefined,
  expectedSalary: undefined,
  canTakeApprenticeship: false,
  monthsOfCommercialExp: 0,
  education: undefined,
  workExperience: undefined,
  courses: undefined,
};

export const useStudentForm = ({ mode }: Props) => {
  const [defaultValues, setDefaultValues] = useState<StudentProfileWithArrayUrls>(DEFAULT_VALUES);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<StudentProfileWithArrayUrls>({
    defaultValues,
    mode: 'onChange',
  });
  const { toast } = useApp();

  useEffect(() => {
    if (mode === 'update') {
      (async () => {
        try {
          const res = await fetch(
            `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_STUDENT}`,
            {
              method: 'GET',
              credentials: 'include',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            },
          );
          const urlsObject: Record<string, any> = {};
          const data = (await res.json()) as DetailedStudentDataRes;
          data.studentInfo.portfolioUrls.forEach(({ url }, index) => {
            const name = `portfolio${index + 1}`;
            urlsObject[name] = url;
          });
          data.studentInfo.projectUrls.forEach(({ url }, index) => {
            const name = `project${index + 1}`;
            urlsObject[name] = url;
          });
          const studentInfoWithoutUrls: Omit<StudentInfo, 'portfolioUrls' | 'projectUrls'> =
            data.studentInfo;
          const studentInfo = { ...DEFAULT_VALUES, ...urlsObject, ...studentInfoWithoutUrls };
          setDefaultValues(studentInfo);
          reset(studentInfo);
        } catch (err) {
          setNotification(toast);
        }
      })();
    }
  }, []);

  return { defaultValues, register, handleSubmit, watch, errors };
};
