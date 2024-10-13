import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/daffodil.png"

const Header = () => {
  return (
    <header className="bg-light-green text-white p-4">
      <nav className="flex justify-between">
        <NavLink to="/">
          <img className="logo" src={logo}></img>
        </NavLink>      
        <div className="space-x-4">
            <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>Contact</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
