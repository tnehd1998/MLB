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

const GlobalStyles = createGlobalStyle`
  ${reset};
`;

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path=":teamName" element={<TeamPage />} />
        <Route path="/allstar" element={<AllStarPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
