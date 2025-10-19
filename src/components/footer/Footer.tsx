import React from 'react';
import StartMenu from './start_menu/StartMenu';
import '../footer/Footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>
        <StartMenu />
        <button>
            Start
        </button>
    </div>
  )
}
