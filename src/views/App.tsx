import React from 'react';
import { useApp } from '../hooks/useApp';
import { AuthenticatedApp } from './AuthenticatedApp';
import { UnAuthenticatedApp } from './UnAuthenticatedApp';

export const App = () => {
  const { user, notification } = useApp();
  return (
    <>
      {notification}
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </>
  );
};
