import React, { useEffect, useState } from "react"; // Import useEffect
import Logo from "../components/images/Jerson.png";
import "../Header/style.css";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/material";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };


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
      header.classList.toggle("sticky", window.scrollY > 20);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={Logo} alt="logo"/>
      </a>
      <nav className={`navbar ${isMenuOpen ? 'active animated-element' : 'animated-element'}`}>
        <a onClick={handleMenuClick} href="#home" className="active">Home</a>
        <a onClick={handleMenuClick} href="#about">About</a>
        <a onClick={handleMenuClick} href="#contact">Services</a>
        <a onClick={handleMenuClick} href="#projects">Projects</a>
        <a onClick={handleMenuClick} href="#contact">Contact</a>
      </nav>
      <Box padding="0 1rem 0 2rem"><DarkModeIcon/></Box>
      <Box className="burger-menu" padding="0 1rem" onClick={handleMenuClick}>
        {!isMenuOpen ? <MenuIcon /> :  <CloseIcon /> } 
      </Box>
    </header>
  );
};

export default Header;
