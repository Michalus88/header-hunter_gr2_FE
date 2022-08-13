import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  AvailableStudentRes,
  AvailableStudentWhitPaginationRes,
  ExpectedContractType,
  ExpectedTypeWork,
} from 'types';
import { Toast } from 'primereact/toast';
import { SearchFiltration } from '../SearchFiltration/SearchFiltration';
import { ViewSupport } from '../ViewSupport/ViewSupport';
import { AvailableOneStudent } from '../AvailableOneStudent/AvailableOneStudent';
import { TopPanel } from '../TopPanel/TopPanel';
import { ViewPanel } from '../ViewPanel/ViewPanel';
import { HrContext } from '../../providers/HrProvider';

export const AvailableStudents = () => {
  const [studentsJSX, setStudentsJSX] = useState<JSX.Element[]>(null!);
  const [maxPerPage, setMaxPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsCount, setStudentsCount] = useState<number>(null!);
  const [totalPages, setTotalPages] = useState<number>(null!);

  const toast = useRef<any>(null);

  const { availableStudents, setAvailableStudents } = useContext(HrContext);

  useEffect(() => {
    const fetchMyAPI = async () => {
      try {
        const data = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_STUDENT_AVAILABLE}/${maxPerPage}/${currentPage}`,
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

        const response = (await data.json()) as AvailableStudentWhitPaginationRes;
        if (data.status !== 200) {
          toast.current.show({
            severity: 'error',
            summary: 'Błąd',
            detail: 'Błąd pobierania dostępnych studentów',
            life: 4000,
          });
          return;
        }
        console.log(response);
        setAvailableStudents(response);

        const studentsRes = response.students.map(
          (student: AvailableStudentRes): JSX.Element => (
            <AvailableOneStudent
              key={student.id}
              id={student.id}
              courseCompletion={student.courseCompletion}
              courseEngagement={student.courseEngagement}
              projectDegree={student.projectDegree}
              teamProjectDegree={student.projectDegree}
              firstName={student.studentInfo.firstName}
              lastName={student.studentInfo.lastName}
              expectedTypeWork={student.studentInfo.expectedTypeWork as ExpectedTypeWork}
              targetWorkCity={student.studentInfo.targetWorkCity}
              expectedContractType={
                student.studentInfo.expectedContractType as ExpectedContractType
              }
              expectedSalary={student.studentInfo.expectedSalary}
              canTakeApprenticeship={student.studentInfo.canTakeApprenticeship}
              workExperience={student.studentInfo.workExperience}
            />
          ),
        );
        setStudentsJSX(studentsRes);
        setCurrentPage(response.pages.currentPage);
        setMaxPerPage(response.pages.maxPerPage);
        setTotalPages(response.pages.totalPages);
        setStudentsCount(response.pages.studentsCount);
      } catch (error: any) {
        console.log(`Fetch error: ${error.message}`);
      }
    };

    fetchMyAPI();
  }, [currentPage, maxPerPage]);

  const onChangeViewSupport = (currentP: number, maxPerP: number) => {
    // setValue(data)
    console.log({ currentP }, { maxPerP });
    setCurrentPage(currentP);
    setMaxPerPage(maxPerP);
  };

  return (
    <>
      <Toast ref={toast} />
      <TopPanel />
      <ViewPanel />
      <div className="available-students-wrapper">
        <SearchFiltration />
        <div className="students-list">{studentsJSX}</div>
        <ViewSupport
          currentPage={currentPage}
          maxPerPage={maxPerPage}
          studentsCount={studentsCount}
          totalPages={totalPages}
          onChangeViewSupport={onChangeViewSupport}
        />
      </div>
    </>
  );
};
