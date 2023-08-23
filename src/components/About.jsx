import React, { useState } from 'react'
import { Box, Tabs, Tab, Stack } from '@mui/material'

const About = () => {
  const [value, setValue] = useState(0) // Use destructuring to import useState

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <section id="about" className="about-container">
      <div className="aboutLeft-container">left</div>
      <div className="aboutRight-container">
        <Box padding="50px 20px 0 20px">
          <h1>About</h1>
          <p>
            As a web developer, I am skilled in designing and creating websites
            using various programming languages like JavaScript and Python. I
            have experience in web development that is responsive,
            user-friendly, and visually appealing, using web development
            frameworks such as React. I also have experience in building web
            applications that are fast, efficient, and scalable.
          </p>
        </Box>
        <Box
          sx={{
            padding: '1rem',
            '& button.MuiButtonBase-root': {
              backgroundColor: 'maroon',
              margin: '1rem',
              borderRadius: '20px',
              padding: '0 1rem',
              color: '#fff',
            },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            TabIndicatorProps={{ style: { display: 'none' } }}
          >
            <Tab label="Experienced" />
            <Tab label="Education" />
            <Tab label="Certifications" />
          </Tabs>
          {value === 0 && 
          <Box padding="1rem">
            <Stack spacing={.2}>
            <h5>April 2023 - Current</h5>
            <h5>Alcon Philippines Technologies and Solution, Inc | Quezon City</h5>
            <h5>Front-end Developer</h5>
            <Box padding="10px 0 0 20px">
              <ul>
                <li>Develop user friendly & visually captivating websites.</li>
                <li>Ensure that websites are responsive and adapt to different screen sizes.</li>
                <li>Optimize the performance of websites to ensure fast loadingtimes and smooth user interactions.</li>
                <li>API Integration</li>
              </ul>
            </Box>
            </Stack>
          </Box>
          }
          {value === 1 && <Box padding="1rem">
            <ul>
              <li>
                <h6>Tertiary | BS Information Technology</h6>
                <p>Northern Mindanao Colleges, Inc.</p>
                <p>2018 - 2022</p>
              </li>
              <li>
                <h6>Senior High | Information & Communication Technology (ICT)</h6>
                <p>Northern Mindanao Colleges, Inc.</p>
                <p>2016 - 2018</p>
              </li>
            </ul>
          </Box>}
          {value === 2 && <div>Content for Item Three</div>}
        </Box>
      </div>
    </section>
  )
}

export default About
