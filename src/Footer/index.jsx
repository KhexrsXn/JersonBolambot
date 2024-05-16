import React from 'react'
import "../Footer/style.css"
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <Box display="flex" justifyContent="center" alignItems="center" padding="2rem 0 1rem 0">
      <nav className='footer-content'>
        <a href="#home" className="active"><h5>Home</h5></a>
        <a href="#about"><h5>About</h5></a>
        <a href="#myskills"><h5>Skills</h5></a>
        <a href="#projects"><h5>Projects</h5></a>
        {/* <a onClick={handleMenuClick} href="#faq">FAQ</a> */}
        <a href="#contact"><h5>Contact</h5></a>
      </nav>
      </Box>
      <hr/>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant='h6' color="#fff">
          2024 JERSON BOLAMBOT &copy; All Rights Reserved
        </Typography>
      </Box>
    </footer>
  )
}

export default Footer