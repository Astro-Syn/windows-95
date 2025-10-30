import React, { useState, useEffect } from 'react';
import StartMenu from './start_menu/StartMenu';
import '../footer/Footer.css';
import StartButton from '../footer/startButton/StartButton'
import Time from '../time/Time';

export default function Footer() {
  const [startOpen, setStartOpen] = useState(false);


 useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.start-menu-container') && 
          !e.target.closest('.start-button')) {
        setStartOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
  return (
    <div className='footer-container'>
        <StartMenu isOpen={startOpen}/>
        <StartButton
        onClick={() => setStartOpen(prev => !prev)}
        isActive={startOpen}
        />
        
        <div className='time-container'>
          <Time/>
        </div>
    </div>
  )
}
