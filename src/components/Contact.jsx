// src/components/Contact.jsx
import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
    return (
        <section className="contact-section bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 p-8 transition-colors duration-300" id="contact-form-section">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-regular-heading mb-6 text-gray-800 dark:text-white">
                    Get in Touch
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-regular text-gray-600 dark:text-gray-300 mb-8">
                    I am available for hire to build professional, responsive websites and web applications. Feel free to contact me via email or connect with me on social platforms.
                </p>


                <div className="flex flex-col items-center" itemScope itemType="https://schema.org/Person">
                    <FaEnvelope className="text-4xl text-blue-600 dark:text-indigo-400 mb-4" />
                    <a
                        href="mailto:tordakelarsson@pm.me"
                        itemProp="email"
                        className="text-2xl font-medium text-blue-500 dark:text-indigo-300 hover:underline transition-colors duration-300"
                    >
                        tordakelarsson@pm.me
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;