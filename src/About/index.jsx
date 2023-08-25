import React from 'react'
import '../About/style.css'
import { Box } from '@mui/material'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import IMGJSON from '../components/images/IMGJSON.png'

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="aboutLeft-container">
        <Box className="image">
          <img src={IMGJSON} alt="" />
        </Box>
      </div>
      <div className="aboutRight-container">
        <Box width="90%">
        <h1>
          About<span>ME</span>
        </h1>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="2rem"
        >
          <div className="card">
            <WorkspacePremiumIcon />
            <br/>
            <h5>Experienced</h5>
            <p>1+&nbsp;&nbsp;&nbsp;years</p>
            <p>Front-end Developer</p>
          </div>
          <div className="card">
            <WorkspacePremiumIcon />
            <br/>
            <h5>Projects</h5>
            <h6>10+&nbsp;&nbsp;&nbsp;Completed</h6>
            <h6> .</h6>
          </div>
          <div className="card">
            <WorkspacePremiumIcon />
            <br/>
            <h5>Education</h5>
            <h6>Degree Holder</h6>
            <h6>BS Information Technology</h6>
          </div>
        </Box>
        <Box padding="2rem 0">
          <h6>
            As a web developer, I am skilled in designing and creating websites
            using various programming languages like JavaScript and Python. I
            have experience in web development that is responsive,
            user-friendly, and visually appealing, using web development
            frameworks such as React. I also have experience in building web
            applications that are fast, efficient, and scalable.
          </h6>
        </Box>
        </Box>
      </div>
    </section>
  )
}

export default About
