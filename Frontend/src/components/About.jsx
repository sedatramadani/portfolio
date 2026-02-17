import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Cv from "./Cv";

export default function About() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="about">
      {/* CV Toggle Button */}
      <button onClick={() => setToggle(!toggle)} className="btn anim">
        {toggle ? "Back" : "CV"}
      </button>

      {/* Conditionally render CV or About content */}
      {toggle ? (
        <Cv /> // Show CV when toggle is true
      ) : (
        <>
          <img
            src="./src/assets/ramadani.jpg"
            alt="Ramadani"
            className="profile anim"
          />

          <p className="anim">
            I am a passionate Frontend Developer specializing in building dynamic and responsive web applications using React.js. I focus on writing clean, maintainable code and delivering intuitive user experiences. I enjoy understanding the full project lifecycle — from design to deployment — and continuously exploring new technologies to solve real-world problems with efficient and scalable solutions.
          </p>

          {/* Links Section with Icons */}
          <div className="links anim">
            <a
              href="https://github.com/sedatramadani"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <FaGithub className="icon anim" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sedat-ramadani/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <FaLinkedin className="icon anim" /> LinkedIn
            </a>
          </div>
        </>
      )}
    </div>
  );
}
