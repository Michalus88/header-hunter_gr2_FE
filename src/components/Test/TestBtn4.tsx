import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MegaButton } from '../Elements/MegaButton';

export const TestBtn4 = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/interview');
  };

  return (
    <div className="test-btn">
      <MegaButton
        classNameAdd="megak-primary"
        buttonTitle="Test Interview"
        onClick={() => onClick()}
      />
    </div>
  );
};
