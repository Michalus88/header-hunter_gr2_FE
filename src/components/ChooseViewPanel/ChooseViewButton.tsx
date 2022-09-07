import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  children: string;
  isActive: (symbol: number) => void;
  numeral: number;
  figure: number;
  path: string;
}

export const ChooseViewButton = ({ children, isActive, numeral, figure, path }: Props) => {
  return (
    <button
      className={`choose-view-button ${numeral === figure && 'styleActive'}`}
      type="button"
      onClick={() => isActive(numeral)}
    >
      <NavLink className="choose-view-button-link" to={path}>
        {children}
      </NavLink>
    </button>
  );
};
