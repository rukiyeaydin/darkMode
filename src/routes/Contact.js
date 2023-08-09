import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Herocontact from '../components/Herocontact';

const Contact = () => {
  return (
    <div className="contact">
      <Navbar/>
      <Herocontact/>
      <Footer/>
    </div>
  )
}

export default Contact