import React from "react";
import "../styles/projects.css";
import { Fade } from "react-reveal";

export default function Projects() {
  return (
    <Fade duration={2000}>
      <div className="projects-container flex-column-center">
        <h1>Projects</h1>
      </div>
    </Fade>
  );
}
