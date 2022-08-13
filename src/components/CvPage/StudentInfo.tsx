import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import defaultImg from '../../assets/img/default-user.jpg';
import { CvImage } from './CvImage';
import { GitHubIcon } from './GitHubIcon';
import github from '../../assets/img/github.png';
import { MegaButton } from '../Elements/MegaButton';

interface Props {
  githubUsername: string;
  firstName: string;
  lastName: string;
  tel: string | undefined;
  email: string;
  bio: string | undefined;
}

export const StudentInfo = ({ githubUsername, firstName, lastName, tel, email, bio }: Props) => {
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
        <pre className="cv-student-info__text">{bio}</pre>
      </div>
      <div className="cv-student-info__btns">
        <MegaButton
          buttonTitle="Brak zainteresowania"
          onClick={() => {}}
          classNameAdd="cv-student-info__btn megak-primary"
        />
        <MegaButton
          buttonTitle="Zatrudniony"
          onClick={() => {}}
          classNameAdd="megak-primary cv-student-info__btn"
        />
      </div>
      {/*  TODO add buttons from develop */}
    </aside>
  );
};
