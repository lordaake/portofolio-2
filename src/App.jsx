// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import Home from './pages/Home';

function App() {
  return (
    <div className="relative">
      <NavBar />
      <main className="mt-16">
        <Home />
      </main>
    </div>
  );
}

export default App;
