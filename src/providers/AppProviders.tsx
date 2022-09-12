import React from 'react';
import { AuthProvider } from '../hooks/useApp';

export const AppProviders = ({ children }: { children: JSX.Element }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
