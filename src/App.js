import './App.css';
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div>
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
