import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  position: fixed;
  background-color: white;
  z-index: 20;
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
  color: black;
  text-decoration: none;
`;

const Menu = styled.p`
  width: 200px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 24px;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: black;
    transition: all 0.3s linear;
    color: white;
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
