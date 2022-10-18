import React from 'react';
import { useNavigate } from 'react-router';
import { Role } from 'types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useApp } from '../../hooks/useApp';
import { CvImage } from './CvImage';
import { GitHubIcon } from './GitHubIcon';
import github from '../../assets/img/github.png';
import { MegaButton } from '../Elements/MegaButton';
import { setIfErrMsg } from '../../helpers/setIfErrMsg';
import { setNotification } from '../../helpers/setNotification';

interface Props {
  githubUsername: string;
  firstName: string;
  lastName: string;
  tel: string | undefined;
  email: string;
  bio: string | undefined;
}

export const StudentInfo = ({ githubUsername, firstName, lastName, tel, email, bio }: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, toast, signOut } = useApp();
  const editProfile = () => navigate('/student/edit-form');
  const studentAction = async (method: 'DELETE' | 'PATCH' = 'PATCH') => {
    try {
      const path = id
        ? `${process.env.REACT_APP_HR_BOOKED_STUDENTS}/${id}`
        : process.env.REACT_APP_STUDENT;
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}${path}`, {
        mode: 'cors',
        credentials: 'include',
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const errMsg = await setIfErrMsg(res);
      if (errMsg) {
        setNotification(toast, errMsg);
        return;
      }
      const resObj = await res.json();
      setNotification(toast, resObj.message, 'success');
      if (user?.role === Role.STUDENT) {
        signOut();
        navigate('/');
      }
      if (user?.role === Role.HR) {
        navigate(-1);
      }
    } catch (err) {
      setNotification(toast);
    }
  };

  return (
    <aside className="cv-student-info">
      <div className="cv-student-info__picture-container">
        <CvImage src={`https://github.com/${githubUsername}.png`} alt="zdjęcie cv studenta" />
      </div>
      <p className="cv-student-info__name">
        {firstName} {lastName}
      </p>
      <div className="cv-student-info__gitHub-info">
        <GitHubIcon src={github} alt="ikona github" />
        <a
          className="cv-student-info__gitHub-login"
          href="https://github.com/sgnys"
          target="_blank"
          rel="noreferrer"
        >
          {githubUsername}
        </a>
      </div>
      <div className="cv-student-info__contact">
        <div className="cv-student-info__contact-phone">
          <FontAwesomeIcon icon={faPhone} className="cv-student-info__contact-icon" />
          <p className="cv-student-info__phone">{tel}</p>
        </div>
        <div className="cv-student-info__contact-mail">
          <FontAwesomeIcon icon={faEnvelope} className="cv-student-info__contact-icon" />
          <p className="cv-student-info__phone">{email}</p>
        </div>
      </div>
      <div className="cv-student-info__about-me">
        <p className="cv-student-info__title">O mnie</p>
        <p className="cv-student-info__text">{bio}</p>
      </div>
      <div className="cv-student-info__btns">
        {user?.role !== Role.STUDENT && (
          <MegaButton
            buttonTitle="Brak zainteresowania"
            onClick={() => studentAction('DELETE')}
            classNameAdd="cv-student-info__btn megak-primary"
          />
        )}
        {user?.role === Role.STUDENT && (
          <MegaButton
            buttonTitle="Edytuj profil"
            onClick={editProfile}
            classNameAdd="cv-student-info__btn megak-primary"
          />
        )}
        <MegaButton
          buttonTitle="Zatrudniony"
          onClick={() => studentAction()}
          classNameAdd="megak-primary cv-student-info__btn"
        />
      </div>
    </aside>
  );
};
