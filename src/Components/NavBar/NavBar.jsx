import React, { useState } from 'react';
import './NavBar.css'
import MobileNav from './MobileNav/MobileNav';

const NavBar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const ToggelMenu=()=>{
      setOpenMenu(!openMenu)
  }

  return (
    <>
    <MobileNav isOpen={openMenu} ToggelMenu={ToggelMenu}/>
      <header className='nav-header'>
        <nav className='nav-content'>
            <div className="logo">LightUpTech</div>
            <ul>
              <li className='menu-item'>Home</li>
              <li className='menu-item'>Mission</li>
              <li className='menu-item'>Products</li>
              <button onClick={()=>{}} className='contact-btn'>Contact</button>
            </ul>
            <button className="menu-btn" onClick={ToggelMenu}>
              <span className="material-symbols-outlined" style={{fontSize:"1.5rem"}}>
                {openMenu?"close":"menu"}
              </span>
            </button>
        </nav>
      </header>
    </>
  )
}

export default NavBar
