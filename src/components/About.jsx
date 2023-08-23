import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel, } from "@mui/lab";

const About = () => {
  const [value, setValue] = React.useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="about" className="about-container">
        <div className="aboutLeft-container">
          left
        </div>
        <div className="aboutRight-container">
          <Box padding="80px 10px 0 10px">
            <h1>About</h1>
            <Box sx={{ width: "100%" }}>
              <TabContext value={value}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="custom tabs example"
                >
                  <Tab label="Skills" value="1" />
                  <Tab label="Experience"  value="2" />
                  <Tab label="Education" value="3" />
                </Tabs>
                <TabPanel value="1">
                    <Box display="flex" position="relative" justifyContent="space-around" marginTop="1rem">
                      <Box sx={{ul:{listStyle:"none"}}}>
                      <ul>
                        <li>Front-end Development</li>
                        <ul style={{padding:".5rem 2rem"}}>
                          <li>HTML5</li>
                          <li>CSS3</li>
                          <li>JavaScript(ES6+)</li>
                          <li>Bootstrap</li>
                          <li>Material-UI</li>
                          <li>React.js</li>
                        </ul> <br/>
                        <li>Back-end Development</li>
                        <ul style={{padding:".5rem 2rem"}}>
                          <li>Node.js</li>
                          <li>PHP</li>
                          <li>Python (Django)</li>
                        </ul>
                        <li>Responsive Design</li>
                        <li>API Integration</li>
                        <li>Agile/Scrum Methodology</li>
                      </ul>
                      </Box>
                      <Box sx={{ul:{listStyle:"none"}}}>
                        <ul>
                        <li>Database</li>
                        <ul style={{padding:".5rem 2rem"}}>
                          <li>MySQL</li>
                          <li>SQLite</li>
                        </ul>
                        <li>Version Control</li>
                        <ul style={{padding:".5rem 2rem"}}>
                          <li>Git</li>
                          <li>GitHub</li>
                        </ul> 
                        <li>UX/UI Design</li>
                        <ul style={{padding:".5rem 2rem"}}>
                          <li>Figma</li>
                        </ul> 
                        <li>Graphic Design</li>
                        <ul style={{padding:".5rem 2rem"}}>
                          <li>Adobe Photoshop</li>
                          <li>Canva</li>
                        </ul>
                        </ul>
                      </Box>
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                  This is the content for Disabled Tab 2
                </TabPanel>
                <TabPanel value="3">
                  This is the content for Active Tab 3
                </TabPanel>
              </TabContext>
            </Box>
          </Box>
      </div>
    </section>
  );
};

export default About;
