import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Up from '../components/Up';
import Mode from '../components/Mode';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Footer />
        <Up/>
        <Mode />
    </div>
  )
}

export default Home