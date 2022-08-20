import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  AvailableStudentRes,
  AvailableStudentsWithtPaginationRes,
  ExpectedContractType,
  ExpectedTypeWork,
} from 'types';
import { Toast } from 'primereact/toast';
import { SearchFiltration } from '../SearchFiltration/SearchFiltration';
import { ViewSupport } from '../ViewSupport/ViewSupport';
import { AvailableOneStudent } from '../AvailableOneStudent/AvailableOneStudent';
import { ViewPanel } from '../ViewPanel/ViewPanel';
import { HrContext } from '../../providers/HrProvider';

export const AvailableStudents = () => {
  const [studentsJSX, setStudentsJSX] = useState<JSX.Element[]>(null!);

  const toast = useRef<any>(null);
  const { currentPage, setCurrentPage } = useContext(HrContext);
  const { maxPerPage, setMaxPerPage } = useContext(HrContext);
  const { studentsCount, setStudentsCount } = useContext(HrContext);
  const { totalPages, setTotalPages } = useContext(HrContext);

  const { availableStudents, setAvailableStudents } = useContext(HrContext);
  const { filteredStudents, setFilteredStudents } = useContext(HrContext);
  const { isFiltered, setFiltered } = useContext(HrContext);

  const fetchAllStudents = async () => {
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

      const response = (await data.json()) as AvailableStudentsWithtPaginationRes;
      if (data.status !== 200) {
        toast.current.show({
          severity: 'error',
          summary: 'Błąd',
          detail: 'Błąd pobierania dostępnych studentów',
          life: 4000,
        });
        return;
      }
      setAvailableStudents(response);

      const studentsRes = response.students.map(
        (student: AvailableStudentRes): JSX.Element => (
          <AvailableOneStudent
            key={student.id}
            // id={student.id}
            courseCompletion={student.courseCompletion}
            courseEngagement={student.courseEngagement}
            projectDegree={student.projectDegree}
            teamProjectDegree={student.projectDegree}
            firstName={student.studentInfo.firstName}
            lastName={student.studentInfo.lastName}
            expectedTypeWork={student.studentInfo.expectedTypeWork as ExpectedTypeWork | null}
            targetWorkCity={student.studentInfo.targetWorkCity}
            expectedContractType={
              student.studentInfo.expectedContractType as ExpectedContractType | null
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

  const updateFilteredStudents = async () => {
    const studentsRes = filteredStudents.students.map(
      (student: AvailableStudentRes): JSX.Element => (
        <AvailableOneStudent
          key={student.id}
          // id={student.id}
          courseCompletion={student.courseCompletion}
          courseEngagement={student.courseEngagement}
          projectDegree={student.projectDegree}
          teamProjectDegree={student.projectDegree}
          firstName={student.studentInfo.firstName}
          lastName={student.studentInfo.lastName}
          expectedTypeWork={student.studentInfo.expectedTypeWork as ExpectedTypeWork | null}
          targetWorkCity={student.studentInfo.targetWorkCity}
          expectedContractType={
            student.studentInfo.expectedContractType as ExpectedContractType | null
          }
          expectedSalary={student.studentInfo.expectedSalary}
          canTakeApprenticeship={student.studentInfo.canTakeApprenticeship}
          workExperience={student.studentInfo.workExperience}
        />
      ),
    );
    setStudentsJSX(studentsRes);
    // setCurrentPage(filteredStudents.pages.currentPage);
    // setMaxPerPage(filteredStudents.pages.maxPerPage);
    setTotalPages(filteredStudents.pages.totalPages);
    setStudentsCount(filteredStudents.pages.studentsCount);
  };
  useEffect(() => {
    setFilteredStudents({
      students: [],
      pages: { maxPerPage: 0, currentPage: 1, studentsCount: 0, totalPages: 0 },
    });
    fetchAllStudents();
  }, []);

  useEffect(() => {
    if (filteredStudents !== null) {
      setFiltered(true);
      updateFilteredStudents();
    } else {
      setFiltered(false);
      fetchAllStudents();
    }
  }, [currentPage, maxPerPage]);

  useEffect(() => {
    if (isFiltered) updateFilteredStudents();
  }, [filteredStudents]);

  return (
    <>
      <Toast ref={toast} />
      <ViewPanel />
      <div className="available-students-wrapper">
        <SearchFiltration />
        <div className="students-list">{studentsJSX}</div>
        <ViewSupport />
      </div>
    </>
  );
};
