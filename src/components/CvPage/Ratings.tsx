import React from 'react';
import { ImportedStudentData } from 'types';

import { Rate } from './Rate';

type Props = Omit<ImportedStudentData, 'email' | 'bonusProjectUrls'>;

export const Ratings = ({
  courseCompletion,
  courseEngagement,
  projectDegree,
  teamProjectDegree,
}: Props) => {
  return (
    <div className="cv-ratings">
      <h3 className="cv-title">Oceny</h3>
      <div className="cv-ratings__container">
        <Rate text="Ocena przejścia kursu" rate={courseCompletion} />
        <Rate text="Ocena aktywności i zaangażowania na kursie" rate={courseEngagement} />
        <Rate text="Ocena kodu w projekcie własnym" rate={projectDegree} />
        <Rate text="Ocena pracy w zespole Scrum" rate={teamProjectDegree} />
        {/* <Rate text="Ocena zadania zaliczeniowego w kursie" rate={4} /> */}
      </div>
    </div>
  );
};
