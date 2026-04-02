import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Cv from "./Cv";

export default function About() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="min-h-screen bg-[#b9c9d6] flex items-center justify-center p-6">
      <div className="relative w-full max-w-[1100px] bg-[#1f1f1f] text-white rounded-[22px] p-6 sm:p-10 lg:p-[60px]">
        {/* CV Button */}
        <button
          onClick={() => setToggle(!toggle)}
          className="w-full sm:w-auto absolute bottom-30 left-110 bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition shadow"
        >
          {toggle ? "Back" : "CV"}
        </button>

        {toggle ? (
          <Cv />
        ) : (
          <div className="flex flex-col items-center text-center">
            <img
              src="./src/assets/ramadani.jpg"
              alt="Ramadani"
              className="w-28 sm:w-36 h-28 sm:h-36 object-cover rounded-full border-4 border-blue-700 mb-6"
            />

            <p className="text-gray-300 max-w-[600px] leading-relaxed mb-8">
              Passionate Frontend Developer specialized in React.js and building
              responsive applications.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://github.com/sedatramadani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-blue-700 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sedat-ramadani/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-blue-700 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
