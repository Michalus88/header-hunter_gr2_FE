import React from 'react';
import { MainStudentWrapper } from './MainStudentWrapper';
import { CvPage } from '../CvPage/CvPage';
import { EditStudentForm } from './EditStudentForm';

export const StudentPage = () => {
  return (
    <MainStudentWrapper>
      <CvPage />
      <EditStudentForm />
    </MainStudentWrapper>
  );
};
