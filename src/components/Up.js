import React, { useState, useEffect } from 'react';
import { BiSolidUpArrow } from "react-icons/bi";
import "../components/Upstyle.css";
import { Link } from "react-scroll";

const Up = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='up'>
      {showButton && (
        <Link to="top" spy={true} smooth={true} duration={800}>
          <button className='buton-up bg-white p-2 text-2xl rounded-full'>
            <BiSolidUpArrow />
          </button>
        </Link>
      )}
    </div>
  );
}

export default Up;
