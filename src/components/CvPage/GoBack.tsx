import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GoBackIcon } from './GoBackIcon';
import arrowBack from '../../assets/img/arrow-back.svg';

export const GoBack = () => {
  const navigate = useNavigate();
  return (
    <div className="go-back">
      <div className="go-back__icon-container">
        <GoBackIcon src={arrowBack} alt="cofnij" />
      </div>
      <NavLink className="go-back__link" to="#" onClick={() => navigate(-1)}>
        Wróć
      </NavLink>
    </div>
  );
};
