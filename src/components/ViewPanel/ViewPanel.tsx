import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AvailableStudentWhitPaginationRes } from 'types';
import { HrContext } from '../../providers/HrProvider';

export const ViewPanel = () => {
  const { availableStudents, setAvailableStudents } = useContext(HrContext);
  return (
    <div className="view-panel">
      <div className="link-wrapper">
        <NavLink className="link" to="/hr/available-students">
          Dostępni kursanci
        </NavLink>

        <NavLink className="link" to="/interview">
          Do rozmowy
        </NavLink>
      </div>
    </div>
  );
};
