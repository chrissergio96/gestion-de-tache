import React from 'react';
import './App.css';
import logo from './assets/logo.png';

function Header({ setIsMenuOpen }) {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header-logo" />
      <button className="menu-button" onClick={() => setIsMenuOpen((prev) => !prev)}>
        &#9776; {/* Hamburger icon */}
      </button>
    </header>
  );
}

export default Header;
