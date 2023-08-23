import React from "react";
import Logo from "../components/images/Jerson.png"

const Header = () => {
  return (
    <header className="header-container">
      <div className="header">
        <div className="logo"><img src={Logo} alt="logo"/></div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li>Services</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
