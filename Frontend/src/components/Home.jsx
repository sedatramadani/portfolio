import React, { useState } from "react";
import Form from "../components/Form";
import TechStack from "./TechStack";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const handleClose = () => setToggle(false);

  return (
    <div className="min-h-screen bg-[#b9c9d6] flex flex-col items-center p-6 relative anim">
      {toggle && <Form close={handleClose} />}

      <button
        onClick={() => setToggle(true)}
        className="w-full sm:w-auto absolute bottom-90 left-130 z-50 bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition shadow anim"
      >
        Contact Me
      </button>

      <div className="w-full max-w-[1100px] bg-[#1f1f1f] text-white rounded-[22px] p-6 sm:p-10 lg:p-[60px] grid grid-cols-1 md:grid-cols-2 gap-10 items-center anim">
        <div>
          <h4 className="text-gray-400 mb-2 anim">Sedat Ramadani</h4>
          <h5 className="text-gray-300 mb-2 anim">Hi I'm Sedat</h5>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#b7c9d8] mb-6 leading-tight anim">
            Frontend Developer
          </h1>

          <p className="text-gray-300 leading-relaxed mb-8 max-w-[500px] anim">
            I build modern and responsive web applications using React.js and
            JavaScript, focusing on clean code and intuitive user experiences.
          </p>
        </div>

        <img
          src="./src/assets/sedat.png"
          alt="Sedat"
          className="w-full max-w-[340px] h-auto object-cover rounded-[25px] mx-auto border-4 border-blue-700 anim"
        />

        <TechStack />
      </div>
    </div>
  );
}
