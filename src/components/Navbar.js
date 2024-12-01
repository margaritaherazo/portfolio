import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavBar = () => {
  useEffect(() => {
    const starContainer = document.querySelector('.falling-stars-container');

    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('falling-star');

      
      const startX = Math.random() * window.innerWidth; 
      const startY = Math.random() * window.innerHeight;

      
      const endX = startX + (Math.random() * 200 - 100); 
      const endY = startY + (Math.random() * 200 - 100);

      
      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;

      
      star.style.setProperty('--start-x', `${startX}px`);
      star.style.setProperty('--start-y', `${startY}px`);
      star.style.setProperty('--end-x', `${endX}px`);
      star.style.setProperty('--end-y', `${endY}px`);

      
      starContainer.appendChild(star);

      
      setTimeout(() => star.remove(), 5000); 
    };

    
    const starInterval = setInterval(createStar, 500);

    
    return () => clearInterval(starInterval);
  }, []);

  const [selectedLang, setSelectedLang] = useState('en');

  const handleLangSelect = (lang) => {
    setSelectedLang(lang);
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="#home">
        <img src="/assets/imgs/logo1.png" alt="Logo" className="logo" />
        <div className="falling-stars-container"></div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto align-items-center justify-content-end w-100r">
          <div className="language-selector">
            <span
              className={`lang ${selectedLang === 'en' ? 'active' : ''}`}
              onClick={() => handleLangSelect('en')}
            >
              EN
            </span>
            <span className="separator">|</span>
            <span
              className={`lang ${selectedLang === 'pt' ? 'active' : ''}`}
              onClick={() => handleLangSelect('pt')}
            >
              PT
            </span>
            <span className="separator">|</span>
            <span
              className={`lang ${selectedLang === 'es' ? 'active' : ''}`}
              onClick={() => handleLangSelect('es')}
            >
              ES
            </span>
          </div>
          <Nav.Link as={Link} to="contact" smooth={true} duration={500}>
            <Button variant="primary" className="ml-3">Contact</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
