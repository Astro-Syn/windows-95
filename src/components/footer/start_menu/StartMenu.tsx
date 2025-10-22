import React from 'react';
import './StartMenu.css';

export default function StartMenu() {
  return (
    <div className='start-menu-container'>
      <div className='windows-95-logo-container'>
        <a href='#' className='logo-text'>
          <b>Windows</b><span>95</span>
        </a>
      </div>

      <div className='windows-menu-nav'>
        <div className='top-menu'>
          <a href='#'>
            <img src='Images/win95_programs.png'
            className='start-img'
            />
            <p className='start-text'>Programs <span> ▶ </span></p>
          </a>
          <a href='#'>
            <img src='Images/win95_documents.png'
            className='start-img documents'
            />
            <p className='start-text'>Documents  <span> ▶ </span></p>
          </a>
          <a href='#'>
            <img src='Images/win95_settings.png'
            className='start-img'
            />
            <p className='start-text'>Settings  <span> ▶ </span></p>
          </a>
          <a href='#'>
            <img src='Images/win95_find.png'
            className='start-img'
            />
            <p className='start-text'>Find  <span> ▶ </span></p>
            </a>
          <a href='#'>
            <img src='Images/win95_help.png'
            className='start-img'
            />
            Help
            </a>
          <a href='#'>
            <img src='Images/win95_run.png'
            className='start-img'
            />
            Run
            </a>
        </div>

        <div className='bottom-menu'>
          <a href='#'>
            <img src='Images/win95_shut_down.png'/>
            Shut Down
            </a>
        </div>
      </div>
    </div>
  );
}
