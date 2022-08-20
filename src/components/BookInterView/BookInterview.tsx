import { useContext, useEffect, useState } from 'react';
import { ReservedStudentsWithPaginationRes } from 'types';
import { HrContext } from '../../providers/HrProvider';
import { OneStudentBookInterview } from '../OneStudentBookInterview/OneStudentBookInterview';
import { SearchFiltration } from '../SearchFiltration/SearchFiltration';
import { ViewPanel } from '../ViewPanel/ViewPanel';
import { setIfErrMsg } from '../../helpers/setIfErrMsg';
import { setNotification } from '../../helpers/setNotification';
import { useAuth } from '../../hooks/useAuth';

export const BookInterview = () => {
  const { filteringOptions } = useContext(HrContext);
  const [bookedStudents, setBookedStudents] = useState<ReservedStudentsWithPaginationRes>(null!);
  const { toast } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_HR_RESERVED_STUDENTS}/999/1`,
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
      } catch (err) {
        setNotification(toast);
      }
    })();
  }, [filteringOptions]);

  return (
    <>
      <ViewPanel />
      <div className="available-students-wrapper">
        <SearchFiltration />
        <div className="students-list">
          {bookedStudents?.students.map((student) => (
            <OneStudentBookInterview key={student.id} {...student} />
          ))}
        </div>
      </div>
    </>
  );
};
