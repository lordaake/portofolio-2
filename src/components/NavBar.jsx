// src/components/NavBar.jsx
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DarkModeToggle from './DarkModeToggle'; // Import the DarkModeToggle component

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigation = [
        { name: 'About', to: 'profile-container' },
        { name: 'Projects', to: 'container-all-projects' },
        { name: 'Contact', to: 'contact-form-section' },
    ];

    return (
        <header className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow dark:shadow-white-bottom z-50 transition-colors duration-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer text-2xl font-bold text-gray-800 dark:text-white"
                        >
                            Tord's Portfolio
                        </ScrollLink>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center">
                        <nav className="flex space-x-8">
                            {navigation.map((item) => (
                                <ScrollLink
                                    key={item.name}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-64} // Adjust if navbar height changes
                                    className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-0"
                                >
                                    {item.name}
                                </ScrollLink>
                            ))}
                        </nav>
                        {/* Dark Mode Toggle */}
                        <div className="ml-6">
                            <DarkModeToggle />
                        </div>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <DarkModeToggle /> {/* Include DarkModeToggle in mobile view */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ml-2"
                            aria-controls="mobile-menu"
                            aria-expanded={menuOpen}
                            aria-label="Toggle navigation menu"
                        >
                            {menuOpen ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <Transition
                show={menuOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-150 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="bg-white dark:bg-gray-800 shadow-md border-t border-gray-200 dark:border-gray-700">
                            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navigation.map((item) => (
                                    <ScrollLink
                                        key={item.name}
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-64} // Adjust if navbar height changes
                                        className="block cursor-pointer text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-0"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.name}
                                    </ScrollLink>
                                ))}
                            </nav>
                        </div>
                    </div>
                )}
            </Transition>

        </header>
    );
}

export default NavBar;