import React from "react";
import "./Footer.css";
import {MdLocationOn} from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="left">
        <p className="lg">PORTFOLIO</p>
        <div className="konum">
          <MdLocationOn className="ikon"/>
          <p>Turkiye</p>
        </div>
      </div>

      <div className="middle">
        <p className="about">About my portfolio</p>
        <p>This project is the first project I developed to consolidate all the knowledge I learned after learning React.</p>
      </div>

      <div className="right">
        <p className="name">© Rukiye Aydın {year}</p>
      </div>
    </div>
  )
}

export default Footer
