import React, { useEffect } from "react";
// import { Box } from "@mui/material";
import "../HeroBanner/style.css";
import "../App.css";
// import html5 from "../components/images/html5.png";
// import css3 from "../components/images/css3.png";
// import javascript6 from "../components/images/JavaScript6.png";
// import bootstrap from "../components/images/bootstrap.png";
// import materialUI from "../components/images/material-ui.png";
// import react from "../components/images/react.png";
// import nodejs from "../components/images/nodejs.png";
// import django from "../components/images/django.png";
// import php from "../components/images/php.png";
// import mysql from "../components/images/mysql.png";
// import SQLite from "../components/images/SQLite.png";
// import git from "../components/images/git.png";
// import github from "../components/images/github.png";
// import figma from "../components/images/figma.png";
import { FaLaptopCode, FaCode, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {SiMui, SiDjango, SiSqlite, SiMysql} from "react-icons/si";
import {BiLogoGit} from "react-icons/bi";
import {DiJavascript} from "react-icons/di"
import {CgFigma} from "react-icons/cg"
import {SiWebflow} from "react-icons/si";

const HeroBanner = () => {
  useEffect(() => {
    const handleScroll = () => {
      const professionBox = document.querySelector(".profession-box");

      if (professionBox) {
        if (window.scrollY > 10) {
          professionBox.style.display = "none";
          professionBox.style.animation = "fadeInOut 1s ease-in-out, professioRotate 10s ease-out infinite";
        } else {
          professionBox.style.display = "block";
          professionBox.style.animation = "fadeInOut 1s ease-in-out, professioRotate 10s ease-out infinite";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="home-container">
          <h3>Hi! I'm Jerson</h3>
          <h1><b style={{ color: "var(--main-color)" }}>Full Stack</b> Developer</h1>
          <h6>
            I'am passionate about learning and keeping up with the latest web
            development trends and technologies constantly improving my skills and
            staying ahead in the field.
          </h6>
          <br/>
          <h6><b>Tech Stack:</b></h6>
          <div className="logos-container">
            <div className="logos-slide">
              <h3 style={{color:"#cc1100"}}><FaHtml5/></h3>
              <h3 style={{color:"#264de4"}}><FaCss3Alt/></h3>
              <h3 style={{color:"#e6b100"}}><DiJavascript/></h3>
              <h3 style={{color:"#7311f6"}}><FaBootstrap/></h3>
              <h3 style={{color:"#007fff"}}><SiMui/></h3>
              <h3 style={{color:"#00d8ff"}}><FaReact/></h3>
              <h3 style={{color:"#8ec454"}}><FaNodeJs/></h3>
              <h3 style={{color:"#003e2b"}}><SiDjango/></h3>
              <h3 style={{color:"#0f80cc"}}><SiSqlite/></h3>
              <h3><SiMysql/></h3>
              <h3><FaGithub/></h3>
              <h3 style={{color:"#de4c36"}}><BiLogoGit/></h3>
            </div>
            <div className="logos-slide">
              <h3 style={{color:"#cc1100"}}><FaHtml5/></h3>
              <h3 style={{color:"#264de4"}}><FaCss3Alt/></h3>
              <h3 style={{color:"#e6b100"}}><DiJavascript/></h3>
              <h3 style={{color:"#7311f6"}}><FaBootstrap/></h3>
              <h3 style={{color:"#007fff"}}><SiMui/></h3>
              <h3 style={{color:"#00d8ff"}}><FaReact/></h3>
              <h3 style={{color:"#8ec454"}}><FaNodeJs/></h3>
              <h3 style={{color:"#003e2b"}}><SiDjango/></h3>
              <h3 style={{color:"#0f80cc"}}><SiSqlite/></h3>
              <h3><SiMysql/></h3>
              <h3><FaGithub/></h3>
              <h3 style={{color:"#de4c36"}}><BiLogoGit/></h3>
            </div>
        </div>
      </div>
      </div>
      <div className="profession-container">
        <div className="profession-box">
          <div className="profession" style={{ "--i": 0 }}>
            <h1><FaLaptopCode/></h1>
            <h4>Front-End</h4>
          </div>
          <div className="profession" style={{ "--i": 1 }}>
            <h1><FaCode/></h1>
            <h4>Back-End</h4>
          </div>
          <div className="profession" style={{ "--i": 2 }}>
            <h1><CgFigma/></h1>
            <h4>Web Design</h4>
          </div>
          <div className="profession" style={{ "--i": 3 }}>
            <h1><SiWebflow/></h1>
            <h4>Webflow</h4>
            <h4>Development</h4>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    </section>
  );
};

export default HeroBanner;
