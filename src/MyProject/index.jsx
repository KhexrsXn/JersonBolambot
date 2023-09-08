import React from 'react'
import "../MyProject/style.css"

const Projects = () => {
  return (
    <section id='projects' className='projects-container'>
      <h1>My Projects</h1>
        <div className='button-container'>
          <button>ALL</button>
          <button>Front-end</button>
          <button>Back-end</button>
          <button>UX/UI</button>
        </div>
    </section>
  )
}

export default Projects