import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-[#1a1a1a] h-[60px] flex items-center justify-between px-6 lg:px-[10%] shadow-md anim">
        <div className="text-white font-extrabold tracking-wide anim">SR</div>

        <ul className="flex gap-6 text-sm font-semibold uppercase tracking-wider anim">
          <li>
            <Link
              to="/"
              className="text-gray-300 hover:text-blue-500 transition anim"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-300 hover:text-blue-500 transition anim"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
