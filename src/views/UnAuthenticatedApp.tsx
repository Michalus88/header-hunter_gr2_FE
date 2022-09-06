import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../components/LoginPage/LoginPage';
import { UserActivation } from '../components/UserActivation/UserActivation';
import { StudentForm } from '../components/StudentForm/Student-form';

export const UnAuthenticatedApp = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/activate/:userId/:registerToken" element={<UserActivation />} />
      <Route path="/activate/student/:userId/:registerToken" element={<StudentForm />} />
    </Routes>
  );
};
