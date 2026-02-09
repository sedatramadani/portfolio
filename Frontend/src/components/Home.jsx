import React, { useState } from "react";
import MyForm from "./Form";
import TechStack from "./TechStack";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="home">
      <button onClick={() => setToggle(!toggle)} className="btn">
        Contact Me
      </button>
      {toggle && <MyForm />}
      <div className="content">
        <h4>Sedat Ramadani</h4>
        <h5>Hi I'm Sedat </h5>
        <h1>Full Stack Developer</h1>
        <p>
          I am a Full-Stack Developer specializing in building modern, scalable
          web applications using React, JavaScript, and ASP.NET Core. I design
          and develop complete solutions — from responsive user interfaces to
          secure backend APIs and databases.
        </p>
        <img src="./src/assets/sedat.jpg" alt="Sedat" className="profile" />
        <TechStack />
      </div>
    </div>
  );
}
