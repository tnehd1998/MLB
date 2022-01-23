import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";

import MainPage from "./pages/MainPage";
import TeamPage from "./pages/TeamPage";
import AllStarPage from "./pages/AllStarPage";
import RecordPage from "./pages/RecordPage";
import DreamTeamPage from "./pages/DreamTeamPage";

import ThemeButton from "./components/ThemeButton/ThemeButton";
import { themeState } from "./atoms";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";

const GlobalStyles = createGlobalStyle`
  ${reset};

  body{
    font-family: "Rubik", sans-serif;
    font-family: "Ubuntu", sans-serif;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    transition: all 0.3s linear;
  }
`;

const App = () => {
  const isLightTheme = useRecoilValue(themeState);

  return (
    <Router>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <ThemeButton />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path=":teamName" element={<TeamPage />} />
          <Route path="/allstar" element={<AllStarPage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/dreamteam" element={<DreamTeamPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
