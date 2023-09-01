import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projectsall from '../components/Projectsall';
import Up from '../components/Up';
import Mode from "../components/Mode";


const Projects = () => {
  return (
    <div>
      <Navbar />
      <Projectsall />
      <Footer />
      <Up />
      <Mode />
    </div>
  )
}

export default Projects