import React, { useState } from 'react';
import { OneStudentBookInterview } from '../OneStudentBookInterview/OneStudentBookInterview';
import { SearchFiltration } from '../SearchFiltration/SearchFiltration';
import { SimulatedData } from '../SimulatedData/SimulatedData';
import { TopPanel } from '../TopPanel/TopPanel';
import { ViewPanel } from '../ViewPanel/ViewPanel';
import { ViewSupport } from '../ViewSupport/ViewSupport';

export const BookInterview = () => {
  const students = SimulatedData.map((student) => (
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

  return (
    <>
      <TopPanel />
      <ViewPanel />
      <div className="available-students-wrapper">
        <SearchFiltration />
        <div className="students-list">{students}</div>
        {/* <ViewSupport /> */}
      </div>
    </>
  );
};
