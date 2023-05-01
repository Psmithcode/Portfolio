import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./components/page";
import Projects from "./components/projects";
import NavButtons from "./components/NavButtons";

export default function Router() {
  return (
    <>
      <NavButtons />
      <Router>
        <Routes>
          <Route exact path="/" component={<Page />} />
          <Route path="/projects" component={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}
