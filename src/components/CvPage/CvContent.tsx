import React from 'react';
import { Ratings } from './Ratings';
import { EmploymentExpectation } from './EmploymentExpectation';
import { Knowledge } from './Knowledge';

export const CvContent = () => {
  return (
    <div className="cv-container">
      <Ratings />
      <EmploymentExpectation />
      <Knowledge
        title="Edukacja"
        description="Lorem111 ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores delectus
          dolores eius esse illum libero nesciunt nihil nobis nostrum odio optio possimus, provident
          repudiandae saepe suscipit tempora ullam vel!"
      />
      <Knowledge
        title="Kursy"
        description="Lorem222 ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores delectus
          dolores eius esse illum libero nesciunt nihil nobis nostrum odio optio possimus, provident
          repudiandae saepe suscipit tempora ullam vel!"
      />
      <Knowledge
        title="Doświadczenie zawodowe"
        description="Lorem333 ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores delectus
          dolores eius esse illum libero nesciunt nihil nobis nostrum odio optio possimus, provident
          repudiandae saepe suscipit tempora ullam vel!"
      />
    </div>
  );
};
