import React from 'react'
import "../FrequentlyAsk/style.css"
import { Box } from '@mui/material'

const FrequentlyAsk = () => {
  return (
    <section id='faq' className='faqContainer'>
      <Box className="faq-content">
        <h1>Frequency Ask Questions</h1>
        <h6>Here are some questions I usually get. Click to toggle the answer, 
and if you still have more questions , message me from the contact section!</h6>
      </Box>
    </section>
  )
}

export default FrequentlyAsk