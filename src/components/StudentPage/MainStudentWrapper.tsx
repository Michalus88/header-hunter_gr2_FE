import React from 'react';
// import '../../assets/css/cvPage.css';
import '../../assets/css/studentPage.css';

interface Props {
  children: React.ReactNode;
}

export const MainStudentWrapper = ({ children }: Props) => {
  return <div className="student-page__wrapper">{children}</div>;
};
