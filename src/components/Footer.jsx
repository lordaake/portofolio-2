// src/components/Footer.jsx
import React from 'react';

function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-center items-center p-6 bg-white dark:bg-gray-800 shadow-inner transition-colors duration-300">
            <p className="text-center md:text-left mb-4 md:mb-0 text-gray-700 dark:text-gray-300">
                © {new Date().getFullYear()} <span itemProp="name">Tord Åke Larsson</span>. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;
