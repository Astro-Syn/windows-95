import React from 'react';
import StartMenu from './start_menu/StartMenu';
import '../footer/Footer.css';
import Time from '../time/Time';

export default function Footer() {
  return (
    <div className='footer-container'>
        <StartMenu />
        <button className='start-btn'>
          <img src='/Images/win95_start_icon.png'/>
            <p>Start</p>
        </button>
        <div className='time-container'>
          <Time/>
        </div>
    </div>
  )
}
