import React from "react";
import SocialButtonsContainer from "react-social-media-buttons";
import "../styles/Page.css";
import { Fade } from "react-reveal";

export default function Page() {
  let leftCurly = "{";
  let rightCurly = "}";
  return (
    <div className="page-container flex-column-center">
      <Fade duration={2000}>
        <h1 className="page-title">Peyton Smith</h1>
        <h2 className="page-subtitle">{`${
          leftCurly + " "
        }Full-Stack Web Developer${" " + rightCurly}`}</h2>
        <SocialButtonsContainer
          links={[
            "https://www.instagram.com/psmith5353/",
            "https://www.linkedin.com/in/psmithcode/",
            "https://github.com/Psmithcode",
            "mailto:peytonsmithcode@gmail.com",
          ]}
          buttonStyle={{
            width: "60px",
            height: "60px",
            margin: "0px 20px",
            backgroundColor: "transparent",
          }}
          iconStyle={{ color: "#ffffff" }}
          openNewTab={true}
        />
      </Fade>
    </div>
  );
}
