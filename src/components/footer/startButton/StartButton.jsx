import React from 'react';
import './StartButton.css';

export default function StartButton({ onClick, isActive }) {
  return (
    <>
    <button
    onClick={onClick}
    className={`start-button ${isActive ? 'active' : ''}`}
    >
        <img src='/Images/win95_start_icon.png'/>
        <p>Start</p>
    </button>
    </>
  )
  
}
