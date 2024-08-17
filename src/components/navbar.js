import React from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../config/navigation';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        {navigationLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;