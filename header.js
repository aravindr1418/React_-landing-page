import React from 'react';
import './header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">I PRODUCTS</h1>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Header;
