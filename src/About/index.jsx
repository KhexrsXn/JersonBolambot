import React from 'react'
import '../About/style.css'
import { Box, Typography } from '@mui/material'
import {GiTrophy} from "react-icons/gi"
import {CgWebsite} from "react-icons/cg"
import {FaUserGraduate} from "react-icons/fa"
// import {FcBusinessman} from "react-icons/fc"
import IMG02 from "../components/images/IMG02.png"

const About = () => {

  return (
    <section id="about" className="about-container">
      <div className="leftContainer">
        <Box className="image">
          <img src={IMG02} alt=''/>
        </Box>
      </div>
      <div className="rightContainer">
        <div className='rightContent'>
        <h1>
          About&nbsp;<span style={{color:"var(--main-color"}}>ME</span>
        </h1>
        <div className='about-group'>
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <h2><GiTrophy/></h2>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <Typography variant='h6'>1+ years</Typography>
              <Typography variant='h6'>Front-end Developer</Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <h2><CgWebsite/></h2>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" >
              <Typography variant='h6'>Projects</Typography>
              <Typography variant='h6'>10+ Completed</Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <h2><FaUserGraduate/></h2>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <Typography variant='h6'>Degree Holder</Typography>
              <Typography variant='h6'>BS Information Technology</Typography>
            </Box>
          </Box>
        </div>
        <Box padding="2rem 0 0 0">
          <h6>
            As a web developer, I am skilled in designing and creating websites
            using various programming languages like JavaScript and Python. I
            have experience in web development that is responsive,
            user-friendly, and visually appealing, using web development
            frameworks such as React. I also have experience in building web
            applications that are fast, efficient, and scalable.
          </h6>
        </Box>
        </div>
      </div>
    </section>
  )
}

export default About