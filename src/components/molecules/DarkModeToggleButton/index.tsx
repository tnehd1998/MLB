import React from "react";
import { Wrapper } from "./styles";

export interface IThemeButton {
  isLightTheme: boolean;
  toggleTheme: () => void;
}

const DarkModeToggleButton = ({ toggleTheme, isLightTheme }: IThemeButton) => {
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
