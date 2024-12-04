import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/daffodil.png"

const Header = () => {
  return (
    <header className=" text-white p-4">
      <nav className="flex justify-between">
        <NavLink to="/my-portfolio/">
          <img className="logo" src={logo}></img>
        </NavLink>      
        <div className="space-x-4">
          <NavLink 
            to="/my-portfolio/" 
            className={({ isActive }) => (isActive ? 'font-bold text-blue-500' : 'text-white')} 
            end
          >
            Home
          </NavLink>         
          <NavLink to="/my-portfolio/about" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>About</NavLink>
          <NavLink to="/my-portfolio/projects" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>Projects</NavLink>
          <NavLink to="/my-portfolio/resume" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>Resume</NavLink>
          <NavLink to="/my-portfolio/contact" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>Contact</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
