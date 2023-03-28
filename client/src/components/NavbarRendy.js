import React from 'react'
import {Link} from 'react-router-dom'
import LogoWeb from '../images/rendy_4.JPG'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarRendy = () => {
  return (
    <>
       <Navbar bg="white" expand="lg">
      <Container>
        <Link to="/"><img src={LogoWeb} alt='' className='imgLogo'/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto h5">
            <Link to="/" className="TextNavbar">Home</Link>
            <Link to="/TentangKami" className="TextNavbar">Tentang Kami</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* <nav className="navbar navbar-expand-lg mx-15">
        <div className="container">
          <Link className="navbar-home" to="/">
          <img src={LogoWeb} alt='' className='imgLogo'/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TentangKami">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  )
}

export default NavbarRendy