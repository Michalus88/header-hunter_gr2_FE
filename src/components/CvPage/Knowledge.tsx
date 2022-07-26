import React from 'react';

interface Props {
  title: string;
  description: string;
}

export const Knowledge = ({ description, title }: Props) => {
  return (
    <div className="cv-knowledge">
      <h3 className="cv-title">{title}</h3>
      <div className="cv-knowledge__container">
        <div className="cv-knowledge__item">
          <p className="cv-knowledge__text">{description}</p>
        </div>
      </div>
    </div>
  );
};
