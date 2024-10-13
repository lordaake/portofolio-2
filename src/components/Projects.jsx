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
            className="container-all-projects bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 md:p-10 duration-0 shadow-custom-light-blue border-b-2 border-gray-300 dark:border-gray-600"
            id="container-all-projects"
        >
            {/* Heading */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-regular-heading text-center mb-6 text-gray-800 dark:text-white">
                Stuff I have made
            </h3>

            {/* Top Three Projects as Smaller Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.slice(0, 3).map((project) => (
                    <div
                        key={project.name}
                        className="bg-white dark:bg-gray-700 rounded-md shadow-md p-4 hover:scale-105 transition-transform duration-0"
                    >
                        {/* Project Title */}
                        <h3 className="text-base sm:text-lg md:text-xl font-regular-heading text-gray-800 dark:text-white mb-2">
                            {project.name}
                        </h3>

                        {/* Project Image */}
                        {project.image && (
                            <img
                                src={project.image}
                                alt={`${project.name} screenshot`}
                                className="w-full h-32 sm:h-40 md:h-48 object-cover mb-2 rounded shadow-sm"
                            />
                        )}

                        {/* Project Description */}
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-3">
                            {project.description}
                        </p>

                        {/* Project Links */}
                        <div className="flex space-x-2">
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 dark:text-indigo-400 hover:underline text-sm sm:text-base"
                                >
                                    Live Site
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 dark:text-indigo-400 hover:underline text-sm sm:text-base"
                                >
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Projects Button */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 dark:bg-indigo-600 text-sm sm:text-base md:text-lg text-white dark:text-gray-100 px-5 py-2 rounded-full shadow-md hover:bg-blue-600 dark:hover:bg-indigo-700 transition-colors duration-0 font-semibold"
                >
                    View All Projects
                </button>
            </div>

            {/* Modal with All Projects */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-white dark:bg-gray-900 rounded-lg p-6 sm:p-8 md:p-10 max-w-5xl w-full relative overflow-y-auto max-h-[80vh] animate-fadeIn transition-colors duration-0"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Modal Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-xl sm:text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full"
                            aria-label="Close Modal"
                        >
                            &times;
                        </button>

                        {/* Modal Heading */}
                        <h2 className="text-lg sm:text-xl md:text-2xl font-regular-heading mb-6 text-center text-gray-800 dark:text-white">
                            All Projects
                        </h2>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <li key={project.name} className="bg-white dark:bg-gray-700 rounded-md shadow-md p-4 hover:scale-105 transition-transform duration-0">
                                    {/* Project Title */}
                                    <h3 className="text-base sm:text-lg md:text-xl font-regular-heading text-gray-800 dark:text-white mb-2">
                                        {project.name}
                                    </h3>

                                    {/* Project Image */}
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={`${project.name} screenshot`}
                                            className="w-full h-32 sm:h-40 md:h-48 object-cover mb-2 rounded shadow-sm"
                                        />
                                    )}

                                    {/* Project Description */}
                                    <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-3">
                                        {project.description}
                                    </p>

                                    {/* Project Links */}
                                    <div className="flex space-x-2">
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 dark:text-indigo-400 hover:underline text-sm sm:text-base"
                                            >
                                                Live Site
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 dark:text-indigo-400 hover:underline text-sm sm:text-base"
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



