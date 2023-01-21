import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Canvas from "./components/BgCanvas";
import { Routes, Route } from "react-router";
import TimeLine from "./components/TimeLine";

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
    </>
  );
}

export default App;
