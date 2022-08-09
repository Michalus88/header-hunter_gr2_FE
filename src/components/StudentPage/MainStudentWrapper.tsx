import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const MainStudentWrapper = ({ children }: Props) => {
  return <div className="student-page__wrapper">{children}</div>;
};
