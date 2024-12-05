import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/daffodil.png";

const Header = () => {
  return (
    <header className="text-white p-4">
      <nav className="flex justify-between items-center">
        <NavLink to="/my-portfolio/" className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>      
        <div className="desktop-nav space-x-4">
          <NavLink to="/my-portfolio/" className={({ isActive }) => (isActive ? 'font-bold text-blue-500' : 'text-white')} end>Home</NavLink>         
          <NavLink to="/my-portfolio/about" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>About</NavLink>
          <NavLink to="/my-portfolio/projects" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>Projects</NavLink>
          <NavLink to="/my-portfolio/resume" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>Resume</NavLink>
        </div>

        {/* Mobile-nav section */}
        <div className="mobile-nav hidden flex-col items-center space-y-4">
          <NavLink to="/my-portfolio/" className={({ isActive }) => (isActive ? 'font-bold text-blue-500' : 'text-white')} end>Home</NavLink>         
          <NavLink to="/my-portfolio/about" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>About</NavLink>
          <NavLink to="/my-portfolio/projects" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>Projects</NavLink>
          <NavLink to="/my-portfolio/resume" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>Resume</NavLink>
          <hr className="w-1/2 border-white mt-4" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
