import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { UrlEntity } from 'types';

interface Props {
  url: UrlEntity;
}

export const ProjectUrl = ({ url }: Props) => {
  return (
    <div className="cv-projects__project ">
      <FontAwesomeIcon icon={faPaperclip} className="cv-projects__icon" />
      <a href={url.url} key={url.id} target="_blank" rel="noreferrer">
        {url.url}
      </a>
    </div>
  );
};
