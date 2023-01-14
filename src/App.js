import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import About from './components/About';
import { Routes, Route} from 'react-router';

function App() {
  return (
    <>
   
     <div id="firstpagecontainer">
    <div className="box">
      <Navbar/>
      </div>
    <div className="lpoverlay">
      <LandingPage/>
      </div>
    </div>
    <About/>
    
    </>
  );
}

export default App;
