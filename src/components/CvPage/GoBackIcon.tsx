import React from 'react';

interface Props {
  src: string;
  alt: string;
}

export const GoBackIcon = ({ src, alt }: Props) => {
  return <img className="go-back__icon" src={src} alt={alt} />;
};
