import React from 'react';
import './StartMenu.css';

export default function StartMenu() {
  return (
    <div className='start-menu-container'>
        <div className='windows-95-logo-container'>
            <p>Windows<span>95</span></p>

        </div>
        <div className='windows-menu'>

        </div>
                <div className='top-menu'>
                    <p>Programs</p>
                    <p>Documents</p>
                    <p>Settings</p>
                    <p>Find</p>
                    <p>Help</p>
                    <p>Run</p>
                </div>
                <div className='bottom-menu'>
                    <p>Shut Down</p>
                </div>
    </div>
  )
}
