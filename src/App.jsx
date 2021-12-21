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

const GlobalStyles = createGlobalStyle`
  ${reset};
`;

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path=":teamName" element={<TeamPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
