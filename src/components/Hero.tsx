import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.news18.com/ibnlive/uploads/2024/07/rohit-sharma-t20-world-cup-bcci-2024-07-774540470fa7a3cb905af92112e420ad-16x9.jpg?impolicy=website&width=640&height=360"
          alt="Cricket Stadium"
          className="w-full h-full object-cover opacity-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/60" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block">Rohit Sharma</span>
              <span className="block text-orange-400 mt-2">The Hitman</span>
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-lg">
              Indian cricket captain, record-breaking opening batsman, and one of the 
              most prolific run-scorers in limited-overs cricket history.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#biography"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Explore Journey
              </a>
              <a
                href="#statistics"
                className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                View Statistics
              </a>
            </div>
          </div>
          
          <div 
            className={`hidden md:block relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <img
              src="https://img.theweek.in/content/dam/week/magazine/theweek/sports/images/2023/11/25/56-Rohit-Sharma.jpg"
              alt="Cricket Player"
              className="w-full max-w-md mx-auto rounded-lg shadow-xl object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-900/80 backdrop-blur-sm py-2 px-4 rounded-full">
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-sm text-gray-300">Tests</p>
                  <p className="text-xl font-bold text-white">50+</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-300">ODIs</p>
                  <p className="text-xl font-bold text-white">250+</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-300">T20Is</p>
                  <p className="text-xl font-bold text-white">140+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <a 
          href="#biography" 
          className="flex flex-col items-center animate-bounce text-white"
          aria-label="Scroll to biography section"
        >
          <span className="text-sm mb-1">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};