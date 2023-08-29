import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Up from '../components/Up';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Footer />
        <Up/>
    </div>
  )
}

export default Home