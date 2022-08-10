import React, { useContext, useEffect, useState, createContext } from 'react';
import { LoggedUserRes, Login, Role } from 'types';
import { isResErrorMsg } from '../helpers/isErrorMsg';
import { usePathRedirect } from './usePathRedirect';

interface AuthContextType {
  user: LoggedUserRes | null;
  signIn: (data: Login) => Promise<void>;
  signOut: () => void;
}
const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<LoggedUserRes | null>(null);
  const pathRedirect = usePathRedirect(setUser);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USER_GET}`,
          {
            credentials: 'include',
          },
        );
        if (res.ok) {
          const userData = await res.json();
          setUser(user);
          pathRedirect(userData);
        } else {
          setUser(null);
          // Notification ''
        }
      } catch (err) {
        console.log('Server is anavailable.');
        // Notification 'Server is anavailable.'
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = async (data: Login) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_LOGIN}`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      console.log(res);
      if (await isResErrorMsg(res)) {
        // Notification 'wrong login or password'
      } else {
        const userData = (await res.json()) as LoggedUserRes;
        setUser(userData);
        pathRedirect(userData);
      }
    } catch (error) {
      console.log('Sorry. Please try later.');
      // Notification
    }
  };

  const signOut = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_LOGOUT}`,
        {
          method: 'POST',
          credentials: 'include',
        },
      );
      const err = await isResErrorMsg(res);
      if (res.status === 401) {
        setUser(null);
      } else if (err) {
        // Notification
        console.log(err);
        setUser(null);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log('Sorry. Please try later');
      // Notification
      setUser(null);
    } finally {
      setUser(null);
    }
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return auth;
};
