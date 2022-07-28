import React, { useState } from 'react';
import megaK from '../../assets/img/MegaK.webp';
import { TopPanelRecruiter } from './TopPanelRecruiter';
import { TopPanelMenu } from './TopPanelMenu';

export const TopPanel = () => {
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  };

  return (
    <div className="top-panel-container">
      <img className="top-panel-logo" src={megaK} alt="MegaK logo" />
      <TopPanelRecruiter showMenu={showMenu} />
      {show && <TopPanelMenu />}
    </div>
  );
};
