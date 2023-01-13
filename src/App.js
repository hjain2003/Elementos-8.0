import './App.css';
import Landingpage from './components/Landingpage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <div id="firstpagecontainer">
    <div className="box">
      <Navbar/>
      </div>
    <div className="lpoverlay">
      <Landingpage/>
      </div>
    </div>
    </>
  );
}

export default App;
