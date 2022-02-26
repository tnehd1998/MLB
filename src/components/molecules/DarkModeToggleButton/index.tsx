import { Wrapper } from "./styles";

export interface IProps {
  isLightTheme: boolean;
  toggleTheme: () => void;
}

const DarkModeToggleButton = ({ toggleTheme, isLightTheme }: IProps) => {
  return (
    <Wrapper onClick={toggleTheme} currentTheme={isLightTheme}>
      {isLightTheme ? (
        <i className="fa fa-sun-o" aria-hidden="true"></i>
      ) : (
        <i className="fa fa-moon-o" aria-hidden="true"></i>
      )}
    </Wrapper>
  );
};

export default DarkModeToggleButton;
