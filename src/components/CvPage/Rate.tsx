import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface Props {
  text: string;
  rate: number;
}

export const Rate = ({ text, rate }: Props) => {
  return (
    <div className="cv-ratings__item">
      <p className="cv-ratings__title">{text}</p>
      <div className="cv-ratings__rating">
        <span className="cv-ratings__real">{rate}</span>
        <span className="cv-ratings__max">/5</span>
        <div className="stars-container">
          <FontAwesomeIcon
            icon={faStar}
            className={`${rate >= 1 ? 'stars-container__red-icon' : null}`}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={`${rate >= 2 ? 'stars-container__red-icon' : null}`}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={`${rate >= 3 ? 'stars-container__red-icon' : null}`}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={`${rate >= 4 ? 'stars-container__red-icon' : null}`}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={`${rate >= 5 ? 'stars-container__red-icon' : null}`}
          />
        </div>
      </div>
    </div>
  );
};
