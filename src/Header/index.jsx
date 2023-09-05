import React, { useEffect } from "react"; // Import useEffect
import Logo from "../components/images/Jerson.png";
import "../Header/style.css";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Box } from "@mui/material";

const Header = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const handleScroll = () => {
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
          });
        }
      });

      const header = document.querySelector(".header");
      header.classList.toggle("sticky", window.scrollY > 100);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Use an empty dependency array to run this effect only once

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
        <Box><DarkModeIcon/></Box>
      </nav>
    </header>
  );
};

export default Header;
