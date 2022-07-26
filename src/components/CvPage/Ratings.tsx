import React from 'react';

import '../../assets/css/cvPage.css';
import { Rate } from './Rate';

export const Ratings = () => {
  return (
    <div className="cv-ratings">
      <h3>Oceny</h3>
      <div className="cv-ratings__container">
        <Rate text="Ocena przejścia kursu" rate={4} />
        <Rate text="Ocena aktywności i zaangażowania na kursie" rate={2} />
        <Rate text="Ocena kodu w projekcie własnym" rate={5} />
        <Rate text="Ocena prcy w zespole Scrum" rate={4} />
      </div>
    </div>
  );
};
