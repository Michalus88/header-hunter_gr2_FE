import React from 'react';
import { ExpectedContractType, ExpectedTypeWork } from 'types';

interface Props {
  title: string;
  text: string | undefined | ExpectedTypeWork | ExpectedContractType | null;
}

export const ExpectationElement = ({ title, text }: Props) => {
  return (
    <div className="cv-expectation__item">
      <p className="cv-expectation__title">{title}</p>
      <p className="cv-expectation__text">{text}</p>
    </div>
  );
};
