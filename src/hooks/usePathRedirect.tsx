import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import { LoggedUserRes, Role } from 'types';

export const usePathRedirect = (
  setUser: React.Dispatch<React.SetStateAction<LoggedUserRes | null>>,
  signOut: () => void,
) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (userData: LoggedUserRes) => {
    if (location.pathname.includes('activate')) {
      signOut();
      navigate(location.pathname);
    }
    switch (userData.role) {
      case Role.STUDENT:
        navigate('/student');
        break;
      case Role.HR:
        navigate('/hr/available-students');
        break;
      case Role.ADMIN:
        navigate('/admin');
        break;
      default:
        setUser(null);
        // Notification 'User with the given role do not exist'
        break;
    }
  };
};
