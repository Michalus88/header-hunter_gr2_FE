import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const MainWrapper = ({ children }: Props) => {
  return <div className="main-wrapper">{children}</div>;
};
