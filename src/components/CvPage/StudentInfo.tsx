import React from 'react';

import { CvImage } from './CvImage';
import { GitHubIcon } from './GitHubIcon';
import github from '../../assets/img/github.png';

import '../../assets/css/cvPage.css';

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
    </aside>
  );
};
