import React from "react";
import "../Skills/style.css";
import { Box } from "@mui/material";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt
} from "react-icons/fa";
import { SiMui, SiDjango, SiSqlite } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import figma from "../components/images/figma.png";
import mysql from "../components/images/mysql.png";
import photoshop from "../components/images/photoshop.png";
import { SiTailwindcss } from "react-icons/si";

const icons = [
  { Icon: FaHtml5, color: "#E44D26", name: "HTML5" },
  { Icon: FaCss3Alt, color: "#1572B6", name: "CSS3" },
  { Icon: FaBootstrap, color: "#563D7C", name: "Bootstrap" },
  { Icon: FaReact, color: "#61DAFB", name: "React" },
  { Icon: FaNodeJs, color: "#68A063", name: "Node.js" },
  { Icon: FaGithub, color: "#000000", name: "GitHub" },
  { Icon: SiMui, color: "#1976D2", name: "Material UI" },
  { Icon: SiDjango, color: "#092E20", name: "Django" },
  { Icon: SiSqlite, color: "#003B57", name: "SQLite" },
  { Icon: DiJavascript, color: "#F7DF1E", name: "JavaScript" },
  { Icon: SiTailwindcss, color: "#38BDF8", name: "Tailwind CSS" },
  { Icon: FaGitAlt, color: "#F54D27", name: "Git" }
];

const Skills = () => {
  // Grouping icons HTML5 and CSS3 into a single box
  const groupedIcons = icons.reduce((acc, icon) => {
    if (icon.name === "HTML5" || icon.name === "CSS3") {
      if (!acc["HTML & CSS"]) acc["HTML & CSS"] = [];
      acc["HTML & CSS"].push(icon);
    } else {
      acc[icon.name] = [icon];
    }
    return acc;
  }, {});

  return (
    <section id="myskills" className="skillsContainer">
      <Box marginTop='1rem' display="flex" justifyContent="center">
        <h1>My Skills</h1>
      </Box>
      <Box margin='2rem 0 0 0' display="flex" flexWrap="wrap" justifyContent="center">
        {Object.entries(groupedIcons).map(([groupName, groupIcons], index) => (
          <Box key={index} m={2} textAlign="center" sx={{ backgroundColor: 'var(--bg-color2)', width: '150px', padding: '2rem 1rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', borderRadius: '5px'}}>
            <Box>
              {groupIcons.map((icon, idx) => (
                <icon.Icon key={idx} size={48} color={icon.color} />
              ))}
            </Box>
            <h6 style={{ margin: '1rem 0 0 0' }}>{groupName}</h6>
          </Box>
        ))}
        <Box key="figma" m={2} textAlign="center" className='imgStyle'>
          <img src={figma} alt="figma" width="30" />
          <h6 style={{ margin: '1rem 0 0 0' }}>Figma</h6>
        </Box>
        <Box key="mysql" m={2} textAlign="center" className='imgStyle'>
          <img src={mysql} alt="mysql" width="48" />
          <h6 style={{ margin: '1rem 0 0 0' }}>MySQL</h6>
        </Box>
        <Box key="photoshop" m={2} textAlign="center" className='imgStyle'>
          <img src={photoshop} alt="photoshop" width="48" />
          <h6 style={{ margin: '1rem 0 0 0' }}>Photoshop</h6>
        </Box>
      </Box>
    </section>
  );
};

export default Skills;
