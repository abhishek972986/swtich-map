import React, { useState } from 'react';
import logo from './images/image copy.png';
import { FaEye, FaSearch, FaHome, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="w-full flex justify-between items-center px-3 sm:px-4 md:px-8 py-2 md:py-3 bg-white shadow-md relative">
      {/* Logo and Title */}
      <Link to='/'>
        <div className="text-sm sm:text-lg md:text-3xl font-extrabold flex items-center">
          <img src={logo} className="h-6 sm:h-8 md:h-12 lg:h-16 w-auto object-contain" alt="Logo" />
          <span className="ml-1 sm:ml-2">Switchmap-NG</span>
        </div>
      </Link>

      {/* Navigation Links - Desktop */}
      <div className="hidden sm:flex justify-around items-center space-x-2 sm:space-x-3 md:space-x-5 text-xs sm:text-sm md:text-base">
        <Link to='/general' className={location.pathname === '/general' ? 'text-yellow-600' : ''}><FaHome  className={location.pathname === '/general' ? 'text-yellow-600 text-2xl' : 'text-black text-2xl'} /></Link>
        <Link to='/main' className={location.pathname === '/main' ? 'text-yellow-600' : ''}><div>Topography</div></Link>
        <Link to='/bandwidth' className={location.pathname === '/bandwidth' ? 'text-yellow-600' : ''}><div>Bandwidth</div></Link>
        <Link to='/movement' className={location.pathname === '/movement' ? 'text-yellow-600' : ''}><div>Movement</div></Link>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <button className="hidden lg:flex p-1 sm:p-2 md:p-2.5 rounded-lg text-white bg-green-700 text-xs sm:text-sm md:text-lg font-bold hover:bg-green-600 transition-all duration-500 ease-in-out cursor-pointer">
          Star on Github
        </button>
        <button className="hidden sm:flex bg-black cursor-pointer p-2 sm:p-3 rounded-lg">
          <FaEye className="text-lg sm:text-2xl text-white" />
        </button>
        <button className="hidden sm:flex lg:flex bg-black cursor-pointer p-2 sm:p-3 rounded-lg flex items-center text-white gap-1">
          <span className="hidden sm:inline text-xs sm:text-sm">Search</span>
          <FaSearch className="text-white text-base sm:text-lg" />
        </button>
      </div>

      {/* Hamburger Menu Button */}
      <button className="sm:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 sm:hidden z-50">
          <Link to='/main' className={location.pathname === '/main' ? 'text-yellow-600 text-lg' : 'text-lg'}>Topography</Link>
          <Link to='/bandwidth' className={location.pathname === '/bandwidth' ? 'text-yellow-600 text-lg' : 'text-lg'}>Bandwidth</Link>
          <Link to='/movement' className={location.pathname === '/movement' ? 'text-yellow-600 text-lg' : 'text-lg'}>Movement</Link>
          <button className="bg-black cursor-pointer p-2 rounded-lg flex items-center text-white gap-1 w-1/2 justify-center">
            <span className="text-xs">Search</span>
            <FaSearch className="text-white text-base" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AppHeader;
