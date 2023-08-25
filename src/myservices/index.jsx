import React from 'react'
import "../myservices/style.css"
import { Box } from '@mui/material'
import webdev from "../components/images/webdev.png";
import uiux from "../components/images/uiux.png";
import marketing from "../components/images/marketing.png";
import frontend from "../components/images/frontend.png";

const MyServices = () => {
  return (
    <section id="contact" className='services-container'>
      <Box display="flex" justifyContent="center" alignItems="center" margin="2rem 0 0 0">
        <h1>MY SERVICES</h1>
      </Box>
      <div className='grid-container'>
        <div className='fullstack-container card'>
            <img src={webdev} alt=''/>
            <h5>Full Stack Developer</h5>
        </div>
        <div className='frontend-container card'>
        <img src={frontend} alt=''/>
        <h5>Front-end Developer</h5>
        </div>
        <div className='uiux-container card'>
        <img src={uiux} alt=''/>
        <h5>UI/UX</h5>
        </div>
        <div className='marketing-container card'>
        <img src={marketing} alt=''/>
        <h5>Marketing</h5>
        </div>

      </div>
    </section>
  )
}

export default MyServices