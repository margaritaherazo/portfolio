import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavBar = () => {
  useEffect(() => {
    const starContainer = document.querySelector('.falling-stars-container');

    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('falling-star');
      
      
      const images = [
        '/assets/imgs/tech1.png',
        '/assets/imgs/tech2.png',
        '/assets/imgs/tech3.png',
        '/assets/imgs/tech4.png',
        '/assets/imgs/tech5.png',
        '/assets/imgs/logo1.png',
        '/assets/imgs/tech6.png',
        '/assets/imgs/tech7.png',
        '/assets/imgs/tech8.png',
        '/assets/imgs/tech9.png'
      ];
    
      
      const randomImage = images[Math.floor(Math.random() * images.length)];
    
      
      const img = document.createElement('img');
      img.src = randomImage; 
      img.alt = 'Falling Star';
      img.style.width = '100%'; 
      img.style.height = '100%'; 
    
      
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
    
      
      star.appendChild(img);
    
      
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
