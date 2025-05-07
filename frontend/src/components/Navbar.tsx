import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>Visit</span>
        <span>Cam</span>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Eat</a></li>
        <li><a href="#">Travel</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;