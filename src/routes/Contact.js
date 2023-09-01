import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Herocontact from '../components/Herocontact';
import Mode from "../components/Mode";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar/>
      <Herocontact/>
      <Footer/>
      <Mode />
    </div>
  )
}

export default Contact