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
import webdev from "../components/images/webdev.png";
import uiux from "../components/images/uiux.png";
import marketing from "../components/images/marketing.png";
import frontend from "../components/images/frontend.png";

const HeroBanner = () => {
  useEffect(() => {
    const handleScroll = () => {
      const professionBox = document.querySelector(".profession-box");

      if (professionBox) {
        if (window.scrollY > 10) {
          professionBox.style.display = "none";
          professionBox.style.animation = "fadeInOut 1s ease-in-out, professioRotate 8s ease-out infinite";
        } else {
          professionBox.style.display = "block";
          professionBox.style.animation = "fadeInOut 1s ease-in-out, professioRotate 8s ease-out infinite";
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
          <label>Tech Stack:</label>
        </div>
      </div>
      <div className="profession-container">
        <div className="profession-box">
          <div className="profession" style={{ "--i": 0 }}>
            <img src={webdev} alt="" />
            <h4>Front-End</h4>
          </div>
          <div className="profession" style={{ "--i": 1 }}>
            <img src={uiux} alt="" />
            <h4>Back-End</h4>
          </div>
          <div className="profession" style={{ "--i": 2 }}>
            <img src={frontend} alt="" />
            <h4>Web Design</h4>
          </div>
          <div className="profession" style={{ "--i": 3 }}>
            <img src={marketing} alt="" />
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
