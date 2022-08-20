import React, { useState, createContext, useContext } from 'react';
import {
  FilteringOptions,
  ExpectedContractType,
  ExpectedTypeWork,
  CanTakeApprenticeship,
} from 'types';

export const FILTERING_OPTION_INITIAL: FilteringOptions = {
  expectedSalaryTo: null,
  expectedSalaryFrom: null,
  expectedContractType: null,
  expectedTypeWork: null,
  teamProjectDegree: null,
  canTakeApprenticeship: null,
  courseEngagement: null,
  courseCompletion: null,
  monthsOfCommercialExp: null,
  projectDegree: null,
};

interface FilteringContextType {
  courseCompletion: number | null;
  courseEngagement: number | null;
  projectDegree: number | null;
  teamProjectDegree: number | null;
  expectedTypeWork: ExpectedTypeWork | null | undefined;
  expectedContractType: ExpectedContractType | null | undefined;
  expectedSalaryFrom: number | null;
  expectedSalaryTo: number | null;
  monthsOfCommercialExp: number | null;
  canTakeApprenticeship: CanTakeApprenticeship;
  setExpectedTypeWork: (workType: ExpectedTypeWork | null | undefined) => void;
  setCourseCompletion: (courseCompletion: number) => void;
  setCourseEngagement: (courseEngagement: number) => void;
  setProjectDegree: (projectDegree: number) => void;
  setTeamProjectDegree: (teamProjectDegree: number) => void;
  setExpectedContractType: (contractType: ExpectedContractType | null) => void;
  setExpectedSalaryFrom: (salaryFrom: number | null) => void;
  setExpectedSalaryTo: (salaryTo: number | null) => void;
  setMonthsOfCommercialExp: (workMonth: number | null) => void;
  setCanTakeApprenticeship: (apprenticeship: 'true' | 'false') => void;
  clearAllStars: () => void;
  resetAllFilters: () => void;
  setPrevFilter: (prevFilter: FilteringOptions) => void;
}

export const FilteringContext = createContext<FilteringContextType>(null!);

export const FilteringProvider = ({ children }: { children: JSX.Element }) => {
  const [expectedTypeWork, setExpectedTypeWork] = useState<ExpectedTypeWork | null | undefined>(
    null,
  );
  const [expectedContractType, setExpectedContractType] = useState<
    ExpectedContractType | null | undefined
  >(null);
  const [expectedSalaryFrom, setExpectedSalaryFrom] = useState<number | null>(null);
  const [expectedSalaryTo, setExpectedSalaryTo] = useState<number | null>(null);
  const [monthsOfCommercialExp, setMonthsOfCommercialExp] = useState<number | null>(0);
  const [canTakeApprenticeship, setCanTakeApprenticeship] = useState<CanTakeApprenticeship>(null);

  const [courseCompletion, setCourseCompletion] = useState<number | null>(null);
  const [courseEngagement, setCourseEngagement] = useState<number | null>(null);
  const [projectDegree, setProjectDegree] = useState<number | null>(null);
  const [teamProjectDegree, setTeamProjectDegree] = useState<number | null>(null);
  const clearAllStars = () => {
    setCourseCompletion(null);
    setCourseEngagement(null);
    setProjectDegree(null);
    setTeamProjectDegree(null);
  };
  const resetAllFilters = () => {
    clearAllStars();
    setExpectedTypeWork(null);
    setExpectedContractType(null);
    setExpectedSalaryFrom(null);
    setExpectedSalaryTo(null);
    setMonthsOfCommercialExp(null);
    setCanTakeApprenticeship(null);
  };
  const setPrevFilter = (prevFilter: FilteringOptions) => {
    setExpectedTypeWork(prevFilter.expectedTypeWork);
    setMonthsOfCommercialExp(prevFilter.monthsOfCommercialExp);
    setCanTakeApprenticeship(prevFilter.canTakeApprenticeship);
    setExpectedContractType(prevFilter.expectedContractType);
    setExpectedSalaryFrom(prevFilter.expectedSalaryFrom);
    setExpectedSalaryTo(prevFilter.expectedSalaryTo);
    setCourseCompletion(prevFilter.courseCompletion);
    setCourseEngagement(prevFilter.courseEngagement);
    setProjectDegree(prevFilter.projectDegree);
    setTeamProjectDegree(prevFilter.teamProjectDegree);
  };

  return (
    <FilteringContext.Provider
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={{
        courseCompletion,
        courseEngagement,
        projectDegree,
        teamProjectDegree,
        expectedTypeWork,
        expectedContractType,
        expectedSalaryFrom,
        expectedSalaryTo,
        monthsOfCommercialExp,
        canTakeApprenticeship,
        setCourseCompletion,
        setCourseEngagement,
        setProjectDegree,
        setTeamProjectDegree,
        setExpectedTypeWork,
        setExpectedContractType,
        setExpectedSalaryFrom,
        setExpectedSalaryTo,
        setMonthsOfCommercialExp,
        setCanTakeApprenticeship,
        clearAllStars,
        resetAllFilters,
        setPrevFilter,
      }}
    >
      {children}
    </FilteringContext.Provider>
  );
};

export const useFilter = () => {
  const filter = useContext(FilteringContext);

  if (!filter) {
    throw Error('useFilter needs to be used inside FilteringContext');
  }

  return filter;
};
