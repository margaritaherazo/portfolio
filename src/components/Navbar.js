import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [selectedLang, setSelectedLang] = useState('en'); 

  const handleLangSelect = (lang) => {
    setSelectedLang(lang);
  };

  return (
    <Navbar className='navbar'>
      <Navbar.Brand href="#home">
        <img src="/assets/imgs/logo1.png" alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto align-items-center">
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
