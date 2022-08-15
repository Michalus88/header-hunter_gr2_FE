import React from 'react';
import { ExpectedContractType, ExpectedTypeWork, UrlEntity } from 'types';
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
  expectedTypeWork: ExpectedTypeWork | null | undefined;
  expectedContractType: ExpectedContractType | null | undefined;
  expectedSalary: string | undefined;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: number;
  education: string | undefined;
  courses: string | undefined;
  workExperience: string | undefined;
  portfolioUrls: UrlEntity[] | [];
  bonusProjectUrls: UrlEntity[];
  projectUrls: UrlEntity[];
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
  education,
  courses,
  workExperience,
  portfolioUrls,
  bonusProjectUrls,
  projectUrls,
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
      <Knowledge title="Edukacja" description={education} />
      <Knowledge title="Kursy" description={courses} />
      <Knowledge title="Doświadczenie zawodowe" description={workExperience} />
      <Projects title="Portfolio" urls={portfolioUrls} />
      <Projects title="Projekt w zespole Scrumowym" urls={bonusProjectUrls} />
      <Projects title="Projekt na zaliczenie" urls={projectUrls} />
    </div>
  );
};
