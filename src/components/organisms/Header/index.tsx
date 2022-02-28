import CategoryButton from "../../atoms/Buttons/CategoryButton";
import DarkModeToggleButton from "../../molecules/DarkModeToggleButton";
import { LinkWrapper, MenuWrapper, Wrapper } from "./styles";

export interface IProps {
  isLightTheme: boolean;
  toggleTheme: () => void;
}

const Header = ({ isLightTheme, toggleTheme }: IProps) => {
  return (
    <Wrapper>
      <MenuWrapper>
        <LinkWrapper to="/">
          <CategoryButton title="MLB TEAMS" />
        </LinkWrapper>
        <LinkWrapper to="ranking">
          <CategoryButton title="RANKING" />
        </LinkWrapper>
        <LinkWrapper to="record">
          <CategoryButton title="RECORD" />
        </LinkWrapper>
        <LinkWrapper to="dreamteam">
          <CategoryButton title="DREAM TEAM" />
        </LinkWrapper>
        <DarkModeToggleButton
          isLightTheme={isLightTheme}
          toggleTheme={toggleTheme}
        />
      </MenuWrapper>
    </Wrapper>
  );
};

export default Header;
