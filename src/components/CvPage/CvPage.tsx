import React from 'react';
import { MainWrapper } from './MainWrapper';
import { GoBack } from './GoBack';
import { StudentInfo } from './StudentInfo';
import { CvContent } from './CvContent';
import { TopPanel } from '../TopPanel/TopPanel';

export const CvPage = () => {
  return (
    <>
      <TopPanel />
      <MainWrapper>
        <GoBack />
        <StudentInfo />
        <CvContent />
      </MainWrapper>
    </>
  );
};
