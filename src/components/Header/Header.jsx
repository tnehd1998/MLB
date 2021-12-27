import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  position: fixed;
  background-color: white;
  z-index: 20;
`;

const LogoLink = styled(Link)``;

const Logo = styled.img`
  width: 160px;
  height: 100px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const HeaderMenus = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-right: 1vw;
`;

const HeaderMenuLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const HeaderMenu = styled.p`
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
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <Logo src="https://www.mlbstatic.com/team-logos/league-on-dark/1.svg" />
      </LogoLink>
      <HeaderMenus>
        <HeaderMenuLink to="allstar">
          <HeaderMenu>ALL STAR PLAYER</HeaderMenu>
        </HeaderMenuLink>
        <HeaderMenuLink to="postseason">
          <HeaderMenu>POSTSEASON</HeaderMenu>
        </HeaderMenuLink>
        <HeaderMenuLink to="dreamteam">
          <HeaderMenu>MY DREAM TEAM</HeaderMenu>
        </HeaderMenuLink>
      </HeaderMenus>
    </HeaderContainer>
  );
};

export default Header;
