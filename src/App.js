import React from "react";
import "./App.css";
import About from "./About";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import Projects from "./MyProject";
import Skills from "./Skills";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="app">
      <Header />
      <HeroBanner />
      <About />
      <Skills/> 
      <Projects />
    </div>
  );
}

export default App;
