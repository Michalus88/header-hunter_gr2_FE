import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage/LoginPage';
import { Test } from './components/Test/Test';
import { StudentCvView } from './views/StudentCvView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/test" element={<Test />} />
      <Route path="/students/:id" element={<StudentCvView />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
