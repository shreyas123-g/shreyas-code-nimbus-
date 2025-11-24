
import React from "react";

const Navbar = () => {
  return (
    <header className="navbar shadow-sm">
      <div className="container nav-inner">
        <div className="nav-left">
          <div className="logo">Fleur</div>
        </div>
        <nav className="nav-center">
          <ul>
            <li className="active">Home</li>
            <li>Pages</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Elements</li>
          </ul>
        </nav>
        <div className="nav-right">
          <button className="icon-btn" aria-label="Search">
            🔍
          </button>
          <button className="icon-btn badge-btn" aria-label="Cart">
            🛒<span className="badge">0</span>
          </button>
          <button className="nav-cta">Purchase</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
