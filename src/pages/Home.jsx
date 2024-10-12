// src/pages/Home.jsx
import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import BackToTopButton from '../components/BackToTopButton';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function Home() {
    return (
        <div id="home" className="flex flex-col min-h-screen transition-colors duration-300">
            {/* Navbar */}
            <NavBar />

            {/* Hero Section */}
            <section className="flex flex-col justify-center items-center text-center p-16 bg-gradient-to-b from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 transition-colors duration-300">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-regular-heading text-gray-800 dark:text-white mb-6">
                    Frontend Developer
                </h1>

                <p className="text-base sm:text-lg md:text-xl font-regular text-gray-600 dark:text-gold-300 max-w-2xl">
                    "As the northern lights dance in the skies, so should your user experience be on the web."
                </p>

            </section>

            <About />
            <Projects />
            <Contact />
            <Footer />
            <BackToTopButton />
        </div>
    );
}

export default Home;
