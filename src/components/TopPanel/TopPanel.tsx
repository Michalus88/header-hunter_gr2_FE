import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import megaK from '../../assets/img/MegaK.webp';
import { TopPanelRecruiter } from './TopPanelRecruiter';
import { TopPanelMenu } from './TopPanelMenu';
import { TestBtn3 } from '../Test/TestBtn3';

export const TopPanel = () => {
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  };

  return (
    <div className="top-panel-container">
      <div className="top-panel-wrapper">
        <NavLink className="top-panel-link" to="/hr/available-students">
          <img className="top-panel-logo" src={megaK} alt="MegaK logo" />
        </NavLink>
        <TopPanelRecruiter showMenu={showMenu} />
        {show && <TopPanelMenu />}
      </div>
    </div>
  );
};
