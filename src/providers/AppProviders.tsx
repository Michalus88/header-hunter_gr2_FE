import React from 'react';
import { AuthProvider } from '../hooks/useAuth';

export const AppProviders = ({ children }: { children: JSX.Element }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
