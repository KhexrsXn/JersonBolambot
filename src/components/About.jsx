import React from 'react'
import { Box,  } from '@mui/material'

const About = () => {





  return (
    <section id="about" className="about-container">
      <div className="aboutLeft-container">
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" >
          <Box backgroundColor="blue" width="100%" height="100%" margin="1rem 1rem">left</Box>
        </Box>
      </div>
      <div className="aboutRight-container">
        <Box padding="50px 20px 0 20px">
          <h1>About</h1>
          <h4 style={{fontWeight:"400"}}>
            As a web developer, I am skilled in designing and creating websites
            using various programming languages like JavaScript and Python. I
            have experience in web development that is responsive,
            user-friendly, and visually appealing, using web development
            frameworks such as React. I also have experience in building web
            applications that are fast, efficient, and scalable.
          </h4>
      
        </Box>
      
      </div>
    </section>
  )
}

export default About
