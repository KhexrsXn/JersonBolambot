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
        <div className="aboutLeft-container"></div>
        <div className="aboutRight-container">
          <Box padding="1rem 2rem">
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
                  <Box>
                    <Box>Frontend</Box>
                    <Box>Backend</Box>
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
