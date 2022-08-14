import React from 'react';
import defaultUser from '../../assets/img/default-user.jpg';
import { useAuth } from '../../hooks/useAuth';

export const TopPanelRecruiter = ({ showMenu }: { showMenu: Function }) => {
  const { user } = useAuth();
  console.log(user);
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
        <p>{user?.firstName ? `${user?.firstName} ${user?.lastName}` : 'Admin'}</p>
      </div>
      <span className="top-panel-hr-expand" />
    </div>
  );
};
