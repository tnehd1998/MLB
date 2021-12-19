import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import TestPage from "./pages/TestPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/test/*" element={<TestPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
