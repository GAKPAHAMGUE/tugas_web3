// components/Navbar.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="navbar">
        <h1>Navbar</h1>
        <ul>
          <li>
            <button onClick={() => navigate("/")}>Home</button>
          </li>
          <li>
            <button onClick={() => navigate("/about")}>About</button>
          </li>
          <li>
            <button onClick={() => navigate("/contact")}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
