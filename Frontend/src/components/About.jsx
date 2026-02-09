import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Cv from "./Cv";

export default function About() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="about">
      {/* CV Toggle Button */}
      <button onClick={() => setToggle(!toggle)} className="btn">
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
            className="profile"
          />

          <p>
            I am a passionate full-stack developer with experience building
            dynamic web applications using React on the frontend and .NET on the
            backend. I focus on writing clean, maintainable code and
            understanding the full lifecycle of projects, from design to
            deployment. Continuously learning and experimenting with new
            technologies, I enjoy solving real-world problems and creating
            efficient, scalable solutions.
          </p>

          {/* Links Section with Icons */}
          <div className="links">
            <a
              href="https://github.com/sedatramadani"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <FaGithub className="icon" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sedat-ramadani/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <FaLinkedin className="icon" /> LinkedIn
            </a>
          </div>
        </>
      )}
    </div>
  );
}
