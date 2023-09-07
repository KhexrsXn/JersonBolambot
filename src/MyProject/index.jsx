import React from 'react'
import "../MyProject/style.css"
import { Box, Button } from '@mui/material'

const Projects = () => {
  return (
    <section id='projects' className='projects-container'>
      <h1>My Projects</h1>
      <Box display="flex" justifyContent="center" marginTop="5rem" gap="2rem">
        <Button size='large' variant='contained'>ALL</Button>
        <Button size='large' variant='contained'>Front-end</Button>
        <Button size='large' variant='contained'>Backe-end</Button>
        <Button size='large' variant='contained'>UI/Ux</Button>
      </Box>
    </section>
  )
}

export default Projects