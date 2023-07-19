import React from 'react';
import '../App.css';
import logo from '../img/icons/site-logo.svg';
import logo2 from '../img/icons/section2-ic.svg';
import logo3 from '../img/icons/section3-ic.svg';
import logo4 from '../img/icons/section4-ic.svg';
import logo5 from '../img/icons/section5-ic.svg';
import logo6 from '../img/icons/section6-ic.svg';

function Nav() {
    return(
        <div className="nav-menu">
            <a href="#header" className="menu-item logo">
                <img src={logo} alt="logo" className="logo-img" />
            </a>
            <a href="#about" className="menu-item">
                <img src={logo2} alt="about" className="item-img" />
            </a>
            <a href="#advantages" className="menu-item">
                <img src={logo3} alt="feature" className="item-img" />
            </a>
            <a href="#photography" className="menu-item">
                <img src={logo4} alt="photographer" className="item-img" />
            </a>
            <a href="#gallery" className="menu-item">
                <img src={logo5} alt="portfolio" className="item-img" />
            </a>
            <a href="#contact" className="menu-item">
                <img src={logo6} alt="contact" className="item-img" />
            </a>
        </div>
    )
}
export default Nav;

