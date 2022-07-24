import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoBackIcon } from './GoBackIcon';
import arrowBack from '../../assets/img/arrow-back.svg';

import '../../assets/css/cvPage.css';

export const GoBack = () => {
  return (
    <div className="go-back">
      <div className="go-back__icon-container">
        <GoBackIcon src={arrowBack} alt="cofnij" />
      </div>
      <NavLink className="go-back__link" to="/">
        Wróć
      </NavLink>
    </div>
  );
};
