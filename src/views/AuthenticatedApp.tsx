import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../components/LoginPage/LoginPage';
import { BookInterview } from '../components/BookInterView/BookInterview';
import { CvPage } from '../components/CvPage/CvPage';
import { AdminPage } from '../components/AdminPage/AdminPage';
import { AvailableStudents } from '../components/AvailableStudents/AvailableStudents';
import { StudentPage } from '../components/StudentPage/StudentPage';
import { MainTemplate } from '../components/templates/MainTemplate';
import { Account } from '../components/Account/Account';
import { UserActivation } from '../components/ActivateStudent/UserActivation';
import { HrProvider } from '../providers/HrProvider';
import { ActivateStudent } from '../components/ActivateStudent';


export const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/activate/student/:userId/:registerToken" element={<UserActivation />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/interview"
          element={
            <HrProvider>
              <BookInterview />
            </HrProvider>
          }
        />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/hr/available-students"
          element={
            <HrProvider>
              <AvailableStudents />
            </HrProvider>
          }
        />
        <Route path="/students/:id" element={<CvPage />} />
        <Route path="/student" element={<ActivateStudent />} />
        {/* <Route path="/test" element={<ActivateStudent />} /> */}
      </Routes>
    </MainTemplate>
  );
};
