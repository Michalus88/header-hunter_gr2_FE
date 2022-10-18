import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { LoggedUserRes } from 'types';
import megaK from '../../assets/img/MegaK.webp';
import { TopPanelRecruiter } from './TopPanelRecruiter';
import { TopPanelMenu } from './TopPanelMenu';
import { useApp } from '../../hooks/useApp';

export const TopPanel = () => {
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  };
  const navigate = useNavigate();
  const { pathRedirect, user, signOut } = useApp();

  if (user === null) {
    signOut();
    return <div />;
  }

  return (
    <div className="top-panel-container">
      <div className="top-panel-wrapper">
        <div
          className="top-panel-link"
          role="button"
          tabIndex={0}
          onClick={() => pathRedirect(user)}
          onKeyDown={() => pathRedirect(user)}
        >
          <img className="top-panel-logo" src={megaK} alt="MegaK logo" />
        </div>
        <TopPanelRecruiter showMenu={showMenu} />
        {show && <TopPanelMenu />}
      </div>
    </div>
  );
};
