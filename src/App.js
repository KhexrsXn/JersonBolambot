import React from "react";
import "./App.css";
import About from "./About";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
// import MyServices from "./myservices";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <>
      <Header />
     <HeroBanner />
      <About />
     {/* <MyServices /> */}
        {/* <Skills/>
      <Projects /> */}
    </>
  );
}

export default App;