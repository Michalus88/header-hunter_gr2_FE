import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import '../../assets/css/cvPage.css';

const num = 3;
export const Ratings = () => {
  return (
    <div className="cv-ratings">
      <h3>Oceny</h3>
      <div className="cv-ratings__container">
        <div className="cv-ratings__item">
          <p className="cv-ratings__title">Ocena przejścia kursu</p>
          <div className="cv-ratings__rating">
            <span className="cv-ratings__real">5</span> <span className="cv-ratings__max">/5</span>
            <div className="stars-container">
              <FontAwesomeIcon
                icon={faStar}
                className={`${num >= 1 ? 'stars-container__red-icon' : null}`}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={`${num >= 2 ? 'stars-container__red-icon' : null}`}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={`${num >= 3 ? 'stars-container__red-icon' : null}`}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={`${num >= 4 ? 'stars-container__red-icon' : null}`}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={`${num >= 5 ? 'stars-container__red-icon' : null}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
