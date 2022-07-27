import React from 'react';

interface Props {
  src: string;
  alt: string;
}

export const CvImage = ({ src, alt }: Props) => {
  return <img className="cv-student-info__picture" src={src} alt={alt} />;
};
