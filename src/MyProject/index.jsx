import React, { useState } from 'react';
import "../MyProject/style.css"

const Projects = () => {
  const [activeTab, setActiveTab] = useState('website'); // Set the initial active tab
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id='projects' className='projects-container'>
      <h1>My Portfolio</h1>
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
          <div>Content for Tab 3</div>
        }
      </div>
    </div>
      
    </section>
  )
}

export default Projects