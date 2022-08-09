import React from 'react';
import { TopPanel } from '../TopPanel/TopPanel';
import { Ratings } from '../CvPage/Ratings';
import { MainStudentWrapper } from './MainStudentWrapper';
import { EditStudentForm } from './EditStudentForm';

// import '../../assets/css/cvPage.css';
// import '../../assets/css/studentPage.css';

export const StudentPage = () => {
  return (
    <>
      <TopPanel />
      <MainStudentWrapper>
        <Ratings />
        <EditStudentForm />
      </MainStudentWrapper>
    </>
  );
};
