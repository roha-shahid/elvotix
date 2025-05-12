import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="header-wrapper">
      {/* Top Bar */}
      <div className="top-bar bg-transparent text-white">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="contact-information d-none d-md-flex">
            <span className="me-3"><FaEnvelope className="me-2" />needhelp@company.com</span>
            <span><FaPhone className="me-2" />+93 (8934) 9384</span>
          </div>
          <div className="social-icons">
            <a href="#" className="text-white me-2"><FaFacebook /></a>
            <a href="#" className="text-white me-2"><FaInstagram /></a>
            <a href="#" className="text-white"><FaLinkedin /></a>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <Navbar 
        expand="lg"
        className='bg-transparent'
        expanded={expanded}
        onToggle={(expanded) => setExpanded(expanded)}
      >
        <Container className='bg-white py-3 shadow-sm'>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <span className="fs-4 me-2">🏛</span>
            <span className="brand fw-bold">Elvotix</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
              <Nav.Link href="#about" className="mx-2">About</Nav.Link>
              <Nav.Link href="#services" className="mx-2">Services</Nav.Link>
              <Nav.Link href="#gallery" className="mx-2">Gallery</Nav.Link>
              <Nav.Link href="#news" className="mx-2">News</Nav.Link>
              <Nav.Link href="#templates" className="mx-2">Templates</Nav.Link>
              <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
            </Nav>
            <button className="ms-lg-3 mt-3 mt-lg-0 top-btn">Register Now</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
