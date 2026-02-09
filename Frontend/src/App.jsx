import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Home from "./components/Home";
import MyForm from "./components/Form";
import About from "./components/About";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/form");
        setUser(response.data);

        // If array -> take first
        if (Array.isArray(response.data)) {
          setUser(response.data[0]);
        } else {
          setUser(response.data);
        }
      } catch (err) {
        setError("Failed to fetch user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return <p>No user</p>;

  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<MyForm />} />
        </Routes>
      </div>
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
