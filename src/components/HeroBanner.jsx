import { Box } from "@mui/material";
import React from "react";
import html5 from "../components/images/html5.png";
import css3 from "../components/images/css3.png";
import javascript6 from "../components/images/JavaScript6.png";
import bootstrap from "../components/images/bootstrap.png";
import materialUI from "../components/images/material-ui.png";
import react from "../components/images/react.png";
import nodejs from "../components/images/nodejs.png";
import django from "../components/images/django.png";
import php from "../components/images/php.png";
import mysql from "../components/images/mysql.png";
import SQLite from "../components/images/SQLite.png";
import git from "../components/images/git.png";
import github from "../components/images/github.png";
import figma from "../components/images/figma.png";

// import IMG1 from "../components/images/IMGJSON.png"

const HeroBanner = () => {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        backgroundColor: "#cccccc",
        paddingTop: "70px",
      }}
    >
      <Box className="hero-container">
        <Box className="heroLeft-container">
          <h2>Hello, My name is</h2>
          <h1>JERSON BOLAMBOT</h1>
          <h3>and I'm a Web Developer</h3>
          <p style={{padding:".5rem 0"}}>
          I'am passionate about learning and keeping up with the latest web development trends and technologies constantly improving my skills and staying ahead in the field.
          </p>            
          <Box padding="1rem 0">
          <h6>Tech Stack:</h6>
          <Box className="logos">
            <Box className="logos-slide">
              <img src={html5} alt="" />
              <img src={css3} alt="" />
              <img src={javascript6} alt="" />
              <img src={bootstrap} alt="" />
              <img src={materialUI} alt="" />
              <img src={react} alt="" />
              <img src={nodejs} alt="" />
              <img src={django} alt="" />
              <img src={php} alt="" />
              <img src={mysql} alt="" />
              <img src={SQLite} alt="" />
              <img src={git} alt="" />
              <img src={github} alt="" />
              <img src={figma} alt="" />
            </Box>
            <Box className="logos-slide">
              <img src={html5} alt="" />
              <img src={css3} alt="" />
              <img src={javascript6} alt="" />
              <img src={bootstrap} alt="" />
              <img src={materialUI} alt="" />
              <img src={react} alt="" />
              <img src={nodejs} alt="" />
              <img src={django} alt="" />
              <img src={php} alt="" />
              <img src={mysql} alt="" />
              <img src={SQLite} alt="" />
              <img src={git} alt="" />
              <img src={github} alt="" />
              <img src={figma} alt="" />
            </Box>
          </Box>
          </Box>
        </Box>

        <div className="heroRight-container">
          {/* <img src={IMG1} alt='img1'/> */}
        </div>
      </Box>
    </section>
  );
};

export default HeroBanner;
