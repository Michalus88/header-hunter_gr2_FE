import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage/LoginPage';
import { BookInterview } from './components/BookInterView/BookInterview';
import { CvPage } from './components/CvPage/CvPage';
import { AdminPage } from './components/AdminPage/AdminPage';
import { AvailableStudents } from './components/AvailableStudents/AvailableStudents';
import { StudentPage } from './components/StudentPage/StudentPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/interview" element={<BookInterview />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/hr/available-students" element={<AvailableStudents />} />
      <Route path="/students/:id" element={<CvPage />} />
      <Route path="/student" element={<StudentPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
