import React from 'react';
import { MainWrapper } from './MainWrapper';
import { GoBack } from './GoBack';
import { StudentInfo } from './StudentInfo';

import '../../assets/css/cvPage.css';
import { CvContent } from './CvContent';

export const CvPage = () => {
  return (
    <MainWrapper>
      <GoBack />
      <StudentInfo />
      <CvContent />
    </MainWrapper>
  );
};
