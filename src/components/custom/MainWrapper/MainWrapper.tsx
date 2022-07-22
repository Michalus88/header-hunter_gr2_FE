import React from 'react';

import { Wrapper } from './MainWrapper.css';

export const MainWrapper = ({ children }: { children: JSX.Element }) => {
  return <Wrapper>{children}</Wrapper>;
};
