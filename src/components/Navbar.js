import React from 'react';
import "./Navbar.css";
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import { useDarkMode } from '../components/DarkModeContext'; 

const Navbar = () => {
  const[openNavbar, SetOpenNavbar] = useState(false);
  const handleClick = () => SetOpenNavbar(!openNavbar);

  const location = useLocation();

  const { navbarBg, color } = useDarkMode();

  return (
    <div className={openNavbar ?  "navbar" : "navbar active"} id='top' style={{background:navbarBg}}>
        <Link to="/" className='navbar-logo'><h3 className='font-bold' style={{color:color}}>Rukiye</h3></Link>
        <ul className={openNavbar ?  "navbar-menu active" : "navbar-menu"} style={{background:navbarBg}}>
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