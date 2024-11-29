import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-scroll'; 


const NavBar = () => {
  const [selectedLang, setSelectedLang] = useState('');

  const handleLangSelect = (lang) => {
    setSelectedLang(lang); 
  };

  return (
    <Navbar>
      <Navbar.Brand href="#home">
        <img src="/assets/imgs/logo1.png" alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <div className="language-selector">
            <Button
              className={`lang-button ${selectedLang === 'pt' ? 'active' : ''}`}
              onClick={() => handleLangSelect('pt')}
            >
              PT
            </Button>
            <Button
              className={`lang-button ${selectedLang === 'sp' ? 'active' : ''}`}
              onClick={() => handleLangSelect('sp')}
            >
              SP
            </Button>
          </div>
          <Nav.Link as={Link} to="contact" smooth={true} duration={500}>
            <Button variant="primary">Contact</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
