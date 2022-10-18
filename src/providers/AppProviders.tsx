import React from 'react';
import { AppProvider } from '../hooks/useApp';

export const AppProviders = ({ children }: { children: JSX.Element }) => {
  return <AppProvider>{children}</AppProvider>;
};
