import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage/LoginPage';
import { Test } from './components/Test/Test';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
