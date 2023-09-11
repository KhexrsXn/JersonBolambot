import React, { useEffect } from "react";
import "../HeroBanner/style.css";
import "../App.css";
import { FaLaptopCode, FaCode, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {SiMui, SiDjango, SiSqlite,} from "react-icons/si";
import {BiLogoGit} from "react-icons/bi";
import {DiJavascript} from "react-icons/di"
import {CgFigma} from "react-icons/cg"
import {SiWebflow,} from "react-icons/si";
import python from "../components/images/python.png";
import figma from "../components/images/figma.png";
import mysql from "../components/images/mysql.png";
import photoshop from "../components/images/photoshop.png";
import canva from "../components/images/canva.png";
import IMG01 from "../components/images/IMG01.png";

const HeroBanner = () => {
  useEffect(() => {
    const handleScroll = () => {
      const professionBox = document.querySelector(".profession-box");

      if (professionBox) {
        if (window.scrollY > 50) {
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
          <h3>Hi, I'm Jerson</h3>
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
              <h3 style={{color:"#e6b100", }}><DiJavascript/></h3>
              <h3 style={{color:"#7311f6"}}><FaBootstrap/></h3>
              <h3 style={{color:"#007fff"}}><SiMui/></h3>
              <h3 style={{color:"#00d8ff"}}><FaReact/></h3>
              <h3 style={{color:"#8ec454"}}><FaNodeJs/></h3>
              <h3><img style={{width:"25px", height:"25px",}} src={python} alt=""/></h3>
              <h3 style={{color:"#003e2b"}}><SiDjango/></h3>
              <h3 style={{color:"#0f80cc"}}><SiSqlite/></h3>
              <h3><img style={{width:"35px", height:"30px", }} src={mysql} alt=""/></h3>
              <h3><FaGithub/></h3>
              <h3 style={{color:"#de4c36"}}><BiLogoGit/></h3>
              <h3><img style={{width:"20px", height:"20px",}} src={figma} alt=""/></h3>
              <h3><img style={{width:"20px", height:"20px", objectFit:"cover"}} src={canva} alt=""/></h3>
              <h3><img style={{width:"20px", height:"20px", objectFit:"cover"}} src={photoshop} alt=""/></h3>
            </div>
            <div className="logos-slide">
              <h3 style={{color:"#cc1100"}}><FaHtml5/></h3>
              <h3 style={{color:"#264de4"}}><FaCss3Alt/></h3>
              <h3 style={{color:"#e6b100", }}><DiJavascript/></h3>
              <h3 style={{color:"#7311f6"}}><FaBootstrap/></h3>
              <h3 style={{color:"#007fff"}}><SiMui/></h3>
              <h3 style={{color:"#00d8ff"}}><FaReact/></h3>
              <h3 style={{color:"#8ec454"}}><FaNodeJs/></h3>
              <h3><img style={{width:"25px", height:"25px",}} src={python} alt=""/></h3>
              <h3 style={{color:"#003e2b"}}><SiDjango/></h3>
              <h3 style={{color:"#0f80cc"}}><SiSqlite/></h3>
              <h3><img style={{width:"35px", height:"30px", }} src={mysql} alt=""/></h3>
              <h3><FaGithub/></h3>
              <h3 style={{color:"#de4c36"}}><BiLogoGit/></h3>
              <h3><img style={{width:"20px", height:"20px",}} src={figma} alt=""/></h3>
              <h3><img style={{width:"20px", height:"20px", objectFit:"cover"}} src={canva} alt=""/></h3>
              <h3><img style={{width:"20px", height:"20px", objectFit:"cover"}} src={photoshop} alt=""/></h3>
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
        <div className="hero-image">
        <img src={IMG01} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
