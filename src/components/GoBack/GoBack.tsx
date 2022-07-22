import React from 'react';
import { GoBackWrapper, ImgContainer, ImgIcon, StyledLink } from './GoBack.css';

export const GoBack = ({ children }: { children: JSX.Element }) => {
  return (
    <GoBackWrapper>
      <ImgContainer>
        <ImgIcon />
      </ImgContainer>
      <StyledLink to="/">Wróć</StyledLink>
    </GoBackWrapper>
  );
};
