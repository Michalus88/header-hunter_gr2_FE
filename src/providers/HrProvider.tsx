import React, { useState, createContext } from 'react';
import { AvailableStudentWhitPaginationRes, ReservedStudentResWithPaginationRes } from 'types';

interface HrContextType {
  availableStudents: AvailableStudentWhitPaginationRes[];
  bookedStudents: ReservedStudentResWithPaginationRes[];
  setAvailableStudents: (students: AvailableStudentWhitPaginationRes[]) => void;
  setBookedStudents: (students: ReservedStudentResWithPaginationRes[]) => void;
}

export const GameContext = createContext<HrContextType>(null!);

export const HrProvider = ({ children }: { children: JSX.Element }) => {
  const [availableStudents, setAvailableStudents] = useState<AvailableStudentWhitPaginationRes[]>(
    [],
  );
  const [bookedStudents, setBookedStudents] = useState<ReservedStudentResWithPaginationRes[]>([]);

  return (
    <GameContext.Provider
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={{ availableStudents, setAvailableStudents, bookedStudents, setBookedStudents }}
    >
      {children}
    </GameContext.Provider>
  );
};
