import React from 'react';
import "../css/nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="main-nav">
            <Link to="/home">Home</Link>
            <Link to="/page1">Page 1</Link>
            <Link to="/welcome">Welcome</Link>
            <Link to="/clock">Clock</Link>
            <Link to="/ClockWithHooks">Clock With Hooks</Link>
            <Link to="/darkmode">Dark Mode</Link>
        </nav>
    )
}