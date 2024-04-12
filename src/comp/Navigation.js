import React, { useState, useEffect } from 'react'; // Import useEffect from React
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add event listener inside useEffect to ensure it's only added once
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures it only runs once

  return (
    <nav className={`fixed top-0 left-0 w-full p-4 ${isScrolled ? 'bg-gray-800' : 'bg-blue-500'}`}>
      <ul className="flex justify-center space-x-4">
        {/* Use Link component for navigation */}
        <li><Link className="text-white hover:text-yellow-500 transition duration-300 ease-in-out" to="/Stopwatch">Stopwatch</Link></li>
        <li><Link className="text-white hover:text-yellow-500 transition duration-300 ease-in-out" to="/Tictecteo">Tictecteo</Link></li>
       
      </ul>
    </nav>
  );
};

export default Navigation;
