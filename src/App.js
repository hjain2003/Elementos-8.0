import "./App.css";
import LandingPage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Canvas from "./components/BgCanvas";
import { Routes, Route } from "react-router";
import TimeLine from "./components/TimeLine";

import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Canvas className="BgCanavs" />

      <div id="firstpagecontainer">
        <div className="box">
          <Navbar />
        </div>
        <div className="lpoverlay">
          <LandingPage />
        </div>
      </div>
      <About />
      <TimeLine />

      <Contact />
    </>
  );
}

export default App;
