import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Navbar.css'; // Import the CSS for the Navbar

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src="/assets/logo.png" alt="PrPal Logo" /> */}
        <h1>PrPal OÜ</h1>
      </div>
      <span className="menu-toggle" onClick={toggleMenu}>☰</span>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><button className="login-btn">Login</button></li>
      </ul>
      {/* <button className="login-btn">Login</button> */}
    </nav>
  );
};

export default Navbar;
