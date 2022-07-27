import React from 'react';
import defaultUser from '../../assets/img/default-user.jpg';
import expand from '../../assets/img/expand.png';

export const TopPanelRecruiter = ({ showMenu }: { showMenu: Function }) => {
  const showOptions = () => {
    showMenu();
  };

  return (
    <div
      className="top-panel-hr"
      onClick={showOptions}
      role="button"
      tabIndex={0}
      onKeyDown={showOptions}
    >
      <img className="top-panel-hr-photo" src={defaultUser} alt="recruiter" />
      <div className="top-panel-hr-paragraph">
        <p>Imie Nazwisko</p>
      </div>
      <img className="top-panel-hr-expand" src={expand} alt="expand" />
    </div>
  );
};
