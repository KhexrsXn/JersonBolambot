import React from 'react'
import '../About/style.css'
import { Box } from '@mui/material'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
// import IMGJSON from '../components/images/IMGJSON.png'

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="aboutLeft-container">
        <Box className="image">
          {/* <img src={IMGJSON} alt="" /> */}
        </Box>
      </div>
      <div className="aboutRight-container">
        <Box>
        <h1>
          About<span>ME</span>
        </h1>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          gap="2rem"
          padding="2rem 0 1rem 0"
        >
          <div className="card">
            <WorkspacePremiumIcon />
            <br/>
            <h5>Experienced</h5>
            <h6>1+&nbsp;&nbsp;&nbsp;years</h6>
            <h6>Front-end Developer</h6>
          </div>
          <div className="card">
            <VerifiedIcon />
            <br/>
            <h5>Projects</h5>
            <h6>10+&nbsp;&nbsp;&nbsp;Completed</h6>
            <h6> .</h6>
          </div>
          <div className="card">
            <SchoolIcon />
            <br/>
            <h5>Education</h5>
            <h6>Degree Holder</h6>
            <h6>BS Information Technology</h6>
          </div>
        </Box>
        <Box padding=".5rem  10rem 0 0 ">
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