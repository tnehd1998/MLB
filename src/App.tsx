import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/organisms/Header";

import MainPage from "./pages/MainPage";
import TeamPage from "./pages/TeamPage";
import RankingPage from "./pages/RankingPage";
import RecordPage from "./pages/RecordPage";
import DreamTeamPage from "./pages/DreamTeamPage";

import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { useRecoilState } from "recoil";
import { themeState } from "./store/theme";

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
  const [isLightTheme, setIsLightTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setIsLightTheme((theme) => !theme);
  };

  return (
    <Router>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header isLightTheme={isLightTheme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path=":teamName" element={<TeamPage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/dreamteam" element={<DreamTeamPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
