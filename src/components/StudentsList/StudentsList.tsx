import { useContext, useEffect, useState } from 'react';
import { ReservedStudentsWithPaginationRes } from 'types';
import { HrContext } from '../../providers/HrProvider';
import { StudentElement } from '../StudentElement/StudentElement';
import { SearchFiltration } from '../SearchFiltration/SearchFiltration';
import { ViewPanel } from '../ViewPanel/ViewPanel';
import { setIfErrMsg } from '../../helpers/setIfErrMsg';
import { setNotification } from '../../helpers/setNotification';
import { useAuth } from '../../hooks/useAuth';
import { ViewSupport } from '../ViewSupport/ViewSupport';

interface Props {
  path: string | undefined;
}

export const StudentsList = ({ path }: Props) => {
  const { filteringOptions } = useContext(HrContext);
  const [bookedStudents, setBookedStudents] = useState<ReservedStudentsWithPaginationRes>(null!);
  const { toast } = useAuth();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPerPage, setMaxPerPage] = useState<number>(5);
  const [studentsCount, setStudentsCount] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}${path}/${maxPerPage}/${currentPage}`,
          {
            mode: 'cors',
            credentials: 'include',
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(filteringOptions),
          },
        );
        const errMsg = await setIfErrMsg(res);
        if (errMsg) {
          setNotification(toast, errMsg);
          return;
        }
        const students = (await res.json()) as ReservedStudentsWithPaginationRes;
        setBookedStudents(students);
        setCurrentPage(students.pages.currentPage);
        setMaxPerPage(students.pages.maxPerPage);
        setTotalPages(students.pages.totalPages);
        setStudentsCount(students.pages.studentsCount);
      } catch (err) {
        setNotification(toast);
      }
    })();
  }, [filteringOptions, currentPage, maxPerPage, studentsCount]);

  return (
    <>
      <ViewPanel />
      <div className="available-students-wrapper">
        <SearchFiltration />
        <div className="students-list">
          {bookedStudents?.students.map((student) => (
            <StudentElement
              student={student}
              key={student.id}
              setStudentsCount={setStudentsCount}
            />
          ))}
        </div>
        <ViewSupport
          currentPage={currentPage}
          maxPerPage={maxPerPage}
          studentsCount={studentsCount}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          setMaxPerPage={setMaxPerPage}
        />
      </div>
    </>
  );
};
