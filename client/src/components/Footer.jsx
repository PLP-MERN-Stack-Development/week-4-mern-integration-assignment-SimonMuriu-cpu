import React from 'react';
import { Link } from 'react-router-dom';

const Footer =() => {
    return(
        <footer>
            <div className="bg-indigo-900 dark:bg-gray-800 text-white flex flex-row justify-between p-4">
                <div className="text-gray-600 dark:text-gray-300  flex flex-row gap-90 justify-center" >
                    <p>&copy; 2025 MERN Blog. All rights reserved.</p>
                    <nav className="flex flex-row space-x-10 items-center">
                        <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</Link>
                        <Link to="/posts" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blog Posts</Link>
                        <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Write to Us</Link>
                    </nav>
                </div>
            </div>

        </footer>
    );
};

export default Footer;