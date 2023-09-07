import React from "react";
import "../Skills/style.css";
import { Box } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {SiMui, SiDjango, SiSqlite,} from "react-icons/si";
import {BiLogoGit} from "react-icons/bi";
import {DiJavascript} from "react-icons/di"
import figma from "../components/images/figma.png";
import mysql from "../components/images/mysql.png";
import photoshop from "../components/images/photoshop.png";
import canva from "../components/images/canva.png";
import youngIT from "../components/images/youngIT.png";

const Skills = () => {
  return (
    <section id="myskills">
      <div className="skillsContainer">
        <Box display="flex" justifyContent="center">
          <h1>My Skills</h1>
        </Box>
        <Box marginTop="5rem" className="skills-content">
          <div className="leftSkills">
          <Box marginBottom="1.5rem">
            <ul>
              <li><h6><b>UX/UI</b></h6></li>
              <ul>
                <li><h6><img style={{width:"20px", height:"20px",objectFit:"contain", margin:"5px 0 5px 0"}} src={figma} alt=""/>&nbsp;&nbsp;&nbsp;Figma</h6></li>
                <li><h6><img style={{width:"20px", height:"20px",objectFit:"contain", margin:"5px 0 5px 0"}} src={canva} alt=""/>&nbsp;&nbsp;&nbsp;Canva</h6></li>
                <li><h6><img style={{width:"20px", height:"20px",objectFit:"contain", margin:"5px 0 5px 0"}} src={photoshop} alt=""/>&nbsp;&nbsp;&nbsp;Adobe Photoshop</h6></li>
              </ul>
            </ul>
            </Box>
            <Box marginBottom="1.5rem">
            <ul>
              <li><h6><b>Front-end Development</b></h6></li>
              <ul>
                <li><h6><b style={{color:"#cc1100", fontSize:"2.5rem"}}><FaHtml5/></b>&nbsp;&nbsp;HTML</h6></li>
                <li><h6><b style={{color:"#264de4", fontSize:"2.5rem"}}><FaCss3Alt/></b>&nbsp;&nbsp;CSS</h6></li>
                <li><h6><b style={{color:"#e6b100", fontSize:"2.5rem"}}><DiJavascript/></b>&nbsp;&nbsp;JavaScript(ES6+)</h6></li>
                <li><h6><b style={{color:"#7311f6", fontSize:"2.5rem"}}><FaBootstrap/></b>&nbsp;&nbsp;Bootstrap</h6></li>
                <li><h6><b style={{color:"#007fff", fontSize:"2.5rem"}}><SiMui/></b>&nbsp;&nbsp;Material-UI</h6></li>
                <li><h6><b style={{color:"#00d8ff", fontSize:"2.5rem"}}><FaReact/></b>&nbsp;&nbsp;React.js</h6></li>
              </ul>
            </ul>
            </Box>
            <Box marginBottom="1.5rem">
            <ul>
              <li><h6><b>Back-end Development</b></h6></li>
              <ul>
                <li><h6><b style={{color:"#8ec454", fontSize:"2.5rem"}}><FaNodeJs/></b>&nbsp;&nbsp;Nodejs</h6></li>
                <li><h6><b style={{color:"#003e2b", fontSize:"2.5rem"}}><SiDjango/></b>&nbsp;&nbsp;Python(Django)</h6></li>
              </ul>
            </ul>
            </Box>
            <Box marginBottom="1.5rem">
            <ul>
              <li><h6><b>Database</b></h6></li>
              <ul>
                <li><h6><img style={{width:"30px", height:"30px", objectFit:"contain"}} src={mysql} alt=""/>&nbsp;MySQL</h6></li>
                <li><h6><b style={{color:"#0f80cc", fontSize:"2.5rem"}}><SiSqlite/></b>&nbsp;&nbsp;SQLite</h6></li>
              </ul>
            </ul>
            </Box>
            <Box marginBottom="1.5rem">
            <ul>
              <li><h6><b>Version Control</b></h6></li>
              <ul>
                <li><h6><b style={{color:"#de4c36", fontSize:"2.5rem"}}><BiLogoGit/></b>&nbsp;&nbsp;Git</h6></li>
                <li><h6><b style={{fontSize:"2.5rem"}}><FaGithub/></b>&nbsp;&nbsp;Github</h6></li>
              </ul>
            </ul>
            </Box>
          </div>
          <div className="rightSkills">
            <Box className="youngIT">
              <img src={youngIT} alt=""/>
            </Box>
          </div>
        </Box>
        <div></div>
      </div>
    </section>
  );
};

export default Skills;
