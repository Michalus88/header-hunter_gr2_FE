import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MegaButton } from '../Elements/MegaButton';

export const TestBtn3 = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/admin');
  };

  return (
    <div className="test-btn">
      <MegaButton classNameAdd="megak-primary" buttonTitle="Test Admin" onClick={() => onClick()} />
    </div>
  );
};
