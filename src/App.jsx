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
import PostSeasonPage from "./pages/PostSeasonPage";
import DreamTeamPage from "./pages/DreamTeamPage";
import PlayerPage from "./pages/PlayerPage";

const GlobalStyles = createGlobalStyle`
  ${reset};

  body{
    font-family: "Rubik", sans-serif;
    font-family: "Ubuntu", sans-serif;
  }
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
        <Route path="/postseason" element={<PostSeasonPage />} />
        <Route path="/dreamteam" element={<DreamTeamPage />} />
        <Route path="/player/:playerID" element={<PlayerPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
