import React from 'react'
import "../GetinTouch/style.css"
import { Box } from '@mui/material'

const index = () => {
  return (
    <section id="contact" className='contact-container'>
      <Box className='GIT' display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <h1>Get In Touch</h1>
        <p>Message me via any of the links below!</p>
      </Box>
      <Box className="btn-container">
        <button><a href="https://www.facebook.com/JersonBarbadillo69" target="_blank" rel="noopener noreferrer">Facebook</a></button>
        <button><a href="https://www.linkedin.com/in/jerson-bolambot320" target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
        <button><a href="https://github.com/KhexrsXn" target='_blank' rel="noopener noreferrer">GitHub</a></button>
        
      </Box>
    </section>
  )
}

export default index 