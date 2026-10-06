import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Cv from "./Cv";

import ramadaniImg from "../assets/ramadani.jpg";

export default function About() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="min-h-[calc(100vh-60px)] bg-[#b9c9d6] flex items-center justify-center p-6 anim">
      <div className="relative w-full max-w-[1100px] bg-[#1f1f1f] text-white rounded-[22px] p-6 sm:p-10 lg:p-[60px] flex flex-col gap-6 anim">
        {/* Navigation / Action Bar */}
        <div className="flex justify-between items-center w-full border-b border-gray-800 pb-4 anim">
          <Link
            to="/"
            className="text-white md:font-semibold hover:text-amber-300 transition anim"
          >
            ← Back to home
          </Link>

          <button
            onClick={() => setToggle(!toggle)}
            className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition shadow anim"
          >
            {toggle ? "Back to Profile" : "View CV"}
          </button>
        </div>

        {toggle ? (
          <Cv />
        ) : (
          <div className="flex flex-col items-center text-center py-6 anim">
            <img
              src={ramadaniImg}
              alt="Ramadani"
              className="w-28 sm:w-36 h-28 sm:h-36 object-cover rounded-full border-4 border-blue-700 mb-6 anim"
            />

            <p className="text-gray-300 max-w-[600px] leading-relaxed mb-8 anim">
              Passionate Frontend Developer specialized in React.js and building
              responsive applications.
            </p>

            <div className="flex flex-wrap justify-center gap-6 anim">
              <a
                href="https://github.com/sedatramadani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-blue-700 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition anim"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sedat-ramadani/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-blue-700 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition anim"
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
