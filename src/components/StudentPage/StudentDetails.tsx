import React, { useEffect, useState } from 'react';
import { DetailedStudentDataRes } from 'types';
import { EditStudentForm } from './EditStudentForm';
import { Spinner } from '../Spinner/Spinner';

export const StudentDetails = () => {
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
    console.log(data);
  };

  useEffect(() => {
    getStudentDetails();
  }, []);

  if (dataStudent === null) return <Spinner />;

  return (
    <EditStudentForm
      tel={dataStudent.studentInfo.tel}
      firstName={dataStudent.studentInfo.firstName}
      lastName={dataStudent.studentInfo.lastName}
      githubUsername={dataStudent.studentInfo.githubUsername}
      portfolioUrls={dataStudent.studentInfo.portfolioUrls}
      projectUrls={dataStudent.studentInfo.projectUrls}
      bio={dataStudent.studentInfo.bio}
      expectedTypeWork={dataStudent.studentInfo.expectedTypeWork}
      targetWorkCity={dataStudent.studentInfo.targetWorkCity}
      expectedContractType={dataStudent.studentInfo.expectedContractType}
      expectedSalary={dataStudent.studentInfo.expectedSalary}
      canTakeApprenticeship={dataStudent.studentInfo.canTakeApprenticeship}
      monthsOfCommercialExp={dataStudent.studentInfo.monthsOfCommercialExp}
      education={dataStudent?.studentInfo.education}
      workExperience={dataStudent?.studentInfo.education}
      courses={dataStudent?.studentInfo.courses}
    />
  );
};
