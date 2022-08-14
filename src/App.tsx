import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage/LoginPage';
import { BookInterview } from './components/BookInterView/BookInterview';
import { CvPage } from './components/CvPage/CvPage';
import { AdminPage } from './components/AdminPage/AdminPage';
import { AvailableStudents } from './components/AvailableStudents/AvailableStudents';
import { StudentPage } from './components/StudentPage/StudentPage';
import { useAuth } from './hooks/useAuth';
import { MainTemplate } from './components/templates/MainTemplate';
import { Account } from './components/Account/Account';
import { EditStudentForm } from './components/StudentPage/EditStudentForm';
import { StudentDetails } from './components/StudentPage/StudentDetails';

export const App = () => {
  const { user, signOut } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/interview" element={<BookInterview />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/hr/available-students" element={<AvailableStudents />} />
      <Route path="/students/:id" element={<CvPage />} />
      <Route path="/student" element={<StudentPage />} />
      <Route path="/student/edit-form" element={<StudentDetails />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
