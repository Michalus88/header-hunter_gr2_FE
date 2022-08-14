import React, { useEffect, useState } from 'react';
import { DetailedStudentDataRes, Role } from 'types';
import { useAuth } from '../../hooks/useAuth';
import { MainWrapper } from './MainWrapper';
import { GoBack } from './GoBack';
import { StudentInfo } from './StudentInfo';
import { CvContent } from './CvContent';
import { Spinner } from '../Spinner/Spinner';

// interface Props {
//   studentId: string | null;
// }

export const CvPage = () => {
  const { user } = useAuth();
  console.log(user);
  const [studentData, getStudentData] = useState<DetailedStudentDataRes | null>(null);
  const getStudentDetails = async () => {
    getStudentData(null);

    // const testID = '1';

    // const URL =
    //   user?.role === Role.STUDENT
    //     ? `http://localhost:3001/api/student/detailed`
    //     : `http://localhost:3001/api/hr/booked-students/${testID}`;

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
    getStudentData(data);
    console.log(data);
  };

  useEffect(() => {
    getStudentDetails();
  }, []);

  if (studentData === null) return <Spinner />;

  return (
    <MainWrapper>
      {user?.role !== Role.STUDENT && <GoBack />}
      <StudentInfo
        githubUsername={studentData.studentInfo.githubUsername}
        firstName={studentData.studentInfo.firstName}
        lastName={studentData.studentInfo.lastName}
        tel={studentData.studentInfo.tel}
        email={studentData.email}
        bio={studentData.studentInfo.bio}
      />
      <CvContent
        courseCompletion={studentData.courseCompletion}
        courseEngagement={studentData.courseEngagement}
        projectDegree={studentData.projectDegree}
        teamProjectDegree={studentData.teamProjectDegree}
        targetWorkCity={studentData.studentInfo.targetWorkCity}
        expectedTypeWork={studentData?.studentInfo.expectedTypeWork}
        expectedContractType={studentData.studentInfo.expectedContractType}
        expectedSalary={studentData.studentInfo.expectedSalary}
        canTakeApprenticeship={studentData.studentInfo.canTakeApprenticeship}
        monthsOfCommercialExp={studentData.studentInfo.monthsOfCommercialExp}
        education={studentData.studentInfo.education}
        courses={studentData.studentInfo.courses}
        workExperience={studentData.studentInfo.workExperience}
        portfolioUrls={studentData.studentInfo.portfolioUrls}
        bonusProjectUrls={studentData.bonusProjectUrls}
        projectUrls={studentData.studentInfo.projectUrls}
      />
    </MainWrapper>
  );
};
