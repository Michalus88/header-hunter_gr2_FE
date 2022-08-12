import React from 'react';
import { ExpectedContractType, ExpectedTypeWork } from 'types';
import { Ratings } from './Ratings';
import { EmploymentExpectation } from './EmploymentExpectation';
import { Knowledge } from './Knowledge';
import { Projects } from './Projects';

interface Props {
  courseCompletion: number;
  courseEngagement: number;
  projectDegree: number;
  teamProjectDegree: number;
  targetWorkCity: string | undefined;
  expectedTypeWork: ExpectedTypeWork;
  expectedContractType: ExpectedContractType;
  expectedSalary: string | undefined;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: number;
}

export const CvContent = ({
  courseCompletion,
  courseEngagement,
  projectDegree,
  teamProjectDegree,
  targetWorkCity,
  expectedTypeWork,
  expectedContractType,
  expectedSalary,
  canTakeApprenticeship,
  monthsOfCommercialExp,
}: Props) => {
  return (
    <div className="cv-container">
      <Ratings
        courseCompletion={courseCompletion}
        courseEngagement={courseEngagement}
        projectDegree={projectDegree}
        teamProjectDegree={teamProjectDegree}
      />
      <EmploymentExpectation
        targetWorkCity={targetWorkCity}
        expectedTypeWork={expectedTypeWork}
        expectedContractType={expectedContractType}
        expectedSalary={expectedSalary}
        canTakeApprenticeship={canTakeApprenticeship}
        monthsOfCommercialExp={monthsOfCommercialExp}
      />
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
      <Projects title="Portfolio" urls={['url1', 'url2']} />
      <Projects title="Projekt w zespole Scrumowym" urls={['url5']} />
      <Projects title="Projekt na zaliczenie" urls={['url3', 'url4']} />
    </div>
  );
};
