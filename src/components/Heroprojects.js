import React from 'react';
import "./Heroprojects.css";
import { Parallax } from 'react-parallax';
import Code from "../images/codewebp.webp";
import {AiOutlineArrowDown} from "react-icons/ai";
import {Link} from "react-scroll";

const Heroprojects = () => {
  return (
    <Parallax blur={5} bgImage={Code} strength={500} className='foto '>
      <div className="prlx flex flex-wrap m-2"> 
        <Link to="advanced" spy={true} smooth={true} offset={-70} duration={1000} className="bir w-72 bg-white flex-col items-center content-center text-center font-black p-1 mr-2 rounded-md cursor-pointer">
          <p className='p-2 text-xl'>Advanced Projects</p>
          <div className="flex items-center justify-center text-2xl"> 
            <AiOutlineArrowDown />
          </div>
        </Link>
        <Link to="forbeginners" spy={true} smooth={true} offset={-70} duration={1800} className="iki w-72 bg-white flex-col items-center content-center text-center font-black p-1 rounded-md cursor-pointer">
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
