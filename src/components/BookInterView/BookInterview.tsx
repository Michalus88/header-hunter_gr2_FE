import { Toast } from 'primereact/toast';
import { useContext, useEffect, useRef, useState } from 'react';
import { AvailableStudentsWithtPaginationRes, ReservedStudentsWithPaginationRes } from 'types';
import { HrContext } from '../../providers/HrProvider';
import { OneStudentBookInterview } from '../OneStudentBookInterview/OneStudentBookInterview';
import { SearchFiltration } from '../SearchFiltration/SearchFiltration';
import { ViewPanel } from '../ViewPanel/ViewPanel';
import { ViewSupport } from '../ViewSupport/ViewSupport';

export const BookInterview = () => {
  const toast = useRef<any>(null);
  const [studentsJSX, setStudentsJSX] = useState<JSX.Element[]>(null!);
  const { bookedStudents, setBookedStudents } = useContext(HrContext);
  const { isFiltered, setFiltered } = useContext(HrContext);

  const { filteredStudents, setFilteredStudents } = useContext(HrContext);
  const updateStudents = async (st: ReservedStudentsWithPaginationRes) => {
    const students = st?.students.map((student) => (
      <OneStudentBookInterview
        key={student.id}
        // id={student.id}
        firstName={student.studentInfo.firstName}
        lastName={student.studentInfo.lastName}
        courseCompletion={student.courseCompletion}
        courseEngagement={student.courseEngagement}
        projectDegree={student.projectDegree}
        teamProjectDegree={student.projectDegree}
        expectedTypeWork={student.studentInfo.expectedTypeWork}
        targetWorkCity={student.studentInfo.targetWorkCity}
        expectedContractType={student.studentInfo.expectedContractType}
        expectedSalary={student.studentInfo.expectedSalary}
        canTakeApprenticeship={student.studentInfo.canTakeApprenticeship}
        workExperience={student.studentInfo.workExperience}
        bookingDateTo={student.bookingDateTo}
        githubUsername={student.studentInfo.githubUsername}
      />
    ));
    setStudentsJSX(students);
  };

  const fetchBookedStudents = async () => {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_HR_BOOKED_STUDENTS}/999/1`,
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

      const response = (await data.json()) as ReservedStudentsWithPaginationRes;
      if (data.status !== 200) {
        toast.current.show({
          severity: 'error',
          summary: 'Błąd',
          detail: 'Błąd pobierania dostępnych studentów',
          life: 4000,
        });
        return;
      }

      await setBookedStudents(response);

      await updateStudents(response);
      setFiltered(false);
      // setCurrentPage(response.pages.currentPage);
      // setMaxPerPage(response.pages.maxPerPage);
      // setTotalPages(response.pages.totalPages);
      // setStudentsCount(response.pages.studentsCount);
    } catch (error: any) {
      console.log(`Fetch error: ${error.message}`);
    }
  };

  useEffect(() => {
    if (isFiltered) updateStudents(filteredStudents as ReservedStudentsWithPaginationRes);
  }, [filteredStudents]);
  useEffect(() => {
    setFilteredStudents({
      students: [],
      pages: { maxPerPage: 0, currentPage: 1, studentsCount: 0, totalPages: 0 },
    });
    fetchBookedStudents();
  }, []);

  return (
    <>
      <Toast ref={toast} />
      <ViewPanel />
      <div className="available-students-wrapper">
        <SearchFiltration isFilteringAllStudents={false} />
        <div className="students-list">{studentsJSX}</div>
        {isFiltered ? null : <ViewSupport />}
      </div>
    </>
  );
};
