import React from 'react';
import "./Navbar.css";
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
  const[openNavbar, SetOpenNavbar] = useState(false);
  const handleClick = () => SetOpenNavbar(!openNavbar);

  const location = useLocation();

  return (
    <div className={openNavbar ?  "navbar" : "navbar active"}>
        <Link to="/" className='navbar-logo'><h3 className='font-bold'>Rukiye</h3></Link>
        <ul className={openNavbar ?  "navbar-menu active" : "navbar-menu"}>
            <li><Link to="/" className={`navbar-links ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
            <li><Link to="/Projects" className={`navbar-links ${location.pathname === '/Projects' ? 'active' : ''}`}>Projects</Link></li>
            <li><Link to="/Contact" className={`navbar-links ${location.pathname === '/Contact' ? 'active' : ''}`}>Contact</Link></li>
        </ul>
        <div className="acKapaMenu" onClick={handleClick}>
            {openNavbar ? <FaTimes /> : <FaBars />}
        </div>
    </div>
  )
}

export default Navbar