import React from 'react';
import '../nav/Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar-container'>
        {/*My Computer */}
        <a className='nav-link-container'>
            <img src='Images/win95_my_computer.png'/>
            <div className='desktop-text-container'>
                    <p>My Computer</p>
            </div>
            
        </a>
        {/*Network Neighborhood */}
        <a className='nav-link-container'>
            <img src='Images/win95_network.png'/>
            <div className='desktop-text-container'>
                <p>Network Neighborhood</p>
            </div>
            
        </a>
        {/*Internet Explorer */}
        <a className='nav-link-container'>
            <img src='Images/win95_explorer.png'/>
            <div className='desktop-text-container'>
                <p>Internet Explorer</p>
            </div>
            
        </a>
        {/*Recycle Bin */}
        <a className='nav-link-container'>
            <img src='Images/win95_recycle_bin.png'/>
            <div className='desktop-text-container'>
                <p>Recycle Bin</p>
            </div>
            
        </a>
    </div>
  )
}
