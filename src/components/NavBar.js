import React from 'react';
import './NavBar.css'; // Import CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/login">Login</a></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;
