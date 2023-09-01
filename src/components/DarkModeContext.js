import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export function useDarkMode() {
    return useContext(DarkModeContext);
}

export function DarkModeProvider({ children }) {
    const [isDarkMode, setDarkMode] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState('black'); // Initial color
    const [color, setColor] = useState("white"); // initial color
    const [text, setText] = useState("white"); // initial text color
    const [githubColor, setGithubColor] = useState("white");
    const [navbarBg, setNavbarBg] = useState("#37474F");
    const [linear, setLinear] = useState("linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);");

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
        setBackgroundColor(prevColor => prevColor === 'black' ? 'white' : 'black'); // Toggle between black and white
        setColor(prevColor => prevColor === 'white' ? '#185a9d' : 'white');
        setText(prevColor => prevColor === 'white' ? 'black' : 'white');
        setGithubColor(prevColor => prevColor === "white" ? "#185a9d" : "white");
        setNavbarBg(prevColor => prevColor === "#37474F" ? "#EEEEEE" : "#37474F" );
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, backgroundColor, color, text, githubColor, navbarBg }}>
            <div className={isDarkMode ? "dark-mode" : ""} style={{ background: backgroundColor }}>
                {children}
            </div>
        </DarkModeContext.Provider>
    );
}
