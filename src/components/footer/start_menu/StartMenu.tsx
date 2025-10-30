import './StartMenu.css';

export default function StartMenu({isOpen}) {
  if(!isOpen) return null;

  return (
    <>
    <div className='start-menu-container'>
      <div className='windows-95-logo-container'>
        <a href='#' className='logo-text'>
          <b>Windows</b><span>95</span>
        </a>
      </div>

      <div className='windows-menu-nav'>
        <div className='top-menu'>


          {/*Programs */}
          <div className='menu-item programs'>
          <a href='#'>
            <img src='Images/win95_programs.png'
            className='start-img programs'
            />

            <div className='start-text'>
              <p><u>P</u>rograms</p><span> ▶ </span>
            </div>
            
          </a>

          {/*Programs sub menu */}
          <div className='submenu programs'>
            <a>Accessories</a>
            <a>StartUp</a>
            <a>Microsoft Exchange</a>
            <a>MS-DOS Prompt</a>
            <a>The Microsoft Network</a>
            <a>Windows Explorer</a>
          </div>

          </div>


          <div className='menu-item documents'>
          <a href='#'>
            <img src='Images/win95_documents.png'
            className='start-img documents'
            />
            <div className='start-text'>
              <p><u>D</u>ocuments</p><span> ▶ </span>
            </div>
            
          </a>
          {/*Documents submenu */}
          <div className='submenu documents'>
            <a>README.</a>
          </div>

          </div>

        <div className='menu-item settings'>
          <a href='#'>
            <img src='Images/win95_settings.png'
            className='start-img'
            />
            <div className='start-text'>
              <p><u>S</u>ettings</p><span> ▶ </span>
            </div>
            
          </a>


          {/*Settings submenu */}
           <div className='submenu settings'>
            <a>Control Panel</a>
            <a>Printers</a>
            <a>Taskbar & Start Menu..</a>
            <a>Folder Options</a>
            <a>Active Desktop</a>
            <a>Windows Update</a>
          </div>
          </div>

          
          <div className='menu-item find'>
          <a href='#'>
            <img src='Images/win95_find.png'
            className='start-img'
            />
            <div className='start-text'>
              <p><u>F</u>ind</p><span> ▶ </span>
            </div>
            </a>

            {/*Find submenu */}
            <div>
              <a></a>
            </div>
            </div>

          <a href='#'>
            <img src='Images/win95_help.png'
            className='start-img'
            />
            <div className='start-text'>
              <p><u>H</u>elp</p>
            </div>
            </a>
          <a href='#'>
            <img src='Images/win95_run.png'
            className='start-img'
            />
            <div className='start-text'>
              <p><u>R</u>un...</p>
            </div>
            </a>
        </div>

        <div className='bottom-menu'>
          <a href='#'>
            <img src='Images/win95_shut_down.png'/>
            <div className='start-text'>
              <p>Sh<u>u</u>t Down...</p>
            </div>
            </a>
        </div>
      </div>
      
    </div>
     
    </>
  );
}
