import React, { useState } from "react";
import Form from "../components/Form";

import TechStack from "./TechStack";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  // This function will be passed to the form to close it
  const handleClose = () => setToggle(false);

  return (
    <div className="home">
      {/* 1. Only render the form ONCE and pass the handleClose function */}
      {toggle && <Form close={handleClose} />}

      <button onClick={() => setToggle(!toggle)} className="btn anim">
        Contact Me
      </button>

      <div className="content">
        <h4 className="anim">Sedat Ramadani</h4>
        <h5 className="anim">Hi I'm Sedat </h5>
        <h1 className="anim"> Frontend Developer</h1>
        <p className="anim">
          I am a Frontend Developer specializing in building modern, responsive
          web applications using React.js and JavaScript. I focus on creating
          intuitive user interfaces, seamless user experiences, and clean,
          maintainable code. I enjoy turning design concepts into interactive
          web applications that perform flawlessly across devices.
        </p>
        <img
          src="./src/assets/sedat.png"
          alt="Sedat"
          className="profile anim"
        />
        <TechStack />
      </div>
    </div>
  );
}
