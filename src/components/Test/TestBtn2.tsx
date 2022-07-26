import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MegaButton } from '../Elements/MegaButton';

export const TestBtn2 = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/students/id');
  };

  return (
    <div className="test-btn">
      <MegaButton
        classNameAdd="megak-primary"
        buttonTitle="Test Students"
        onClick={() => onClick()}
      />
    </div>
  );
};
