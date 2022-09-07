import React, { useEffect, useState } from 'react';
import { DetailedStudentDataRes, Role } from 'types';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { MainWrapper } from './MainWrapper';
import { GoBack } from './GoBack';
import { StudentInfo } from './StudentInfo';
import { CvContent } from './CvContent';
import { Spinner } from '../Spinner/Spinner';
import { setNotification } from '../../helpers/setNotification';

export const CvPage = () => {
  const { id } = useParams();
  const { user, toast } = useAuth();
  const [studentData, setStudentData] = useState<DetailedStudentDataRes | null>(null);

  useEffect(() => {
    (async () => {
      setStudentData(null);
      const path = id
        ? `${process.env.REACT_APP_HR_BOOKED_STUDENTS}/${id}`
        : process.env.REACT_APP_STUDENT;
      try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}${path}`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        setStudentData(data);
      } catch (err) {
        setNotification(toast);
      }
    })();
  }, [id, toast]);

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
