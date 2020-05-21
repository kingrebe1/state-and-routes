import React, {useContext} from 'react';
import {Context} from "../../context/Context";
import "../css/DarkMode.css"

export default function DarkMode() {
    const {darkMode, toggleDarkMode} = useContext(Context);

    return <div className={darkMode ? "background dark-mode" : "backgroundnormal-mode"}>
        <h1 className= {darkMode ? "title dark-mode" : "title normal-mode"}>On this page we are demonstrating how we can use context for dark mode.</h1>
        <button className= {darkMode ? "button dark-mode" : "button normal-mode"} onClick={toggleDarkMode}>
            {darkMode ? "Change to light mode" : "Change to dark mode"}
        </button>
    </div>
}

