import React from 'react';
import { SearchFiltration } from '../SearchFiltration/SearchFiltration';
import { ViewSupport } from '../ViewSupport/ViewSupport';
import { AvailableOneStudent } from '../AvailableOneStudent/AvailableOneStudent';
import { TopPanel } from '../TopPanel/TopPanel';
import { ViewPanel } from '../ViewPanel/ViewPanel';
import { SimulatedData } from '../SimulatedData/SimulatedData';

export const AvailableStudents = () => {
  const data = SimulatedData;
  console.log(data.length);

  const students = SimulatedData.map((student) => (
    <AvailableOneStudent
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
        <ViewSupport />
      </div>
    </>
  );
};
