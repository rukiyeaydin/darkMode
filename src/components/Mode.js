import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useDarkMode } from '../components/DarkModeContext'; 
import "../components/Modestyle.css";

const Mode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <DarkModeSwitch  style={{ marginBottom: '2rem' }} sunColor='white' moonColor='white' checked={isDarkMode} onChange={toggleDarkMode} size={40} className='mode'/>
    </div>
  );
};

export default Mode;
