import React, { useState } from "react";
import "../styles/navButtons.css";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { FiArrowLeft } from "react-icons/fi";

export default function NavButtons(props) {
  const [activeLink, setActiveLink] = useState("home");
  const [isClicked, setIsClicked] = useState(false);
  let leftCurly = "{";
  let rightCurly = "}";
  function handleLinkClick(link) {
    setActiveLink(link);
  }

  if (isClicked === false) {
    return (
      <main className="nav-link-container flex-row-center">
        <a
          href="#"
          className="nav-curly curly-closed"
          onClick={() => setIsClicked(true)}
        >
          {leftCurly + rightCurly}
        </a>
        <FiArrowLeft className="arrow bounce" />
      </main>
    );
  }

  return (
    <main className="nav-link-container ">
      <ul className="nav-link-list">
        <Fade right duration={500}>
          <li className="nav-curly left-men">{leftCurly}</li>
        </Fade>
        <li>
          {activeLink === "home" ? (
            <Fade>
              <div className="nav-circle"></div>
            </Fade>
          ) : (
            <Link
              to="/"
              className={`nav-link ${activeLink === "home" ? "active" : ""}`}
              onClick={() => handleLinkClick("home")}
            >
              <Fade duration={2000}>Home</Fade>
            </Link>
          )}
        </li>
        <li>
          {activeLink === "projects" ? (
            <Fade>
              <div className="nav-circle"></div>
            </Fade>
          ) : (
            <Link
              to="/projects"
              className={`nav-link ${
                activeLink === "projects" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("projects")}
            >
              <Fade duration={2000}>Projects</Fade>
            </Link>
          )}
        </li>
        <li>
          {activeLink === "bio" ? (
            <Fade>
              <div className="nav-circle"></div>
            </Fade>
          ) : (
            <Link
              to="/bio"
              className={`nav-link ${activeLink === "bio" ? "active" : ""}`}
              onClick={() => handleLinkClick("bio")}
            >
              <Fade duration={2000}> Bio</Fade>
            </Link>
          )}
        </li>
        <Fade left duration={500}>
          <li className="nav-curly">{rightCurly}</li>
        </Fade>
      </ul>
    </main>
  );
}
