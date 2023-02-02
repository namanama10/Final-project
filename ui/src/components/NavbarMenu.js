import React from "react";
import {Link} from 'react-router-dom'
import LogoRendy from '../images/rendy_7.JPG'
import { FaTachometerAlt } from 'react-icons/fa';
import { FaAtlas } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';



const NavbarMenu = () => {
  return (
    <>
    <ul className="nav flex-column">
      <li className="nav-header">
      <img className="imgNavbar" src={LogoRendy}/>
      </li>
      <hr className='garisImg'/>
  <li className="nav-item">
    <Link className="nav-link-navbar1"  to="/"><FaTachometerAlt/> Home Pages</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link-navbar" to="/items"><FaShoppingBag></FaShoppingBag> Daftar Item</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link-navbar" to="/brands"><FaAtlas></FaAtlas> Daftar Brand</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link-navbar" to="/users"><FaUser></FaUser> User</Link>
  </li>
</ul>
      {/* <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home Pages
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
                <Link className="nav-link" to="/items">
                  Item
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/brands">
                  Brand
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default NavbarMenu;
