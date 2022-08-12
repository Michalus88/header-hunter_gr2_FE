import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const TopPanelMenu = () => {
  const { signOut } = useAuth();
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
        <li>
          <NavLink className="navbar-nav-link" to="/zmienHaslo">
            Zmiana hasła
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
