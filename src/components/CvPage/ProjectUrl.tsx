import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

interface Props {
  url: string;
}

export const ProjectUrl = ({ url }: Props) => {
  return (
    <div className="cv-projects__project ">
      <FontAwesomeIcon icon={faPaperclip} className="cv-projects__icon" />
      <a href={url} key={url} target="_blank" rel="noreferrer">
        {url}
      </a>
    </div>
  );
};
