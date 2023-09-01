import React from 'react';
import "./Heroprojects.css";
import { Parallax } from 'react-parallax';
import spc from "../images/spc.webp";
import {AiOutlineArrowDown} from "react-icons/ai";
import {Link} from "react-scroll";
import { useDarkMode } from '../components/DarkModeContext';

const Heroprojects = () => {

  const { navbarBg, color } = useDarkMode();

  return (
    <Parallax blur={0} bgImage={spc} strength={900} className='foto '>
      <div className="prlx flex flex-wrap m-2"> 
        <Link to="advanced" spy={true} smooth={true} offset={-70} duration={1000} style={{background:navbarBg}} className="bir w-72 flex-col items-center content-center text-center font-black p-1 m-2 rounded-md cursor-pointer">
          <p class="p-2 text-xl" id="advanced-projects" style={{color: color}}>Advanced Projects</p>
          <div className="flex items-center justify-center text-2xl"> 
            <AiOutlineArrowDown style={{color: color}}/>
          </div>
        </Link>
        <Link to="forbeginners" spy={true} smooth={true} offset={-70} duration={1800} style={{background:navbarBg}} className="iki w-72 flex-col items-center content-center text-center font-black p-1 m-2 rounded-md cursor-pointer">
          <p className='p-2 font-bold text-xl' style={{color: color}}>Projects For Beginners</p>
          <div className="flex items-center justify-center text-2xl">
            <AiOutlineArrowDown style={{color: color}}/>
            <AiOutlineArrowDown style={{color: color}}/>
          </div>
        </Link>
      </div>
    </Parallax>
  )
}

export default Heroprojects
