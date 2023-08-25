import React from "react";
import "./App.css";
import About from "./About";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import MyServices from "./components/MyServices";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
     <HeroBanner />
      <About />
       {/* <MyServices />
      <Skills/>
      <Projects /> */}
    </div>
  );
}

export default App;
