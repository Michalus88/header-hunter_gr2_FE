import React, { useContext, useEffect, useState, createContext } from 'react';
import { LoggedUserRes, Login } from 'types';
import { setIfErrMsg } from '../helpers/setIfErrMsg';
import { usePathRedirect } from './usePathRedirect';
import { useNotification } from '../components/Notification/Notification';
import { setNotification } from '../helpers/setNotification';

interface AuthContextType {
  user: LoggedUserRes | null;
  setUser: React.Dispatch<React.SetStateAction<LoggedUserRes | null>>;
  signIn: (data: Login) => Promise<void>;
  signOut: () => void;
  toast: React.MutableRefObject<any>;
  notification: JSX.Element;
}
const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const { Notification, toast } = useNotification();
  const [user, setUser] = useState<LoggedUserRes | null>(null);
  const signOut = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_LOGOUT}`,
        {
          method: 'POST',
          credentials: 'include',
        },
      );
      if (!res.ok) {
        const errMsg = await setIfErrMsg(res);
        setNotification(toast, errMsg);
        setUser(null);
      }
    } catch (error) {
      setNotification(toast);
      setUser(null);
    } finally {
      setUser(null);
    }
  };
  const pathRedirect = usePathRedirect(setUser, signOut);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USER_GET}`,
          {
            credentials: 'include',
          },
        );
        const errMsg = await setIfErrMsg(res);
        if (!errMsg) {
          const userData = await res.json();
          setUser(userData);
          pathRedirect(userData);
        } else {
          setUser(null);
        }
      } catch (err) {
        setNotification(toast);
      }
    })();
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
      if (!res.ok) {
        setNotification(toast, 'Wrong credentials.');
        setUser(null);
      }
      const userData = (await res.json()) as LoggedUserRes;
      setUser(userData);
      pathRedirect(userData);
    } catch (error) {
      setNotification(toast);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ user, setUser, signIn, signOut, notification: Notification, toast }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return auth;
};
