import React, { useState } from 'react';
import { ChooseViewButton } from './ChooseViewButton';

export const ChooseViewPanel = () => {
  const [digit, setDigit] = useState(1);

  const isActive = (symbol: number) => {
    setDigit(symbol);
  };

  return (
    <div className="choose-view-container">
      <ChooseViewButton isActive={isActive} numeral={1} figure={digit} path="/test">
        Dostępni kursanci
      </ChooseViewButton>
      <ChooseViewButton isActive={isActive} numeral={2} figure={digit} path="/test">
        Do rozmowy
      </ChooseViewButton>
    </div>
  );
};
