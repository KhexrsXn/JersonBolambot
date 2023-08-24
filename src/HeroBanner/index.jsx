import { Box } from "@mui/material";
import "../HeroBanner/style.css";
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
import webdev from "../components/images/webdev.png";
import uiux from "../components/images/uiux.png"
import marketing from "../components/images/marketing.png"

// import IMG1 from "../components/images/IMGJSON.png"

const HeroBanner = () => {
  return (
    <section id="home" className="hero-container">
      <div className="heroLeft-container">
          <h3>Hello, My name is</h3>
          <h1>BOLAMBOT, JERSON</h1>
          <p style={{ padding: ".5rem 0" }}>
            I'am passionate about learning and keeping up with the latest web
            development trends and technologies constantly improving my skills
            and staying ahead in the field.
          </p>
          <Box padding=".5rem 0">
            <label>Tech Stack:</label>
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
      </div>
      <div className="heroRight-container">
        <div className="heroRight-box">
          <div className="profession" style={{ "--i": 0 }}>
            <img src={webdev} alt="" />
            <h3>Web Developer</h3>
          </div>
          <div className="profession" style={{ "--i": 1 }}>
            <img src={uiux} alt="" />
            <h3>Web Designer</h3>
          </div>
          <div className="profession" style={{ "--i": 2 }}>
            <img src={webdev} alt="" />
            <h3>Frontend Developer</h3>
          </div>
          <div className="profession" style={{ "--i": 3 }}>
            <img src={marketing} alt="" />
            <h3>Marketing</h3>
          </div>
          
          <div className="circle"></div>
        </div>
        <div className="overlay"></div>
        {/* <div className="image">
        <img src={IMG1} alt=""/>
        </div> */}
      </div>
    </section>
  );
};

export default HeroBanner;
