/*import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useThemeContext();
    
    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md p-4">
            <div className="flex justify-center items-center space-x-4">
                <Link to="/" className="text-shadow-indigo-100 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</Link>
                <Link to="/posts" className="text-shadow-indigo-100 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blog Posts</Link>
                <Link to="/contact" className="text-shadow-indigo-100 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Write to Us</Link>
                <button
                    onClick={toggleTheme}>
                    {isDarkMode ? '🌞' : '🌙'}
                    
                </button>
            </div>

        </nav>
    );
};

export default Navbar;
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 relative">
      <div className="max-w-5xl mx-auto flex justify-center items-center relative">

        {/* Centered nav links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-indigo-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/posts"
            className="text-indigo-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Blog Posts
          </Link>
          <Link
            to="/contact"
            className="text-indigo-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Write to Us
          </Link>
        </div>

        {/* Theme toggle icon on far right */}
        <button
          onClick={toggleTheme}
          className="absolute right-0 text-2xl"
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
