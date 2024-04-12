// Stopwatch.js
import React, { useState, useRef } from 'react';

// Import your background image
import backgroundImage from './bg1.jpg';

function Stopwatch() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [tens, setTens] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const IntervalRef = useRef(null);

  const startTimer = () => {
    IntervalRef.current = setInterval(() => {
      setTens((prevTens) => {
        let newTens = prevTens + 1;
        if (newTens === 100) {
          setSeconds((prevSeconds) => {
            let newSeconds = prevSeconds + 1;
            if (newSeconds === 60) {
              setMinutes((prevMinutes) => prevMinutes + 1);
              return 0;
            }
            return newSeconds;
          });
          return 0;
        }
        return newTens;
      });
    }, 10);
  };

  const handleStart = () => {
    setIsRunning(true);
    startTimer();
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(IntervalRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(IntervalRef.current);
    setMinutes(0);
    setSeconds(0);
    setTens(0);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold mb-4 text-white">Stopwatch</h1>
        <p className="text-6xl font-bold mb-4 text-white">{`${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${tens < 10 ? '0' + tens : tens}`}</p>
        <div className="flex justify-center space-x-4">
          <button onClick={isRunning ? handleStop : handleStart} className={`px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none ${isRunning ? 'hover:bg-red-500' : 'hover:bg-green-500'}`}>{isRunning ? 'Stop' : 'Start'}</button>
          <button onClick={handleReset} className="px-4 py-2 bg-gray-500 text-white rounded-lg focus:outline-none hover:bg-gray-600">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
