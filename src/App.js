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

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const gradientPosition = (scrollPosition / document.body.scrollHeight) * 100;

  return (
    <div
      style={{
        background: 'linear-gradient(45deg, yellow, darkorange, #6a11cb, #2575fc)',
        backgroundSize: '400% 400%',
        backgroundPosition: `${gradientPosition}% 50%`,
        transition: 'background-position 0.2s ease-out',
        minHeight: '100vh', 
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