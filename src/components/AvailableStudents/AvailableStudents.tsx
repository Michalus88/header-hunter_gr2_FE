import React, { useEffect, useState } from 'react';
import {
  AvailableStudentRes,
  AvailableStudentWhitPaginationRes,
  ExpectedContractType,
  ExpectedTypeWork,
} from 'types';
import { SearchFiltration } from '../SearchFiltration/SearchFiltration';
import { ViewSupport } from '../ViewSupport/ViewSupport';
import { AvailableOneStudent } from '../AvailableOneStudent/AvailableOneStudent';
import { TopPanel } from '../TopPanel/TopPanel';
import { ViewPanel } from '../ViewPanel/ViewPanel';

export const AvailableStudents = () => {
  const [students, setStudents] = useState<JSX.Element[]>(null!);

  useEffect(() => {
    const fetchMyAPI = async () => {
      try {
        const data = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_STUDENT_AVAILABLE}/5/1`,
          {
            mode: 'cors',
            credentials: 'include',
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          },
        );
        if (data.status !== 200) throw new Error('Błąd pobierania danych');
        const response = (await data.json()) as AvailableStudentWhitPaginationRes;

        const studentsRes = response.students.map((student: AvailableStudentRes) => (
          <AvailableOneStudent
            key={student.id}
            courseCompletion={student.courseCompletion}
            courseEngagement={student.courseEngagement}
            projectDegree={student.projectDegree}
            teamProjectDegree={student.projectDegree}
            firstName={student.studentInfo.firstName}
            lastName={student.studentInfo.lastName}
            expectedTypeWork={student.studentInfo.expectedTypeWork as ExpectedTypeWork}
            targetWorkCity={student.studentInfo.targetWorkCity}
            expectedContractType={student.studentInfo.expectedContractType as ExpectedContractType}
            expectedSalary={student.studentInfo.expectedSalary}
            canTakeApprenticeship={student.studentInfo.canTakeApprenticeship}
            workExperience={student.studentInfo.workExperience}
          />
        ));
        setStudents(studentsRes);
      } catch (error: any) {
        console.log(`Fetch error: ${error.message}`);
      }
    };

    fetchMyAPI();
  }, []);

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
