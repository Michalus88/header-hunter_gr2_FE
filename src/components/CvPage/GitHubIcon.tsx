import React from 'react';

interface Props {
  src: string;
  alt: string;
}

export const GitHubIcon = ({ src, alt }: Props) => {
  return <img className="cv-student-info__gitHub-icon" src={src} alt={alt} />;
};
