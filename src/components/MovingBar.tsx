import React from 'react';
import { FaMicrosoft, FaGithub, FaMailBulk } from "react-icons/fa";

const MovingBar = () => {
  return (
    <div className="h-16 md:h-20 w-full bg-green-600 flex items-center shadow-lg overflow-hidden relative">
      <div className="moving-bar-container flex w-max animate-scroll">
        <div className="moving-bar text-white text-xs sm:text-sm md:text-lg font-semibold uppercase tracking-wide flex items-center gap-1 sm:gap-2 md:gap-3 px-4 transition-all duration-300 hover:scale-105 hover:text-yellow-300">
          <FaMicrosoft className="text-white text-base sm:text-lg md:text-2xl" /> Microsoft
        </div>
        <div className="moving-bar text-white text-xs sm:text-sm md:text-lg font-semibold uppercase tracking-wide flex items-center gap-1 sm:gap-2 md:gap-3 px-4 transition-all duration-300 hover:scale-105 hover:text-yellow-300">
          <FaGithub className="text-white text-base sm:text-lg md:text-2xl" /> Github
        </div>
        <div className="moving-bar text-white text-xs sm:text-sm md:text-lg font-semibold uppercase tracking-wide flex items-center gap-1 sm:gap-2 md:gap-3 px-4 transition-all duration-300 hover:scale-105 hover:text-yellow-300">
          <div className="w-4 h-2 sm:w-5 sm:h-2.5 md:w-6 md:h-3 bg-white"></div> Zapier
        </div>
        <div className="moving-bar text-white text-xs sm:text-sm md:text-lg font-semibold uppercase tracking-wide flex items-center gap-1 sm:gap-2 md:gap-3 px-4 transition-all duration-300 hover:scale-105 hover:text-yellow-300">
          <FaMailBulk className="text-white text-base sm:text-lg md:text-2xl" /> POSTMAN
        </div>
        {/* Duplicate for infinite scrolling effect */}
        <div className="moving-bar text-white text-xs sm:text-sm md:text-lg font-semibold uppercase tracking-wide flex items-center gap-1 sm:gap-2 md:gap-3 px-4 transition-all duration-300 hover:scale-105 hover:text-yellow-300">
          <FaMicrosoft className="text-white text-base sm:text-lg md:text-2xl" /> Microsoft
        </div>
        <div className="moving-bar text-white text-xs sm:text-sm md:text-lg font-semibold uppercase tracking-wide flex items-center gap-1 sm:gap-2 md:gap-3 px-4 transition-all duration-300 hover:scale-105 hover:text-yellow-300">
          <FaGithub className="text-white text-base sm:text-lg md:text-2xl" /> Github
        </div>
        <div className="moving-bar text-white text-xs sm:text-sm md:text-lg font-semibold uppercase tracking-wide flex items-center gap-1 sm:gap-2 md:gap-3 px-4 transition-all duration-300 hover:scale-105 hover:text-yellow-300">
          <div className="w-4 h-2 sm:w-5 sm:h-2.5 md:w-6 md:h-3 bg-white"></div> Zapier
        </div>
        <div className="moving-bar text-white text-xs sm:text-sm md:text-lg font-semibold uppercase tracking-wide flex items-center gap-1 sm:gap-2 md:gap-3 px-4 transition-all duration-300 hover:scale-105 hover:text-yellow-300">
          <FaMailBulk className="text-white text-base sm:text-lg md:text-2xl" /> POSTMAN
        </div>

        <div className="moving-bar text-white text-xs sm:text-sm md:text-lg font-semibold uppercase tracking-wide flex items-center gap-1 sm:gap-2 md:gap-3 px-4 transition-all duration-300 hover:scale-105 hover:text-yellow-300">
          <FaMicrosoft className="text-white text-base sm:text-lg md:text-2xl" /> Microsoft
        </div>
        <div className="moving-bar text-white text-xs sm:text-sm md:text-lg font-semibold uppercase tracking-wide flex items-center gap-1 sm:gap-2 md:gap-3 px-4 transition-all duration-300 hover:scale-105 hover:text-yellow-300">
          <FaGithub className="text-white text-base sm:text-lg md:text-2xl" /> Github
        </div>
        <div className="moving-bar text-white text-xs sm:text-sm md:text-lg font-semibold uppercase tracking-wide flex items-center gap-1 sm:gap-2 md:gap-3 px-4 transition-all duration-300 hover:scale-105 hover:text-yellow-300">
          <div className="w-4 h-2 sm:w-5 sm:h-2.5 md:w-6 md:h-3 bg-white"></div> Zapier
        </div>
        <div className="moving-bar text-white text-xs sm:text-sm md:text-lg font-semibold uppercase tracking-wide flex items-center gap-1 sm:gap-2 md:gap-3 px-4 transition-all duration-300 hover:scale-105 hover:text-yellow-300">
          <FaMailBulk className="text-white text-base sm:text-lg md:text-2xl" /> POSTMAN
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-5%);
          }
        }
        .animate-scroll {
          display: flex;
          white-space: nowrap;
          animation: scroll 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MovingBar;
