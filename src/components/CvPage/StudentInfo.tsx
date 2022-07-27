import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { CvImage } from './CvImage';
import { GitHubIcon } from './GitHubIcon';
import github from '../../assets/img/github.png';
import { MegaButton } from '../Elements/MegaButton';

export const StudentInfo = () => {
  return (
    <aside className="cv-student-info">
      <div className="cv-student-info__picture-container">
        <CvImage src="https://github.com/sgnys.png" alt="zdjęcie cv studenta" />
      </div>
      <p className="cv-student-info__name">Sławomir Gnyś</p>
      <div className="cv-student-info__gitHub-info">
        <GitHubIcon src={github} alt="ikona github" />
        <a
          className="cv-student-info__gitHub-login"
          href="https://github.com/sgnys"
          target="_blank"
          rel="noreferrer"
        >
          sgnys
        </a>
      </div>
      <div className="cv-student-info__contact">
        <div className="cv-student-info__contact-phone">
          <FontAwesomeIcon icon={faPhone} className="cv-student-info__contact-icon" />
          <p className="cv-student-info__phone">+48 600 000 000</p>
        </div>
        <div className="cv-student-info__contact-mail">
          <FontAwesomeIcon icon={faEnvelope} className="cv-student-info__contact-icon" />
          <p className="cv-student-info__phone">gnys1001@gmail.com</p>
        </div>
      </div>
      <div className="cv-student-info__about-me">
        <p className="cv-student-info__title">O mnie</p>
        <p className="cv-student-info__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores delectus
          dolores eius esse illum libero nesciunt nihil nobis nostrum odio optio possimus, provident
          repudiandae saepe suscipit tempora ullam vel!
        </p>
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
