import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>Visit</span>
        <span>Cam</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/eat">Eat</Link></li>
        <li><Link to="/travel">Travel</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;