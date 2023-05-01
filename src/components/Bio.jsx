import React from "react";
import "../styles/Bio.css";
import { Fade } from "react-reveal";

export default function Bio() {
  return (
    <Fade duration={2000}>
      <div className="bio-container flex-column-center">
        <h1 className="bio-text">
          Hi! My name is Peyton Smith, and I am a full-stack web developer with
          one year of experience building web applications. A lifetime of
          fascination with technology has led me to pursue a career in building
          applications that bring imagination to life! I build responsive and
          scalable components using Javascript, React, Node.js and MySql,
          Next.js, and many other technologies. In previous roles, I have worked
          with myself and teams of developers to create fast and responsive web
          components that match the client's needs. I'm passionate about using
          technology to turn ideas into functional web applications! There is no
          better feeling than someone being happy over something I had a hand in
          creating. Overall, I combine my creative problem-solving and tenacious
          work ethic to build products that clients can take pride in for years.
          If you believe I can be an asset to your company, please contact me!
        </h1>
      </div>
    </Fade>
  );
}
