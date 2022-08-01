import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MegaButton } from '../Elements/MegaButton';

export const TestBtn5 = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/hr/available-students');
  };

  return (
    <div className="test-btn">
      <MegaButton
        classNameAdd="megak-primary"
        buttonTitle="Available students"
        onClick={() => onClick()}
      />
    </div>
  );
};
