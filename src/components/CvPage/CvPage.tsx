import React from 'react';
import { MainWrapper } from './MainWrapper';
import { GoBack } from './GoBack';
import { StudentInfo } from './StudentInfo';

import '../../assets/css/cvPage.css';

export const CvPage = () => {
  return (
    <MainWrapper>
      <GoBack />
      <StudentInfo />
    </MainWrapper>
  );
};
