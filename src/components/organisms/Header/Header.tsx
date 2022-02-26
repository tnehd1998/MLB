import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { themeState } from "../../../store/theme";
import CategoryButton from "../../atoms/Buttons/CategoryButton";
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
          <CategoryButton title="MLB TEAMS" />
        </MenuLink>
        <MenuLink to="ranking">
          <CategoryButton title="RANKING" />
        </MenuLink>
        <MenuLink to="record">
          <CategoryButton title="RECORD" />
        </MenuLink>
        <MenuLink to="dreamteam">
          <CategoryButton title="DREAM TEAM" />
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

export default Header;
