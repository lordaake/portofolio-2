import React from 'react';
import profileImage from '../assets/profile_image.jpg'; // Adjust the path as needed

function About() {
    return (
        <section
            className="profile-container flex flex-col items-center justify-center bg-gradient-to-r from-white/50 via-white to-white dark:from-gray-800/20 dark:via-gray-900 dark:to-indigo-700 shadow-md p-6 sm:p-8 md:p-12 transition-colors duration-0 border-t border-blue-00 dark:border-blue-400 shadow-lg shadow-custom-light-blue"
        >
            {/* Hidden SEO Text */}
            <div className="sr-only">
                Eddsworld Tord
            </div>

            {/* Structured Data for SEO */}
            <script type="application/ld+json">
                {`
                {
                  "@context": "https://schema.org",
                  "@type": "Person",
                  "name": "Tord Larsson",
                  "jobTitle": "Front-end Developer",
                  "url": "https://tordlarsson.com",
                  "sameAs": [
                    "https://www.linkedin.com/in/tord-%C3%A5ke-larsson-6b35b958/",
                    "https://github.com/lordaake",
                    "https://www.facebook.com/lordaake",
                    "https://www.tiktok.com/@lordaake",
                    "https://www.youtube.com/@lordaake"
                  ],
                  "description": "Tord Larsson is a front-end developer specializing in web applications with React, JavaScript, and CSS.",
                  "email": "tordakelarsson@pm.me"
                }
                `}
            </script>

            {/* Profile Image and Background */}
            <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:space-x-8 mb-8 sm:mb-12 w-full max-w-4xl">
                <img
                    src={profileImage}
                    alt="Tord Larsson - Front-end Developer"
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-blue-600 dark:border-gold-400 shadow-lg object-cover"
                />
                <div className="mt-4 sm:mt-0 max-w-lg text-center sm:text-left">
                    <h1 className="font-regular-heading text-2xl sm:text-3xl md:text-4xl text-blue-700 dark:text-gold-200 mb-3">
                        About Tord Larsson
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
                        My name is Tord Åke Larsson, and I am a passionate front-end developer based in Norway, specializing in creating responsive and user-friendly web applications.
                    </p>
                </div>
            </div>

            {/* Technical Skills Section */}
            <div className="w-full max-w-3xl mb-8 sm:mb-12 px-4">
                <h2 className="font-regular-heading text-xl sm:text-2xl md:text-3xl text-blue-700 dark:text-gold-200 mb-4 text-center sm:text-left">
                    Technical Skills
                </h2>
                <div className="flex flex-wrap justify-center sm:justify-start">
                    {["JavaScript", "CSS", "UX/Design", "WordPress", "HTML", "React", "Tailwind"].map((skill) => (
                        <span
                            key={skill}
                            className="bg-blue-100 dark:bg-indigo-600 text-blue-800 dark:text-gold-200 px-3 py-1.5 sm:px-4 sm:py-2 m-2 rounded-full text-sm sm:text-base font-medium"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Social Links with aria-labels */}
            <div className="w-full max-w-3xl mb-8 sm:mb-12 px-4">
                <h2 className="font-regular-heading text-xl sm:text-2xl md:text-3xl text-blue-700 dark:text-gold-200 mb-4 text-center sm:text-left">
                    Connect with Me
                </h2>
                {/* Social Links Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {/* GitHub Link */}
                    <a
                        href="https://github.com/lordaake"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center dark:border-2 border-indigo-600 hover:scale-105 space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-gold-400 transition-colors duration-0 p-4 rounded-md bg-blue-100 dark:bg-gray-900"
                        aria-label="Visit Tord's GitHub Profile"
                    >
                        {/* GitHub Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.092-.647.35-1.089.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.379.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="hidden sm:inline">GitHub</span>
                    </a>

                    {/* LinkedIn Link */}
                    <a
                        href="https://www.linkedin.com/in/tord-%C3%A5ke-larsson-6b35b958/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center dark:border-2 border-indigo-600 hover:scale-105 space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-gold-400 transition-colors duration-0 p-4 rounded-md bg-blue-100 dark:bg-gray-900"
                        aria-label="Visit Tord's LinkedIn Profile"
                    >
                        {/* LinkedIn Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.064-1.867-3.064-1.869 0-2.155 1.46-2.155 2.969v5.707h-3v-10h2.882v1.367h.041c.401-.761 1.379-1.562 2.838-1.562 3.036 0 3.6 2.0 3.6 4.6v5.6z"
                            />
                        </svg>
                        <span className="hidden sm:inline">LinkedIn</span>
                    </a>

                    {/* Facebook Link */}
                    <a
                        href="https://www.facebook.com/profile.php?id=100069593492154" // Replace with your actual Facebook profile URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 dark:border-2 border-indigo-600 hover:scale-105 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-gold-400 transition-colors duration-0 p-4 rounded-md bg-blue-100 dark:bg-gray-900"
                        aria-label="Visit Tord's Facebook Profile"
                    >
                        {/* Facebook Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691V11.07h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.636h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z"
                            />
                        </svg>
                        <span className="hidden sm:inline">Facebook</span>
                    </a>

                    {/* TikTok Link */}
                    <a
                        href="https://www.tiktok.com/@lordaake"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 dark:border-2 border-indigo-600 hover:scale-105 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-gold-400 transition-colors duration-0 p-4 rounded-md bg-blue-100 dark:bg-gray-900"
                        aria-label="Visit Tord's TikTok Profile"
                    >
                        {/* TikTok Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.5 4.46 9.96 9.96 9.96s9.96-4.46 9.96-9.96c0-5.5-4.46-9.96-9.96-9.96zm3.5 14.26c-.43.27-.92.43-1.43.43-1.23 0-2.24-.88-2.44-2.07-.19-1.15.59-2.19 1.72-2.5.21-.07.42-.11.63-.11.82 0 1.58.35 2.16.93.59.58.93 1.35.93 2.17 0 1.3-1.05 2.36-2.35 2.36zm-5.5-.03c-.43.27-.92.43-1.43.43-1.23 0-2.24-.88-2.44-2.07-.19-1.15.59-2.19 1.72-2.5.21-.07.42-.11.63-.11.82 0 1.58.35 2.16.93.59.58.93 1.35.93 2.17 0 1.3-1.05 2.36-2.35 2.36z"
                            />
                        </svg>
                        <span className="hidden sm:inline">TikTok</span>
                    </a>

                    {/* YouTube Link */}
                    <a
                        href="https://www.youtube.com/@lordaake"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 border-2 dark:border-indigo-600 hover:scale-105 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-gold-400 transition-colors duration-0 p-4 rounded-md bg-blue-100 dark:bg-gray-900"
                        aria-label="Visit Tord's YouTube Channel"
                    >
                        {/* YouTube Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                d="M23.498 6.186a2.96 2.96 0 00-2.083-2.095C19.82 3.5 12 3.5 12 3.5s-7.82 0-9.415.591a2.96 2.96 0 00-2.083 2.095A31.376 31.376 0 000 12a31.376 31.376 0 00.502 5.814 2.96 2.96 0 002.083 2.095C4.18 20.5 12 20.5 12 20.5s7.82 0 9.415-.591a2.96 2.96 0 002.083-2.095A31.376 31.376 0 0024 12a31.376 31.376 0 00-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                            />
                        </svg>
                        <span className="hidden sm:inline">YouTube</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
