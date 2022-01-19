import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.textColor};
  position: fixed;
  background-color: ${({ theme }) => theme.bgColor};
  z-index: 20;
  transition: all 0.3s linear;
`;

const HomeLogoLink = styled(Link)``;

const HomeLogo = styled.img`
  width: 160px;
  height: 100px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Menus = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-right: 1vw;
`;

const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
`;

const Menu = styled.p`
  width: 200px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 24px;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.textColor};
    transition: all 0.3s linear;
    color: ${({ theme }) => theme.bgColor};
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HomeLogoLink to="/">
        <HomeLogo src="https://www.mlbstatic.com/team-logos/league-on-dark/1.svg" />
      </HomeLogoLink>
      <Menus>
        <MenuLink to="allstar">
          <Menu>ALL STAR</Menu>
        </MenuLink>
        <MenuLink to="record">
          <Menu>RECORD</Menu>
        </MenuLink>
        <MenuLink to="dreamteam">
          <Menu>MY DREAM TEAM</Menu>
        </MenuLink>
      </Menus>
    </HeaderWrapper>
  );
};

export default Header;
