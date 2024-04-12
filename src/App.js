import './App.css';
import Stopwatch from './Stopwatch'; // Import the Stopwatch component
import Tictecteo from './Tictecteo'; // Import the Tictecteo component
import Navigation from './comp/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navigation component is outside the Router */}
        <Navigation />
        <div>
          {/* 
            Use the Routes component to define routes.
            Each Route component renders a specific component based on the URL path.
          */}
          <Routes>
          <Route path="/" element={<Stopwatch />}/>
          <Route path="/Stopwatch" element={<Stopwatch />} /> {/* Route for Stopwatch component */}
            <Route path="/Tictecteo" element={<Tictecteo />} /> {/* Route for Tictecteo component */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
