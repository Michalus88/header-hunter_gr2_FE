import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage/LoginPage';
import { Test } from './components/Test/Test';
import { CvPage } from './components/CvPage/CvPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/test" element={<Test />} />
      <Route path="/students/:id" element={<CvPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
