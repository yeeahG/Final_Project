import React, { useState } from 'react'
import Login from './Login';
import './Menu.css'

const Menu = () => {
    const [isOpen, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }

    const bgChange = () => {
        document.getElementById("menu-wrapper").style.background = "#FF6458";
    }
    

  return (
    <div>
        <div className='nav-container'>
            <button id='menu-btn' onClick={()=>toggleMenu()}>menu</button>
            <button id='menu-btn'>
                <a  href='/'>Title</a>
            </button>
            <button id='login-btn'>
                <a href='/user'>User</a>
            </button>
        </div>

        {/* <section>
            <div>
                <div>
                    image
                </div>
            </div>

            <span color="#dbbdf2" className='ImageOverTextBackground__TextContainer-sc-c5kcny-1 ijuMqW'>
                To. my animal To. my animal
            </span>
        </section> */}

        <section className={isOpen ? "show-menu" : "hide-menu"}>
            <div className="Menu__Wrapper-sc-16aybht-1 jTgRTL" id="menu-wrapper" color="#CDBFEC">
                
                <button onClick={()=>toggleMenu()} className="Menu__CloseButton-sc-16aybht-3 hGPXFL" >
                    <svg viewBox="0 0 32 30"fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2.53033" y1="1.46967" x2="30.5303" y2="29.4697" stroke="black" strokeWidth="1.5"></line>
                        <line x1="1.46967" y1="29.4697" x2="29.4697" y2="1.46967" stroke="black" strokeWidth="1.5"></line>
                    </svg>
                </button>

                <div className="Desktop__DesktopDiv-sc-tr3xwc-0 jjDxpP" id="menu-list" onMouseOver={()=>bgChange()}>
                    <div>
                        <a className="Menu__StyledLink-sc-16aybht-4 bSpoLo" id="furniture" href="/">Home</a>
                    </div>
                    <div>
                        <a className="Menu__StyledLink-sc-16aybht-4 bSpoLo" href="/animal">My dog</a>
                    </div>
                    <div>
                        <a className="Menu__StyledLink-sc-16aybht-4 bSpoLo" id="furniture" href="/furniture">Dog Log</a>
                    </div>
                    <div>
                        <a className="Menu__StyledLink-sc-16aybht-4 bSpoLo" id="furniture" href="/furniture">Locate</a>
                    </div>
                    <div>
                        <a className="Menu__StyledLink-sc-16aybht-4 bSpoLo" id="furniture" href="/furniture">About</a>
                    </div>
                </div>

            </div>
        </section>

        <div className="Container__StyledContainer-sc-6s6y4g-0 heASqm">
            <div className="Space__StyledSpace-sc-h4nsl8-0 djzxvY"></div>
            <div className="Border__StyeldBorder-sc-vrrbom-0 klPBwl"></div>
        </div>


    </div>
  )
}

export default Menu