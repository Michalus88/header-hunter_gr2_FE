import React from 'react';

import { Rate } from './Rate';

export const Ratings = () => {
  return (
    <div className="cv-ratings">
      <h3 className="cv-title">Oceny</h3>
      <div className="cv-ratings__container">
        <Rate text="Ocena przejścia kursu" rate={4} />
        <Rate text="Ocena aktywności i zaangażowania na kursie" rate={2} />
        <Rate text="Ocena kodu w projekcie własnym" rate={5} />
        <Rate text="Ocena pracy w zespole Scrum" rate={4} />
        <Rate text="Ocena zadania zaliczeniowego w kursie" rate={4} />
      </div>
    </div>
  );
};
