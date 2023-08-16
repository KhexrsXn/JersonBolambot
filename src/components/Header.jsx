import React from "react";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header">
        <div>Logo</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
