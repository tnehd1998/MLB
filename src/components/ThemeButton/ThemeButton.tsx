import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { themeState } from "../../store/theme";

const ThemeButton = () => {
  const [isLightTheme, setIsLightTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setIsLightTheme((theme) => !theme);
  };

  return (
    <ThemeButtonContainer onClick={toggleTheme} currentTheme={isLightTheme}>
      {isLightTheme ? (
        <i className="fa fa-sun-o" aria-hidden="true"></i>
      ) : (
        <i className="fa fa-moon-o" aria-hidden="true"></i>
      )}
    </ThemeButtonContainer>
  );
};

const ThemeButtonContainer = styled.div<{ currentTheme: boolean }>`
  cursor: pointer;
  font-size: 30px;
  background-color: ${(props) => (!props.currentTheme ? "grey" : "white")};
  border: 2px solid ${(props) => (!props.currentTheme ? "grey" : "black")};
  text-align: center;
  line-height: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 20;
`;

export default ThemeButton;
