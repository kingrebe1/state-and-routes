import React from 'react';
import "../css/greeting.css";

export default function Greeting(props) {
    return (
        <div className='greeting-container'>
            <h1 className='greeting-text'>Hello, {props.name}</h1>
        </div>
    )
}