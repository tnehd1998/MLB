import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/organisms/Header";

import Home from "./components/pages/Home";
import Team from "./components/pages/Team";
import Ranking from "./components/pages/Ranking";
import Record from "./components/pages/Record";
import DreamTeam from "./components/pages/DreamTeam";

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
          <Route path="/" element={<Home />} />
          <Route path=":teamName" element={<Team />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/record" element={<Record />} />
          <Route path="/dreamteam" element={<DreamTeam />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
