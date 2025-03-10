import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="text-white header">
      <nav className="flex justify-between items-center">
        <NavLink to="/my-portfolio/" className="logo-container">
          <h3>isa</h3>
        </NavLink>      
        <div className="desktop-nav space-x-4">
          <NavLink to="/my-portfolio/" className={({ isActive }) => (isActive ? 'font-bold text-blue-500' : 'text-white')} end>home</NavLink>         
          <NavLink to="/my-portfolio/about" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>about</NavLink>
          <NavLink to="/my-portfolio/projects" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>projects</NavLink>
          <NavLink to="/my-portfolio/resume" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>resume</NavLink>
          <NavLink to="/my-portfolio/contact" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M11 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V11M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M18.4976 15.7119C17.7978 14.9328 16.6309 14.7232 15.7541 15.4367C14.8774 16.1501 14.7539 17.343 15.4425 18.1868C16.131 19.0306 18.4976 21 18.4976 21C18.4976 21 20.8642 19.0306 21.5527 18.1868C22.2413 17.343 22.1329 16.1426 21.2411 15.4367C20.3492 14.7307 19.1974 14.9328 18.4976 15.7119Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </NavLink>
        </div>

        {/* Mobile-nav section */}
        <div className="mobile-nav hidden flex-col items-center space-y-4">
          <NavLink to="/my-portfolio/" className={({ isActive }) => (isActive ? 'font-bold text-blue-500' : 'text-white')} end>home</NavLink>         
          <NavLink to="/my-portfolio/about" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>about</NavLink>
          <NavLink to="/my-portfolio/projects" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>projects</NavLink>
          <NavLink to="/my-portfolio/resume" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>resume</NavLink>
          <NavLink to="/my-portfolio/contact" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-white'}>
            {({isActive }) => (
            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              className={`w-6 h-6 transition-all ${
                isActive ? 'stroke-blue-500 stroke-[3px]' : 'stroke-white stroke-[2px]'
              }`}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M11 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V11M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M18.4976 15.7119C17.7978 14.9328 16.6309 14.7232 15.7541 15.4367C14.8774 16.1501 14.7539 17.343 15.4425 18.1868C16.131 19.0306 18.4976 21 18.4976 21C18.4976 21 20.8642 19.0306 21.5527 18.1868C22.2413 17.343 22.1329 16.1426 21.2411 15.4367C20.3492 14.7307 19.1974 14.9328 18.4976 15.7119Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          )}
          </NavLink>
          <hr className="w-1/2 border-white mt-4" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
