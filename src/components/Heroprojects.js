import React from 'react';
import "./Heroprojects.css";
import { Parallax } from 'react-parallax';
import spc from "../images/spc.webp";
import {AiOutlineArrowDown} from "react-icons/ai";
import {Link} from "react-scroll";

const Heroprojects = () => {
  return (
    <Parallax blur={0} bgImage={spc} strength={900} className='foto '>
      <div className="prlx flex flex-wrap m-2"> 
        <Link to="advanced" spy={true} smooth={true} offset={-70} duration={1000} className="bir w-72 bg-black text-white flex-col items-center content-center text-center font-black p-1 m-2 rounded-md cursor-pointer">
          <p class="p-2 text-xl" id="advanced-projects">Advanced Projects</p>
          <div className="flex items-center justify-center text-2xl"> 
            <AiOutlineArrowDown />
          </div>
        </Link>
        <Link to="forbeginners" spy={true} smooth={true} offset={-70} duration={1800} className="iki w-72 bg-black text-white flex-col items-center content-center text-center font-black p-1 m-2 rounded-md cursor-pointer">
          <p className='p-2 font-bold text-xl'>Projects For Beginners</p>
          <div className="flex items-center justify-center text-2xl">
            <AiOutlineArrowDown />
            <AiOutlineArrowDown />
          </div>
        </Link>
      </div>
    </Parallax>
  )
}

export default Heroprojects
