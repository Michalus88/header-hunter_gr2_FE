import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage/LoginPage';
import { Test } from './components/Test/Test';
import { BookInterview } from './components/BookInterView/BookInterview';
import { CvPage } from './components/CvPage/CvPage';
import { AdminPage } from './components/AdminPage/AdminPage';
import { RegisterStudentView } from './components/RegisterStudentView/RegisterStudentView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/interview" element={<BookInterview />} />
      <Route path="/test" element={<Test />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/student/register/:id" element={<RegisterStudentView />} />
      <Route path="/students/:id" element={<CvPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
