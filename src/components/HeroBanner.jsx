import { Box, Stack } from '@mui/material'
import React from 'react'
import IMG1 from "../components/images/IMGJSON.png"

const HeroBanner = () => {
  return (
    <section id='home' style={{height:"100vh", backgroundColor:"#cccccc", paddingTop:"70px"}}>
        <Box className='hero-container'>
            <Stack className='heroLeft-container' spacing={.2}>
              <h3>Hello, My name is</h3>
              <h1>JERSON BOLAMBOT</h1>
              <h3>and I'm a Web Developer</h3>
              <p>I conceptualize, design, and engineer solutions for clients of varying scales, with a focus on crafting elegant, contemporary websites, web-based services, and intuitive dashboards.</p>
            </Stack>
            <div className='heroRight-container'>
              <img src={IMG1} alt='img1'/>
            </div>
        </Box>
    </section>
  )
}

export default HeroBanner