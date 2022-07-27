import React from 'react';

interface Props {
  title: string;
  text: string;
}

export const ExpectationElement = ({ title, text }: Props) => {
  return (
    <div className="cv-expectation__item">
      <p className="cv-expectation__title">{title}</p>
      <p className="cv-expectation__text">{text}</p>
    </div>
  );
};
