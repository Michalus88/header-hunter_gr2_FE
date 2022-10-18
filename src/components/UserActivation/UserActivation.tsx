import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Role, UserRes } from 'types';
import { useNavigate } from 'react-router';
import { setIfErrMsg } from '../../helpers/setIfErrMsg';
import { Spinner } from '../Spinner/Spinner';
import { useApp } from '../../hooks/useApp';
import { setNotification } from '../../helpers/setNotification';

export const UserActivation = () => {
  const { setUser } = useApp();
  const { userId, registerToken } = useParams();
  const navigate = useNavigate();
  const [userToActivate, setUserToActivate] = useState<UserRes | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useApp();

  useEffect(() => {
    setUser(null);
    setUserToActivate(null);
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USER_ACTIVATE}/${userId}/${registerToken}`,
          {
            method: 'PATCH',
            credentials: 'include',
          },
        );
        const errMsg = await setIfErrMsg(res);
        if (!errMsg) {
          const user = (await res.json()) as UserRes;
          setUserToActivate(user);
          setIsLoading(false);
        } else {
          if (res.status === 403) {
            navigate('/');
          }
          setNotification(toast, errMsg);
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        setNotification(toast);
        navigate('/');
      }
    })();
  }, []);

  useEffect(() => {
    if (userToActivate !== null) {
      switch (userToActivate.role) {
        case Role.HR:
          navigate(`/`);
          break;
        case Role.STUDENT:
          navigate(`/activate/student/${userId}/${registerToken}`);
          break;
        default:
          setNotification(toast, 'Wrong role.');
          navigate('/');
          break;
      }
    }
  }, [userToActivate]);

  return isLoading ? <Spinner /> : <div>Direction...</div>;
};
