import React from "react";
import "../Skills/style.css";
import { Box, Typography } from "@mui/material";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiMui, SiDjango, SiSqlite } from "react-icons/si";
import { BiLogoGit } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import figma from "../components/images/figma.png";
import mysql from "../components/images/mysql.png";
import photoshop from "../components/images/photoshop.png";
// import canva from "../components/images/canva.png";
import youngIT from "../components/images/youngIT.png";

const Skills = () => {
  return (
    <section id="myskills" className="skillsContainer">
      <Box display="flex" justifyContent="center">
        <h1>My Skills</h1>
      </Box>
        <div className="leftSkills">
          <div>
          <Box>
            <ul>
              <li>
                <Typography variant="h6">
                  <b>UX/UI</b>
                </Typography>
              </li>
              <ul>
                <li>
                  <Box className="progress-container">
                    <Box display="flex" alignItems="center">
                      <img
                        style={{
                          width: "15px",
                          height: "15px",
                          objectFit: "contain",
                          margin: "5px 10px 5px 0",
                        }}
                        src={figma}
                        alt=""
                      />
                      <Typography variant="h6">Figma</Typography>
                    </Box>
                    <div className="progress">
                      <div className="progress-figma"></div>
                      <div className="figma">
                        <Typography>50%</Typography>
                      </div>
                    </div>
                  </Box>
                </li>
                {/* <li>
                  <Box className="progress-container">
                    <Box display="flex" alignItems="center">
                      <img
                        style={{
                          width: "15px",
                          height: "15px",
                          objectFit: "contain",
                          margin: "5px 10px 5px 0",
                        }}
                        src={canva}
                        alt=""
                      />
                      <Typography variant="h6">Canva</Typography>
                    </Box>
                    <div className="progress">
                      <div className="progress-canva"></div>
                      <div className="figma">
                        <Typography>65%</Typography>
                      </div>
                    </div>
                  </Box>
                </li> */}
                <li>
                  <Box className="progress-container">
                    <Box display="flex" alignItems="center">
                      <img
                        style={{
                          width: "15px",
                          height: "15px",
                          objectFit: "contain",
                          margin: "5px 10px 5px 0",
                        }}
                        src={photoshop}
                        alt=""
                      />
                      <Typography variant="h6">Photoshop</Typography>
                    </Box>
                    <div className="progress">
                      <div className="progress-photoshop"></div>
                      <div className="figma">
                        <Typography>60%</Typography>
                      </div>
                    </div>
                  </Box>
                </li>
              </ul>
            </ul>
          </Box>
          <Box>
            <ul>
              <li>
                <Typography variant="h6">
                  <b>Front-end Development</b>
                </Typography>
              </li>
              <ul>
                <li>
                  <Box className="progress-container">
                    <Box display="flex" alignItems="center">
                      <Typography variant="h6">
                        <b style={{ color: "#cc1100", fontSize: "1.5rem" }}>
                          <FaHtml5 />
                        </b>
                        &nbsp;&nbsp;HTML
                      </Typography>
                    </Box>
                    <div className="progress">
                      <div className="progress-html"></div>
                      <div className="html">
                        <Typography>95%</Typography>
                      </div>
                    </div>
                  </Box>
                </li>
                <li>
                  <Box className="progress-container">
                    <Box display="flex" alignItems="center">
                      <Typography variant="h6">
                        <b style={{ color: "#264de4", fontSize: "1.5rem" }}>
                          <FaCss3Alt />
                        </b>
                        &nbsp;&nbsp;CSS
                      </Typography>{" "}
                    </Box>
                    <div className="progress">
                      <div className="progress-css"></div>
                      <div className="html">
                        <Typography>90%</Typography>
                      </div>
                    </div>
                  </Box>
                </li>
                <li>
                  <Box className="progress-container">
                    <Box display="flex" alignItems="center">
                      <Typography variant="h6">
                        <b style={{ color: "#e6b100", fontSize: "1.5rem" }}>
                          <DiJavascript />
                        </b>
                        &nbsp;&nbsp;JavaScript
                      </Typography>{" "}
                    </Box>
                    <div className="progress">
                      <div className="progress-javascript"></div>
                      <div className="html">
                        <Typography>85%</Typography>
                      </div>
                    </div>
                  </Box>
                </li>
                <li>
                  <Box className="progress-container">
                    <Box display="flex" alignItems="center">
                      <Typography variant="h6">
                        <b style={{ color: "#7311f6", fontSize: "1.5rem" }}>
                          <FaBootstrap />
                        </b>
                        &nbsp;&nbsp;Bootstrap
                      </Typography>{" "}
                    </Box>
                    <div className="progress">
                      <div className="progress-bootstrap"></div>
                      <div className="html">
                        <Typography>70%</Typography>
                      </div>
                    </div>
                  </Box>
                </li>
                <li>
                  <Box className="progress-container">
                    <Box display="flex" alignItems="center">
                      <Typography variant="h6">
                        <b style={{ color: "#007fff", fontSize: "1.5rem" }}>
                          <SiMui />
                        </b>
                        &nbsp;&nbsp;Material-UI
                      </Typography>{" "}
                    </Box>
                    <div className="progress">
                      <div className="progress-mui"></div>
                      <div className="html">
                        <Typography>70%</Typography>
                      </div>
                    </div>
                  </Box>
                </li>
                <li>
                  <Box className="progress-container">
                    <Box display="flex" alignItems="center">
                      <Typography variant="h6">
                        <b style={{ color: "#00d8ff", fontSize: "1.5rem" }}>
                          <FaReact />
                        </b>
                        &nbsp;&nbsp;React.js
                      </Typography>{" "}
                    </Box>
                    <div className="progress">
                      <div className="progress-react"></div>
                      <div className="html">
                        <Typography>75%</Typography>
                      </div>
                    </div>
                  </Box>
                </li>
              </ul>
            </ul>
          </Box>
          <Box>
            <ul>
              <li>
                <Typography variant="h6">
                  <b>Back-end Development</b>
                </Typography>
              </li>
              <ul>
                <li>
                  <Box className="progress-container">
                    <Box display="flex" alignItems="center">
                      <Typography variant="h6">
                        <b style={{ color: "#8ec454", fontSize: "1.5rem" }}>
                          <FaNodeJs />
                        </b>
                        &nbsp;&nbsp;Nodejs
                      </Typography>{" "}
                    </Box>
                    <div className="progress">
                      <div className="progress-nodejs"></div>
                      <div className="html">
                        <Typography>70%</Typography>
                      </div>
                    </div>
                  </Box>
                </li>
                <li>
                  <Box className="progress-container">
                    <Box display="flex" alignItems="center" whiteSpace="nowrap">
                      <Typography variant="h6">
                        <b style={{ color: "#003e2b", fontSize: "1.5rem" }}>
                          <SiDjango />
                        </b>
                        &nbsp;&nbsp;Django(Python)
                      </Typography>{" "}
                    </Box>
                    <div className="progress">
                      <div className="progress-django"></div>
                      <div className="html">
                        <Typography>75%</Typography>
                      </div>
                    </div>
                  </Box>
                </li>
              </ul>
            </ul>
          </Box>
          <Box>
            <ul>
              <li>
                <Typography variant="h6">
                  <b>Database</b>
                </Typography>
              </li>
              <ul>
                <li>
                  <Box className="progress-container">
                    <Box display="flex" alignItems="center">
                      <Typography variant="h6">
                        <b style={{ color: "#0f80cc", fontSize: "1.5rem" }}>
                          <SiSqlite />
                        </b>
                        &nbsp;&nbsp;SQLite
                      </Typography>{" "}
                    </Box>
                    <div className="progress">
                      <div className="progress-sqlite"></div>
                      <div className="html">
                        <Typography>90%</Typography>
                      </div>
                    </div>
                  </Box>
                </li>
                <li>
                  <Box className="progress-container">
                    <Box display="flex" alignItems="center">
                      <Typography variant="h6">
                        <img
                          style={{
                            width: "20px",
                            height: "20px",
                            objectFit: "contain",
                          }}
                          src={mysql}
                          alt=""
                        />
                        &nbsp;MySQL
                      </Typography>{" "}
                    </Box>
                    <div className="progress">
                      <div className="progress-mysql"></div>
                      <div className="html">
                        <Typography>90%</Typography>
                      </div>
                    </div>
                  </Box>
                </li>
              </ul>
            </ul>
          </Box>
          <Box>
            <ul>
              <li>
                <Typography variant="h6">
                  <b>Version Control</b>
                </Typography>
              </li>
              <ul>
                <li>
                  <Box className="progress-container">
                    <Box display="flex" alignItems="center">
                      <Typography variant="h6">
                        <b style={{ color: "#de4c36", fontSize: "1.5rem" }}>
                          <BiLogoGit />
                        </b>
                        &nbsp;&nbsp;Git
                      </Typography>{" "}
                    </Box>
                    <div className="progress">
                      <div className="progress-git"></div>
                      <div className="html">
                        <Typography>90%</Typography>
                      </div>
                    </div>
                  </Box>
                </li>
                <li>
                  <Box className="progress-container">
                    <Box display="flex" alignItems="center">
                      <Typography variant="h6">
                        <b style={{ fontSize: "1.5rem" }}>
                          <FaGithub />
                        </b>
                        &nbsp;&nbsp;Github
                      </Typography>
                    </Box>
                    <div className="progress">
                      <div className="progress-github"></div>
                      <div className="html">
                        <Typography>90%</Typography>
                      </div>
                    </div>
                  </Box>
                </li>
              </ul>
            </ul>
          </Box>
          </div>
          <div className="youngIT">
          <img src={youngIT} alt="" />
        </div>
        </div>
        
    </section>
  );
};

export default Skills;
