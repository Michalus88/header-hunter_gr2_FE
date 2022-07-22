import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import gobackIcon from '../../assets/img/Group 29.svg';

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 7px 0;
  height: 30px;
  text-decoration: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const GoBackWrapper = styled.div`
  position: absolute;
  display: flex;
  left: -85px;
  margin: 0 10px;
`;

export const ImgContainer = styled.div`
  text-align: center;
`;

export const ImgIcon = styled.img.attrs(() => ({
  alt: 'go back icon',
  src: gobackIcon,
}))``;
