import React from 'react';
import { Parallax } from 'react-parallax';
import Code from "../images/codewebp.webp";
import "./Heroprojects.css";
import fashion from "../images/fashion.png";
import {BsGithub} from "react-icons/bs";

const Advancedhero = () => {
  return (
    <Parallax blur={5} bgImage={Code} strength={500} className='advancedhero'> 
        <div className="my-20">
            <div className="prlx2 flex gap-24 flex-wrap m-2">
                <div className="p-3 w-auto bg-gray-100 rounded-2xl">
                    <div className="w-auto h-80"><img class="w-80 h-80 rounded-2xl" src={fashion}/></div>
                    <div className="">
                        <h3 class="text-lg mt-1 font-bold max-w-xs">E-commerce</h3>
                        <div className="flex justify-between items-center pt-3 pb-2">
                            <a href="#" className="px-4 py-2 bg-blue-600 hover:bg-blue-400 text-center text-sm text-white rounded duration-300">Live Demo</a>
                            <a className="text-black cursor-pointer text-3xl hover:text-blue-600" href='https://github.com/rukiyeaydin/e-commerce'>
                                <BsGithub/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </Parallax>
  )
}

export default Advancedhero
