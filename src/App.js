import React, { useLayoutEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import News from "./Components/News";
import Contact from "./Components/Contact";
function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/News">News</Link>
        </li>

        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/News" element={<News></News>} />
        <Route path="/Contact" element={<Contact></Contact>} />
      </Routes>
    </div>
  );
}

export default App;
