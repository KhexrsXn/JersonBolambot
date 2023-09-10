import React from "react";
import "./App.css";
import About from "./About";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import Skills from "./Skills";
import Projects from "./MyProject";
import FAQ from "./FrequentlyAsk";
import GetInTouch from "./GetinTouch";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="app">
      <Header />
      <HeroBanner />
      <About />
      <Skills />
      <Projects />
      <FAQ />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
