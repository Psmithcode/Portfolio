import { useState } from "react";
import Page from "./components/page.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavButtons from "./components/NavButtons.jsx";
import Bio from "./components/Bio.jsx";

import "./App.css";
import Projects from "./components/projects.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <NavButtons />
        <Routes>
          <Route exact path="/" element={<Page />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/bio" element={<Bio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
