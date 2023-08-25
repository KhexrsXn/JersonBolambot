import React from "react";
import Logo from "../components/images/Jerson.png"
import "../Header/style.css"

const Header = () => {
  window.onscroll = () => { 
    let header = document.querySelector(".header-container"); 
    header.classList.toggle("sticky", window.scrollY > 100);
  }
    return (
    <header className="header-container">
        <a href="/" className="logo">
          <img src={Logo} alt="logo"/>
        </a>
        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
    </header>
  );
};

export default Header;
