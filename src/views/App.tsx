import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { AuthenticatedApp } from './AuthenticatedApp';
import { UnAuthenticatedApp } from './UnAuthenticatedApp';

export const App = () => {
  const { user, notification } = useAuth();
  return (
    <>
      {notification}
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </>
  );
};
