import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { StudentsList } from '../components/StudentsList/StudentsList';
import { CvPage } from '../components/CvPage/CvPage';
import { AdminPage } from '../components/AdminPage/AdminPage';
import { MainTemplate } from '../components/templates/MainTemplate';
import { Account } from '../components/Account/Account';
import { HrProvider } from '../providers/HrProvider';
import { FilteringProvider } from '../hooks/useFilter';
import { FilterDialog } from '../components/FilterDialog/FilterDialog';
import { StudentForm } from '../components/StudentForm/Student-form';

interface LocationState {
  background: string;
}

export const AuthenticatedApp = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const background = state && state.background;
  return (
    <MainTemplate>
      <HrProvider>
        <FilteringProvider>
          <>
            <Routes location={background || location}>
              <Route path="/account" element={<Account />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route
                path="/hr/interview-students"
                element={
                  <StudentsList
                    key="interview-students"
                    path={process.env.REACT_APP_HR_BOOKED_STUDENTS}
                  />
                }
              />
              <Route
                path="/hr/available-students"
                element={
                  <StudentsList key="available-students" path={process.env.REACT_APP_STUDENT} />
                }
              />
              <Route path="/hr/interview-students/:id" element={<CvPage key="forHr" />} />
              <Route path="/student" element={<CvPage key="forStudent" />} />
              <Route path="/student/edit-form" element={<StudentForm mode="update" />} />
            </Routes>
            {background && (
              <Routes>
                <Route path="/hr/student-filter" element={<FilterDialog />} />
              </Routes>
            )}
          </>
        </FilteringProvider>
      </HrProvider>
    </MainTemplate>
  );
};
