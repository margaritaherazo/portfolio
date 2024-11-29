import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the gradient position based on scroll position
  const gradientPosition = (scrollPosition / document.body.scrollHeight) * 100;

  return (
    <div
      style={{
        background: 'linear-gradient(45deg, #ff7e5f, #feb47b, #6a11cb, #2575fc)',
        backgroundSize: '400% 400%',
        backgroundPosition: `${gradientPosition}% 50%`,
        transition: 'background-position 0.1s ease-out',
        minHeight: '100vh', // Ensures the body covers at least the full viewport height
      }}
    >
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;