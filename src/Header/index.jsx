import React from "react";
import Logo from "../components/images/Jerson.png"
import "../Header/style.css"
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';

const Header = () => {

  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a'); 

    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset= sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
        };
      })


      let header = document.querySelector(".header"); 
    header.classList.toggle("sticky", window.scrollY > 100);
    }
  
    return (
    <header className="header">
        <a href="/" className="logo">
          <img src={Logo} alt="logo"/>
        </a>
        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <div><DarkModeIcon/></div>
        </nav>
        
    </header>
  );
};

export default Header;
