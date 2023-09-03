import React from 'react';
import "./Heroprojects.css";
import { Parallax } from 'react-parallax';
import {BsGithub} from "react-icons/bs";
import bodymass from "../images/bodymass.png";
import calculator from "../images/calculator.png";
import digitalclock from "../images/digital_clock.png";
import guessnumber from "../images/guessnumber.png";
import password from "../images/password.png";
import pixelart from "../images/pixelart.png";
import rgb from "../images/Rgb.png";
import temperature from "../images/Temperatureconverter.png";
import weather from "../images/weather.png";
import todo from "../images/todo.png";
import dictionary from "../images/dictionary.png";
import crud from "../images/crud.png";
import { useDarkMode } from '../components/DarkModeContext'; 

const Forbeginnershero = () => {
    const { linear } = useDarkMode();

    // prlx2 flex gap-12 flex-wrap m-2

  return (
    <div>
        <div className="my-4 flex flex-col items-center content-center">
        <p className='text-3xl font-bold my-20' id='forbeginners'>FOR BEGINNERS</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 flex-wrap mx-6">
                <a className="" href='https://github.com/rukiyeaydin/vucut_kitle_indeksi'>
                    <div className="p-3 w-auto bg-gray-100 rounded-2xl flex flex-col items-center content-center">
                        <div className="w-auto h-36 sm:h-52"><img class="w-36 h-36 sm:w-52 sm:h-52 rounded-2xl" src={bodymass}/></div>
                        <div className="flex flex-col items-center content-center text-center">
                            <h3 class="text-sm sm:text-lg mt-1 font-bold max-w-xs w-36 sm:w-52 h-16">Body Mass Index Calculator</h3>
                        </div>
                    </div>
                </a>
                <a className="" href='https://github.com/rukiyeaydin/calculator'>
                    <div className="p-3 w-auto bg-gray-100 rounded-2xl w-62 flex flex-col items-center content-center">
                        <div className="w-auto h-36 sm:h-52"><img class="w-36 h-36 sm:w-52 sm:h-52 rounded-2xl" src={calculator}/></div>
                        <div className="flex flex-col items-center content-center text-center">
                            <h3 class="text-sm sm:text-lg mt-1 font-bold max-w-xs w-36 sm:w-52 h-16">Calculator</h3>
                        </div>
                    </div>
                </a>
                <a className="" href='https://github.com/rukiyeaydin/digital_clock'>
                    <div className="p-3 w-auto bg-gray-100 rounded-2xl w-62 flex flex-col items-center content-center">
                        <div className="w-auto h-36 sm:h-52"><img class="w-36 h-36 sm:w-52 sm:h-52 rounded-2xl" src={digitalclock}/></div>
                        <div className="flex flex-col items-center content-center text-center">
                            <h3 class="text-sm sm:text-lg mt-1 font-bold max-w-xs w-36 sm:w-52 h-16">Digital Clock</h3>
                        </div>
                    </div>
                </a>
                <a className="" href='https://github.com/rukiyeaydin/guess_number'>
                    <div className="p-3 w-auto bg-gray-100 rounded-2xl w-62 flex flex-col items-center content-center">
                        <div className="w-auto h-36 sm:h-52"><img class="w-36 h-36 sm:w-52 sm:h-52 rounded-2xl" src={guessnumber}/></div>
                        <div className="flex flex-col items-center content-center text-center">
                            <h3 class="text-sm sm:text-lg mt-1 font-bold max-w-xs w-36 sm:w-52 h-16">Number Guess Game</h3>
                        </div>
                    </div>
                </a>
                <a className="" href='https://github.com/rukiyeaydin/password_strength_check'>
                    <div className="p-3 w-auto bg-gray-100 rounded-2xl w-62 flex flex-col items-center content-center">
                        <div className="w-auto h-36 sm:h-52"><img class="w-36 h-36 sm:w-52 sm:h-52 rounded-2xl" src={password}/></div>
                        <div className="flex flex-col items-center content-center text-center">
                            <h3 class="text-sm sm:text-lg mt-1 font-bold max-w-xs w-36 sm:w-52 h-16">Password Strength Checker</h3>
                        </div>
                    </div>
                </a>
                <a className="" href='https://github.com/rukiyeaydin/pixelArt'>
                    <div className="p-3 w-auto bg-gray-100 rounded-2xl w-62 flex flex-col items-center content-center">
                        <div className="w-auto h-36 sm:h-52"><img class="w-36 h-36 sm:w-52 sm:h-52 rounded-2xl" src={pixelart}/></div>
                        <div className="flex flex-col items-center content-center text-center">
                            <h3 class="text-sm sm:text-lg mt-1 font-bold max-w-xs w-36 sm:w-52 h-16">Pixel Art</h3>
                        </div>
                    </div>
                </a>
                <a className="" href='https://github.com/rukiyeaydin/rgb_color'>
                    <div className="p-3 w-auto bg-gray-100 rounded-2xl w-62 flex flex-col items-center content-center">
                        <div className="w-auto h-36 sm:h-52"><img class="w-36 h-36 sm:w-52 sm:h-52 rounded-2xl" src={rgb}/></div>
                        <div className="flex flex-col items-center content-center text-center">
                            <h3 class="text-sm sm:text-lg mt-1 font-bold max-w-xs w-36 sm:w-52 h-16">Background Color Changer</h3>
                        </div>
                    </div>
                </a>
                <a className="" href='https://github.com/rukiyeaydin/temperature_converter'>
                    <div className="p-3 w-auto bg-gray-100 rounded-2xl w-62 flex flex-col items-center content-center">
                        <div className="w-auto h-36 sm:h-52"><img class="w-36 h-36 sm:w-52 sm:h-52 rounded-2xl" src={temperature}/></div>
                        <div className="flex flex-col items-center content-center text-center">
                            <h3 class="text-sm sm:text-lg mt-1 font-bold max-w-xs w-36 sm:w-52 h-16">Temperature Converter</h3>
                        </div>
                    </div>
                </a>
                <a className="" href='https://github.com/rukiyeaydin/weather-app-with-react'>
                    <div className="p-3 w-auto bg-gray-100 rounded-2xl w-62 flex flex-col items-center content-center">
                        <div className="w-auto h-36 sm:h-52"><img class="w-36 h-36 sm:w-52 sm:h-52 rounded-2xl" src={weather}/></div>
                        <div className="flex flex-col items-center content-center text-center">
                            <h3 class="text-sm sm:text-lg mt-1 font-bold max-w-xs w-36 sm:w-52 h-16">Weather App with React</h3>
                        </div>
                    </div>
                </a>
                <a className="" href='https://github.com/rukiyeaydin/todo-APP'>
                    <div className="p-3 w-auto bg-gray-100 rounded-2xl w-62 flex flex-col items-center content-center">
                        <div className="w-auto h-36 sm:h-52"><img class="w-36 h-36 sm:w-52 sm:h-52 rounded-2xl" src={todo}/></div>
                        <div className="flex flex-col items-center content-center text-center">
                            <h3 class="text-sm sm:text-lg mt-1 font-bold max-w-xs w-36 sm:w-52 h-16">ToDo App with React</h3>
                        </div>
                    </div>
                </a>
                <a className="" href='https://github.com/rukiyeaydin/Dictionary-App'>
                    <div className="p-3 w-auto bg-gray-100 rounded-2xl w-62 flex flex-col items-center content-center">
                        <div className="w-auto h-36 sm:h-52"><img class="w-36 h-36 sm:w-52 sm:h-52 rounded-2xl" src={dictionary}/></div>
                        <div className="flex flex-col items-center content-center text-center">
                            <h3 class="text-sm sm:text-lg mt-1 font-bold max-w-xs w-36 sm:w-52 h-16">Dictionary App</h3>
                        </div>
                    </div>
                </a>
                <a className="" href='https://github.com/rukiyeaydin/Crud'>
                    <div className="p-3 w-auto bg-gray-100 rounded-2xl w-62 flex flex-col items-center content-center">
                        <div className="w-auto h-36 sm:h-52"><img class="w-36 h-36 sm:w-52 sm:h-52 rounded-2xl" src={crud}/></div>
                        <div className="flex flex-col items-center content-center text-center">
                            <h3 class="text-sm sm:text-lg mt-1 font-bold max-w-xs w-36 sm:w-52 h-16">Crud App</h3>
                        </div>
                    </div>
                </a>

            </div>
        </div>    
    </div>
  )
}

export default Forbeginnershero
