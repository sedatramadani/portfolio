import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Form from "./components/Form";
import About from "./components/About";

function App() {
  const handleSubmit = async (formData) => {
    // Keep your existing fetch logic here...
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return response; // Return the response so the Form component knows it finished
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>{" "}
          <li>
            <Link to="/about">About</Link>{" "}
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* FIX: Pass the function as a prop */}
        <Route path="/form" element={<Form onSubmit={handleSubmit} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// TODO
/*
1. Navigation Bar (Home, About)
2. Add some animations to the website (buttons, texts, components)
3. X button in Contact Me (also close when clicking outside the box)
4. Button style in Contact Me
5. Match Home & About card background color
6. Loading when opening website + after clicking Submit in Contact Me
7. Connect Contact Me with backend to actually send the e-mail
8. Put a frame to your picture
9. Text alignments, font sizes, fonts, styles should be same in all places
10. Fix back button when opening the CV
*/
