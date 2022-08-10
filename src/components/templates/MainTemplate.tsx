import React, { FC } from 'react';
import { LoggedUserRes } from 'types';
import { TopPanel } from '../TopPanel/TopPanel';

interface Props {
  user: LoggedUserRes | null;
  signOut: () => void;
  children: JSX.Element;
}

export const MainTemplate: FC<Props> = ({ user, signOut, children }) => (
  <div>
    <TopPanel />
    {children}
  </div>
);
