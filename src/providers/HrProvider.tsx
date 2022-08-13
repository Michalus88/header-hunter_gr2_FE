import React, { useState, createContext } from 'react';
import {
  AvailableStudentWhitPaginationRes,
  FilteringOptions,
  ReservedStudentResWithPaginationRes,
} from 'types';

interface HrContextType {
  availableStudents: AvailableStudentWhitPaginationRes[];
  bookedStudents: ReservedStudentResWithPaginationRes[];
  filteringOptions: FilteringOptions;
  setAvailableStudents: (students: AvailableStudentWhitPaginationRes[]) => void;
  setBookedStudents: (students: ReservedStudentResWithPaginationRes[]) => void;
  setFilteringOptions: (options: FilteringOptions) => void;
}

export const HrContext = createContext<HrContextType>(null!);

export const HrProvider = ({ children }: { children: JSX.Element }) => {
  const [availableStudents, setAvailableStudents] = useState<AvailableStudentWhitPaginationRes[]>(
    [],
  );
  const [bookedStudents, setBookedStudents] = useState<ReservedStudentResWithPaginationRes[]>([]);
  const [filteringOptions, setFilteringOptions] = useState<FilteringOptions>({
    courseCompletion: null,
    courseEngagement: null,
    projectDegree: null,
    teamProjectDegree: null,
    expectedContractType: null,
    expectedSalaryFrom: null,
    expectedSalaryTo: null,
    canTakeApprenticeship: null,
    monthsOfCommercialExp: null,
  });

  return (
    <HrContext.Provider
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={{
        availableStudents,
        setAvailableStudents,
        bookedStudents,
        setBookedStudents,
        filteringOptions,
        setFilteringOptions,
      }}
    >
      {children}
    </HrContext.Provider>
  );
};
