import React from "react";
import "./Footer.css";
import { useDarkMode } from '../components/DarkModeContext'; 

const Footer = () => {
  const { navbarBg, color } = useDarkMode();

  const year = new Date().getFullYear();
  return (
    <div className="footer" style={{background: navbarBg}}>
        <p className="name" style={{color: color}}>© Rukiye Aydın {year}</p>
    </div>
  )
}

export default Footer
