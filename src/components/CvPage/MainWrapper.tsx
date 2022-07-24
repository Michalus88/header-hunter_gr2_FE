import React from 'react';

import '../../assets/css/cvPage.css';

interface Props {
  children: React.ReactNode;
}

export const MainWrapper = ({ children }: Props) => {
  return <div className="main-wrapper">{children}</div>;
};
