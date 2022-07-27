import React, { useState } from 'react';
import '../../assets/css/BookInterview.css';
import '../../assets/css/style.css';
import { OneStudentBookInterview } from '../OneStudentBookInterview/OneStudentBookInterview';

export const BookInterview = () => {
  const data = [
    {
      id: 1,
      firstName: 'Michał',
      lastName: 'Górecki',
      courseCompletion: 5,
      courseEngagement: 5,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: 'Zdalnie',
      targetWorkCity: null,
      expectedContractType: 'B2B',
      expectedSalary: 1000,
      canTakeApprenticeship: 'Nie',
      workExperience: 0,
    },
    {
      id: 2,
      firstName: 'Jakub',
      lastName: 'Testowy',
      courseCompletion: 5,
      courseEngagement: 5,
      projectDegree: 5,
      teamProjectDegree: 5,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Warszawa',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 15000,
      canTakeApprenticeship: 'Nie',
      workExperience: 12,
    },
  ];

  const students = data.map((student) => (
    <OneStudentBookInterview
      key={student.id}
      firstName={student.firstName}
      lastName={student.lastName}
      courseCompletion={student.courseCompletion}
      courseEngagement={student.courseEngagement}
      projectDegree={student.projectDegree}
      teamProjectDegree={student.projectDegree}
      expectedTypeWork={student.expectedTypeWork}
      targetWorkCity={student.targetWorkCity}
      expectedContractType={student.expectedContractType}
      expectedSalary={student.expectedSalary}
      canTakeApprenticeship={student.canTakeApprenticeship}
      workExperience={student.workExperience}
    />
  ));

  return <div>{students}</div>;
};
