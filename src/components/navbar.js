import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navigationLinks } from "../config/navigation";
import "../styles/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="hamburger" onClick={toggleMenu}>
        {/* Each div represents one bar of the hamburger icon */}
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {navigationLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
