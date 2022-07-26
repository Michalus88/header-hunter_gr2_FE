import React from 'react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../../hooks/useApp';

export const TopPanelMenu = () => {
  const { signOut } = useApp();
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li>
          <NavLink className="navbar-nav-link" to="/account">
            Konto
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-nav-link" to="/" onClick={signOut}>
            Wyloguj
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
