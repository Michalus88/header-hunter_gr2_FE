import React from 'react';
import { UrlEntity } from 'types';
import { ProjectUrl } from './ProjectUrl';

interface Props {
  title: string;
  urls: UrlEntity[] | [];
}

export const Projects = ({ title, urls }: Props) => {
  return (
    <div className="cv-projects">
      <h3 className="cv-title">{title}</h3>
      <div className="cv-projects__container">
        {urls?.map((url) => (
          <ProjectUrl url={url} key={url.id} />
        ))}
      </div>
    </div>
  );
};
