import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const storedMode = localStorage.getItem('theme');
        if (storedMode === 'dark') {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle Dark Mode"
        >
            {isDark ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
        </button>
    );
}

export default DarkModeToggle;
