import React, {useContext} from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import MyServices from './components/MyServices';
import Portfolio from './components/Portfolio';
import { ThemeContext } from './Themes';

function App() {
  const [{ theme }] = useContext(ThemeContext);
  return (
    <div className="App">
      <Header/>
      <div><HeroBanner/></div>
      <About/>
      <MyServices/>
      <Portfolio/>
    </div>
  );
}

export default App;
