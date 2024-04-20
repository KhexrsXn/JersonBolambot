import React, { useState } from 'react';
import "../MyProject/style.css";
import KodeGo from '../components/images/KodeGo.png';
import HTML5 from '../components/images/HTML5.jpg';
import ResponsiveDesign from '../components/images/ResponsiveDesign.png';
import { Box } from '@mui/material';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('website'); // Set the initial active tab
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id='projects' className='projects-container'>
      <h1 style={{margin: '1rem 0 0 0'}}>My Portfolio</h1>
         <div>
      <div className="tab-buttons">
        <button
          onClick={() => handleTabClick('website')}
          className={activeTab === 'website' ? 'active' : ''}
        >
          Website
        </button>
        <button
          onClick={() => handleTabClick('UX-UI')}
          className={activeTab === 'UX-UI' ? 'active' : ''}
        >
          UX-UI
        </button>
        <button
          onClick={() => handleTabClick('Certifications')}
          className={activeTab === 'Certifications' ? 'active' : ''}
        >
          Certifications
        </button>
      </div>
      <div className="tab-content">
        {/* Tab content sections */}
        {activeTab === 'website' && 
          <div>Content for Tab 1</div>
        }
        {activeTab === 'UX-UI' && 
          <div>Content for Tab 2</div>
        }
        {activeTab === 'Certifications' && 
          <Box display='flex' justifyContent='flex-start' gap={5}>
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