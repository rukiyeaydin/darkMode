import React from 'react';
import { Parallax } from 'react-parallax';
import "./Heroprojects.css";
import fashion from "../images/fashion.png";
import {BsGithub} from "react-icons/bs";
import Code from "../images/codewebp.webp";
import bodymass from "../images/bodymass.png";
import calculator from "../images/calculator.png";
import digitalclock from "../images/digital_clock.png";
import guessnumber from "../images/guessnumber.png";
import password from "../images/password.png";
import pixelart from "../images/pixelart.png";
import rgb from "../images/Rgb.png";
import temperature from "../images/Temperatureconverter.png";

const Forbeginnershero = () => {
  return (
    <div>
    <Parallax blur={5} bgImage={Code} strength={500} className='advancedhero'> 
        <div className="my-20">
            <div className="prlx2 flex gap-3 flex-wrap m-2">
                <div className="p-3 w-auto bg-gray-100 rounded-sm">
                    <div className="w-auto h-64"><img class="w-64 h-64 rounded-md" src={bodymass}/></div>
                    <div className="">
                        <h3 class="text-lg mt-1 font-bold">Body Mass Index Calculator</h3>
                        <div className="flex justify-between items-center pt-3 pb-2">
                            <a href="#" className="px-4 py-2 bg-blue-600 hover:bg-blue-400 text-center text-sm text-white rounded duration-300">Live Demo</a>
                            <a className="text-black cursor-pointer text-3xl hover:text-blue-600" href='https://github.com/rukiyeaydin/vucut_kitle_indeksi'>
                                <BsGithub/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-3 w-auto bg-gray-100 rounded-sm">
                    <div className="w-auto h-64"><img class="w-64 h-64 rounded-md" src={calculator}/></div>
                    <div className="">
                        <h3 class="text-lg mt-1 font-bold">Calculator</h3>
                        <div className="flex justify-between items-center pt-3 pb-2">
                            <a href="#" className="px-4 py-2 bg-blue-600 hover:bg-blue-400 text-center text-sm text-white rounded duration-300">Live Demo</a>
                            <a className="text-black cursor-pointer text-3xl hover:text-blue-600" href='https://github.com/rukiyeaydin/calculator'>
                                <BsGithub/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-3 w-auto bg-gray-100 rounded-sm">
                    <div className="w-auto h-64"><img class="w-64 h-64 rounded-md" src={digitalclock}/></div>
                    <div className="">
                        <h3 class="text-lg mt-1 font-bold">Digital Clock</h3>
                        <div className="flex justify-between items-center pt-3 pb-2">
                            <a href="#" className="px-4 py-2 bg-blue-600 hover:bg-blue-400 text-center text-sm text-white rounded duration-300">Live Demo</a>
                            <a className="text-black cursor-pointer text-3xl hover:text-blue-600" href='https://github.com/rukiyeaydin/digital_clock'>
                                <BsGithub/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-3 w-auto bg-gray-100 rounded-sm">
                    <div className="w-auto h-64"><img class="w-64 h-64 rounded-md" src={guessnumber}/></div>
                    <div className="">
                        <h3 class="text-lg mt-1 font-bold">Number Guess Game</h3>
                        <div className="flex justify-between items-center pt-3 pb-2">
                            <a href="#" className="px-4 py-2 bg-blue-600 hover:bg-blue-400 text-center text-sm text-white rounded duration-300">Live Demo</a>
                            <a className="text-black cursor-pointer text-3xl hover:text-blue-600" href='https://github.com/rukiyeaydin/guess_number'>
                                <BsGithub/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-3 w-auto bg-gray-100 rounded-sm">
                    <div className="w-auto h-64"><img class="w-64 h-64 rounded-md" src={password}/></div>
                    <div className="">
                        <h3 class="text-lg mt-1 font-bold">Password Strength Checker</h3>
                        <div className="flex justify-between items-center pt-3 pb-2">
                            <a href="#" className="px-4 py-2 bg-blue-600 hover:bg-blue-400 text-center text-sm text-white rounded duration-300">Live Demo</a>
                            <a className="text-black cursor-pointer text-3xl hover:text-blue-600" href='https://github.com/rukiyeaydin/password_strength_check'>
                                <BsGithub/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-3 w-auto bg-gray-100 rounded-sm">
                    <div className="w-auto h-64"><img class="w-64 h-64 rounded-md" src={pixelart}/></div>
                    <div className="">
                        <h3 class="text-lg mt-1 font-bold">Pixel Art</h3>
                        <div className="flex justify-between items-center pt-3 pb-2">
                            <a href="#" className="px-4 py-2 bg-blue-600 hover:bg-blue-400 text-center text-sm text-white rounded duration-300">Live Demo</a>
                            <a className="text-black cursor-pointer text-3xl hover:text-blue-600" href='https://github.com/rukiyeaydin/pixelArt'>
                                <BsGithub/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-3 w-auto bg-gray-100 rounded-sm">
                    <div className="w-auto h-64"><img class="w-64 h-64 rounded-md" src={rgb}/></div>
                    <div className="">
                        <h3 class="text-lg mt-1 font-bold">Background Changer</h3>
                        <div className="flex justify-between items-center pt-3 pb-2">
                            <a href="#" className="px-4 py-2 bg-blue-600 hover:bg-blue-400 text-center text-sm text-white rounded duration-300">Live Demo</a>
                            <a className="text-black cursor-pointer text-3xl hover:text-blue-600" href='https://github.com/rukiyeaydin/rgb_color'>
                                <BsGithub/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-3 w-auto bg-gray-100 rounded-sm">
                    <div className="w-auto h-64"><img class="w-64 h-64 rounded-md" src={temperature}/></div>
                    <div className="">
                        <h3 class="text-lg mt-1 font-bold">Temperature Converter</h3>
                        <div className="flex justify-between items-center pt-3 pb-2">
                            <a href="#" className="px-4 py-2 bg-blue-600 hover:bg-blue-400 text-center text-sm text-white rounded duration-300">Live Demo</a>
                            <a className="text-black cursor-pointer text-3xl hover:text-blue-600" href='https://github.com/rukiyeaydin/temperature_converter'>
                                <BsGithub/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>    
    </Parallax>
    </div>
  )
}

export default Forbeginnershero
