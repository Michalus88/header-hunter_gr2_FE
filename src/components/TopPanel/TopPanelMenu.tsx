import React from 'react';
import { NavLink } from 'react-router-dom';

export const TopPanelMenu = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li>
          <NavLink className="navbar-nav-link" to="/konto">
            Konto
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-nav-link" to="/">
            Wyloguj
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-nav-link" to="/zmienHaslo">
            Zmiana hasła
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-nav-link" to="/admin">
            Panel Administratora
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
