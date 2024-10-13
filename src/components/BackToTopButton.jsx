// src/components/BackToTopButton.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

function BackToTopButton() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        visible && (
            <button
                id="backToTop"
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:from-indigo-600 hover:to-blue-500 transition-all duration-0 focus:outline-none focus:ring-4 focus:ring-blue-300 z-50"
                aria-label="Back to Top"
            >
                <ArrowUpIcon className="h-6 w-6" />
            </button>
        )
    );
}

export default BackToTopButton;
