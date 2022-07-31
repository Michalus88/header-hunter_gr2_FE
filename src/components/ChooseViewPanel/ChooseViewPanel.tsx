import React, { useState } from 'react';
import { ChooseViewButton } from './ChooseViewButton';

export const ChooseViewPanel = () => {
  const [digit, setDigit] = useState(1);

  const isActive = (symbol: number) => {
    setDigit(symbol);
  };

  return (
    <div className="choose-view-container">
      <ChooseViewButton
        isActive={isActive}
        numeral={1}
        figure={digit}
        path="/hr/available-students"
      >
        Dostępni kursanci
      </ChooseViewButton>
      <ChooseViewButton isActive={isActive} numeral={2} figure={digit} path="/interview">
        Do rozmowy
      </ChooseViewButton>
    </div>
  );
};
