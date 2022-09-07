import React, { useState, createContext } from 'react';
import {
  AvailableStudentsWithtPaginationRes,
  FilteringOptions,
  ReservedStudentsWithPaginationRes,
} from 'types';
import { FILTERING_OPTION_INITIAL } from '../hooks/useFilter';

interface HrContextType {
  maxPerPage: Number;
  currentPage: Number;
  studentsCount: Number;
  totalPages: Number;
  availableStudents: AvailableStudentsWithtPaginationRes;
  bookedStudents: ReservedStudentsWithPaginationRes;
  filteringOptions: FilteringOptions;
  setMaxPerPage: (page: number) => void;
  setCurrentPage: (page: number) => void;
  setStudentsCount: (students: number) => void;
  setTotalPages: (page: number) => void;
  setAvailableStudents: (students: AvailableStudentsWithtPaginationRes) => void;
  setBookedStudents: (students: ReservedStudentsWithPaginationRes) => void;
  setFilteringOptions: React.Dispatch<React.SetStateAction<FilteringOptions>>;
}

export const HrContext = createContext<HrContextType>(null!);

export const HrProvider = ({ children }: { children: JSX.Element }) => {
  const [maxPerPage, setMaxPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [studentsCount, setStudentsCount] = useState<number>(null!);
  const [totalPages, setTotalPages] = useState<number>(null!);
  const [availableStudents, setAvailableStudents] = useState<AvailableStudentsWithtPaginationRes>(
    null!,
  );
  const [bookedStudents, setBookedStudents] = useState<ReservedStudentsWithPaginationRes>(null!);
  const [filteringOptions, setFilteringOptions] =
    useState<FilteringOptions>(FILTERING_OPTION_INITIAL);

  return (
    <HrContext.Provider
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={{
        currentPage,
        setCurrentPage,
        maxPerPage,
        setMaxPerPage,
        studentsCount,
        setStudentsCount,
        totalPages,
        setTotalPages,
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
