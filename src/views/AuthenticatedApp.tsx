import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { BookInterview } from '../components/BookInterView/BookInterview';
import { CvPage } from '../components/CvPage/CvPage';
import { AdminPage } from '../components/AdminPage/AdminPage';
import { AvailableStudents } from '../components/AvailableStudents/AvailableStudents';
import { StudentPage } from '../components/StudentPage/StudentPage';
import { MainTemplate } from '../components/templates/MainTemplate';
import { Account } from '../components/Account/Account';
import { HrProvider } from '../providers/HrProvider';
import { StudentDetails } from '../components/StudentPage/StudentDetails';
import { FilteringProvider } from '../hooks/useFilter';
import { FilterDialog } from '../components/FilterDialog/FilterDialog';

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
              <Route path="/interview" element={<BookInterview />} />
              <Route path="/hr/available-students" element={<AvailableStudents />} />
              <Route path="/students/:id" element={<CvPage />} />
              <Route path="/student" element={<StudentPage />} />
              <Route path="/student/edit-form" element={<StudentDetails />} />
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
