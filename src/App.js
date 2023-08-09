import './App.css';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
import Home from './routes/Home';
import {Routes, Route} from "react-router-dom";
import React from 'react';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
    </>
  );
}

export default App;
