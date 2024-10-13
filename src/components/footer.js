import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto bg-green rounded-lg shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-gray-800 antialiased">
      <p className="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
        &copy; 2024 Isabelle Beaudry Hajji. All rights reserved.
      </p>
      <div className="flex justify-center items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/isabelle-beaudry/"
          data-tooltip-target="tooltip-linkedin"
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <svg
            className="w-5 h-5" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          <span className="sr-only">LinkedIn</span>
        </a>
        <div
          id="tooltip-linkedin"
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
        >
          Connect with me on LinkedIn!
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a
          href="https://github.com/isabelle-bh"
          data-tooltip-target="tooltip-github"
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <svg
            className="w-5 h-5" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 .5C5.373.5 0 5.873 0 12.5c0 5.25 3.438 9.704 8.207 11.29.6.111.82-.26.82-.578v-2.18c-3.338.724-4.04-1.465-4.04-1.465-.545-1.381-1.333-1.749-1.333-1.749-1.083-.741.082-.726.082-.726 1.198.084 1.828 1.227 1.828 1.227 1.065 1.827 2.8 1.297 3.487.992.108-.773.417-1.297.76-1.597-2.665-.303-5.467-1.331-5.467-5.925 0-1.312.469-2.387 1.236-3.227-.124-.303-.537-1.527.117-3.176 0 0 1.008-.322 3.301 1.227a11.552 11.552 0 0 1 3.006-.404c1.023.005 2.058.138 3.006.404 2.293-1.55 3.301-1.227 3.301-1.227.655 1.649.241 2.873.118 3.176.77.84 1.236 1.915 1.236 3.227 0 4.615-2.806 5.615-5.478 5.915.43.371.815 1.1.815 2.221v3.295c0 .319.217.694.827.578C20.564 22.204 24 17.75 24 12.5 24 5.873 18.627.5 12 .5z" />
          </svg>
          <span className="sr-only">GitHub</span>
        </a>
        <div
          id="tooltip-github"
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
        >
          Check out my GitHub!
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
