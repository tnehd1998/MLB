import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { themeState } from "../../../store/theme";
import DarkModeToggleButton from "../../molecules/DarkModeToggleButton";

const Header = () => {
  const [isLightTheme, setIsLightTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setIsLightTheme((theme) => !theme);
  };
  return (
    <HeaderWrapper>
      <Menus>
        <MenuLink to="/">
          <Menu>MLB TEAMS</Menu>
        </MenuLink>
        <MenuLink to="allstar">
          <Menu>ALL STAR</Menu>
        </MenuLink>
        <MenuLink to="record">
          <Menu>2021 RECORD</Menu>
        </MenuLink>
        <MenuLink to="dreamteam">
          <Menu>DREAM TEAM</Menu>
        </MenuLink>
        <DarkModeToggleButton
          isLightTheme={isLightTheme}
          toggleTheme={toggleTheme}
        />
      </Menus>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 2px solid ${({ theme }) => theme.textColor};
  position: fixed;
  background-color: ${({ theme }) => theme.bgColor};
  z-index: 20;
  transition: all 0.3s linear;
`;

const Menus = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
`;

const Menu = styled.p`
  width: 20vw;
  height: 6vh;
  text-align: center;
  line-height: 6vh;
  font-size: 2vw;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 10px;
  cursor: pointer;
  margin: 0 0.2em;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.textColor};
    transition: all 0.3s linear;
    color: ${({ theme }) => theme.bgColor};
  }

  @media (max-width: 768px) {
    width: 18vw;
  }
`;

export default Header;
