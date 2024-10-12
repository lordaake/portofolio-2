// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import holidazeImage from '../assets/images/holidaze-screenshot.png';
import ecommerceStoreImage from '../assets/images/ecommerce-store-screenshot.png';
import auctionHouseImage from '../assets/images/auction-house-screenshot.png';


function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects = [
        {
            name: 'Holidaze - Project Exam 2',
            description: 'A hotel booking website where users can search for venues, book rooms, and manage their bookings.',
            github: 'https://github.com/lordaake/holidaze',
            live: 'https://holidaze-lordaake-pe.netlify.app/',
            image: holidazeImage
        },
        {
            name: 'E-commerce Store - JavaScript Frameworks CA',
            description: 'An e-commerce site built with JavaScript frameworks, allowing users to browse and purchase products.',
            github: 'https://github.com/lordaake/lord-ecom-store',
            live: 'https://lord-ecom-store.netlify.app/',
            image: ecommerceStoreImage
        },
        {
            name: 'Auction House - Semester Project 2',
            description: 'An auction website where users can bid on items and post their own listings for others to bid on.',
            github: 'https://github.com/lordaake/Semester-Project-2',
            live: 'https://auction-house-sp2.netlify.app/',
            image: auctionHouseImage
        },
        {
            name: 'Mango Quest',
            description: '',
            github: 'https://github.com/Noroff-FEU-Assignments/project-exam-1-lordaake',
            live: 'https://mango-quest.netlify.app/',
        },
        {
            name: 'Community Science Museum - New Version',
            description: 'I remade my second website ever. You can check out if you like the new or old one better. :)',
            github: 'https://github.com/lordaake/community-museum-v2',
            live: 'https://community-museum-v2.netlify.app/',
        },
        {
            name: 'Community Science Museum - Old version',
            description: 'This is my second website ever. Version 1.',
            github: 'https://github.com/lordaake/Semester-Project-Finished',
            live: 'https://community-museum87.netlify.app/',
        },
        {
            name: 'Gamehub',
            description: '',
            github: 'https://github.com/lordaake/Gamehub-website',
            live: 'https://gamehub-87.netlify.app/',
        },
        {
            name: 'Portfolio 1',
            github: 'https://github.com/lordaake/portfolio1',
            live: 'https://portofolio1-tordlarsson.netlify.app/',
        },
        {
            name: 'Travel Journal',
            github: 'https://github.com/lordaake/travel-journal',
            live: 'https://travel-journal11.netlify.app/',
        },
        {
            name: 'Counter',
            github: 'https://github.com/lordaake/counter',
            live: 'https://counter126778.netlify.app/',
        },
        {
            name: 'Password Generator',
            github: 'https://github.com/lordaake/password-generator',
            live: 'https://password-generator-98763.netlify.app/',
        },
        {
            name: 'Birthday List',
            github: 'https://github.com/lordaake/birthday-list',
            live: 'https://birthday-list11111.netlify.app/',
        },
        {
            name: 'Weather App',
            github: 'https://github.com/lordaake/weather-app',
            live: 'https://weather-bodo.netlify.app/',
        },
        {
            name: 'Social Media Site',
            github: 'https://github.com/lordaake/social-media-site',
            live: 'https://socia-media-site.netlify.app/',
        },
        {
            name: 'Radhe Food',
            github: 'https://github.com/lordaake/radhe-food',
            live: 'https://illustrious-centaur-da769c.netlify.app/',
        },
        {
            name: 'Digital Business Card',
            github: 'https://github.com/lordaake/digital-business-card',
            live: 'https://digital-business-card-tord-larsson.netlify.app/',
        },
        {
            name: 'Weather Bodo',
            github: 'https://github.com/lordaake/weather-bodo',
            live: 'https://weather-bodo.netlify.app/',
        },
        {
            name: 'Birthday List 11111',
            github: 'https://github.com/lordaake/birthday-list11111',
            live: 'https://birthday-list11111.netlify.app/',
        },
        {
            name: 'Password Generator 98763',
            github: 'https://github.com/lordaake/password-generator-98763',
            live: 'https://password-generator-98763.netlify.app/',
        },
        {
            name: 'Counter 126778',
            github: 'https://github.com/lordaake/counter126778',
            live: 'https://counter126778.netlify.app/',
        }
    ];

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isModalOpen]);

    return (
        <section
            className="container-all-projects bg-gray-50 dark:bg-gray-900 p-8 duration-300 shadow-custom-light-blue"
            id="container-all-projects"
        >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-regular-heading text-center mb-8 text-gray-800 dark:text-white">
                Stuff I have made
            </h3>
            <div className="flex justify-center">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 dark:bg-indigo-600 text-base sm:text-lg md:text-xl text-white dark:text-gray-100 px-6 py-3 rounded-full shadow-md hover:bg-blue-600 dark:hover:bg-indigo-700 transition-colors duration-300 font-semibold"
                >
                    View All Projects
                </button>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-white dark:bg-gray-900 rounded-lg p-8 max-w-4xl w-full relative overflow-y-auto max-h-[80vh] animate-fadeIn transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full"
                            aria-label="Close Modal"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular-heading mb-8 text-center text-gray-800 dark:text-white">
                            All Projects
                        </h2>
                        <ul className="space-y-6">
                            {projects.map((project) => (
                                <li key={project.name} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-regular-heading text-gray-800 dark:text-white mb-4">
                                        {project.name}
                                    </h3>
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={`${project.name} screenshot`}
                                            className="w-full max-w-sm h-auto mb-4 rounded shadow-lg"
                                        />
                                    )}
                                    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex space-x-4 mt-2">
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-base sm:text-lg md:text-xl text-blue-500 dark:text-indigo-400 hover:underline transition-colors duration-300"
                                            >
                                                Live Site
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-base sm:text-lg md:text-xl text-blue-500 dark:text-indigo-400 hover:underline transition-colors duration-300"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;

