/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { useState } from 'react';
import back from '../../assets/img/back.png';

interface Props {
  maxPerPage: number;
  currentPage: number;
  studentsCount: number;
  totalPages: number;
  onChangeViewSupport: (currentP: number, maxPerP: number) => void;
}

interface ParentProps {
  currentP: number;
  maxPerP: number;
}

export const ViewSupport = ({
  maxPerPage,
  currentPage,
  studentsCount,
  totalPages,
  onChangeViewSupport,
}: Props) => {
  const options = [
    { value: 3, label: '3' },
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' },
    { value: 40, label: '40' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: studentsCount, label: studentsCount },
  ];

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    onChangeViewSupport(
      studentsCount === maxPerPage ? 1 : currentPage,
      Number(event.currentTarget.value),
    );
  };

  return (
    <div className="footer-container">
      <p className="elements-status">Studentów na stronie</p>
      <select className="select-footer" name="" id="" value={maxPerPage} onChange={handleChange}>
        {options.map((option) =>
          studentsCount > option.value ? (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ) : null,
        )}
        <option value={studentsCount} key={studentsCount}>
          {studentsCount}
        </option>
      </select>

      <p className="elements-status" style={{ marginLeft: '0px' }}>{`/${studentsCount}`}</p>
      <p className="elements-status">{` Strona ${currentPage}/${totalPages}`}</p>
      <p className="elements-switch">
        <button
          className="left-switch"
          type="submit"
          onClick={() => onChangeViewSupport(currentPage > 1 ? (currentPage -= 1) : 1, maxPerPage)}
        >
          {' '}
        </button>
      </p>
      <p className="elements-switch">
        <button
          className="right-switch"
          type="submit"
          onClick={() =>
            onChangeViewSupport(
              currentPage < totalPages ? (currentPage += 1) : totalPages,
              maxPerPage,
            )
          }
        >
          {' '}
        </button>
      </p>
    </div>
  );
};
