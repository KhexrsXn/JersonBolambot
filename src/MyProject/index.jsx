import React, { useState } from 'react';
import "../MyProject/style.css";
import KodeGo from '../components/images/KodeGo.png';
import HTML5 from '../components/images/HTML5.jpg';
import ResponsiveDesign from '../components/images/ResponsiveDesign.png';
import DevKids from '../components/images/UXUI-Devkids.png'
import Soria from '../components/images/UXUI-Soria.png'
import { Box, Button } from '@mui/material';
import SoriaWeb from '../components/images/Soria-Web.png'
import DevKidsWeb from '../components/images/DevKids-Web.png'

const Projects = () => {
  const [activeTab, setActiveTab] = useState('website'); // Set the initial active tab
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id='projects' className='projects-container'>
      <h1 style={{margin: '1rem 0 0 0'}}>My Portfolio</h1>
         <div>
      <div style={{display: 'flex', justifyContent: 'center', padding: '2rem 0'}}>
        <Button size='large' variant={activeTab === 'website' ? 'contained' : 'outlined'} onClick={() => handleTabClick('website')}> Website </Button>
        <Button size='large' variant={activeTab === 'UX-UI' ? 'contained' : 'outlined'} onClick={() => handleTabClick('UX-UI')}> UX-UI </Button>
        <Button size='large' variant={activeTab === 'Certifications' ? 'contained' : 'outlined'} onClick={() => handleTabClick('Certifications')}> Certifications </Button>
      </div>
      <div className="tab-content" >
        {/* Tab content sections */}
        {activeTab === 'website' && 
          <Box display='flex' justifyContent='flex-start' gap={5} flexWrap='wrap'>
            <div className="certification">
              <a target='_blank' href='https://devkidsacademy.netlify.app/' rel="noreferrer" style={{cursor: 'pointer'}}>
                <img src={DevKidsWeb} alt="" width={400}/>
              </a>
            </div>
            <div className="certification">
              <a target='_blank' href='https://soria-hotel.web.app/' rel="noreferrer" style={{cursor: 'pointer'}}>
                <img src={SoriaWeb  } alt="" width={400}/>
              </a>
            </div>
          </Box>
        }
        {activeTab === 'UX-UI' && 
          <Box display='flex' justifyContent='flex-start' gap={5} flexWrap='wrap'>
            <div className="certification">
              <img src={DevKids} alt="" width={500}/>
            </div>
            <div className="certification">
              <img src={Soria} alt="" width={500}/>
            </div>
          </Box>
        }
        {activeTab === 'Certifications' && 
          <Box display='flex' justifyContent='flex-start' gap={5} flexWrap='wrap'>
              <div className="certification">
                <img src={HTML5} alt="" width={260}/>
              </div>
              <div className="certification">
                <img src={KodeGo} alt="" width={250}/>
              </div>
              <div className="certification">
                <img src={ResponsiveDesign} alt="" width={287}/>
              </div>
          </Box>
        }
      </div>
    </div>
      
    </section>
  )
}

export default Projects