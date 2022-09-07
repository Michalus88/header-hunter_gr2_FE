import React, { FC } from 'react';
import { TopPanel } from '../TopPanel/TopPanel';

interface Props {
  children: JSX.Element;
}

export const MainTemplate: FC<Props> = ({ children }) => (
  <div>
    <TopPanel />
    {children}
  </div>
);
