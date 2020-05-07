import React from 'react';
import "../css/nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="mainNav">
            <Link to="/welcome">Welcome</Link>
            <Link to="/home">Home</Link>
            <Link to="/page1">Page 1</Link>
        </nav>
    )
}