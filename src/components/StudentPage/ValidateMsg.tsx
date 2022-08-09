import React from 'react';

interface Props {
  text: string | undefined;
}

export const ValidateMsg = ({ text }: Props) => {
  return <p className="student-page__valid">{text}</p>;
};
