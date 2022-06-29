import React, { useState, useEffect } from 'react';
import logo from '../Assets/logo.jpg';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isThemeOpen, setIsThemeOpen] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.remove('dark');
        }
    })

    return (
        <header className='header'>
            <div className="page-heading">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <Link className='heading-link' to="/">
                    <h1 className='heading-text'>Motihari College of Engineering</h1>
                </Link>
            </div>
            <nav className='nav-bar'>
                <ul className='nav-list'>
                    <li className='nav-items'>
                        <Link className='nav-links' to="/">
                            <ion-icon className="icons" name="home-outline"></ion-icon>Home
                        </Link>
                    </li>
                    <li className='nav-items'>
                        <Link className='nav-links' to="/program">
                            <ion-icon className="icons" name="stats-chart-outline"></ion-icon>Program
                        </Link>
                    </li>
                    <li className='nav-items'>
                        <Link className='nav-links' to="/about">
                            <ion-icon className="icons" name="information-circle-outline"></ion-icon>About
                        </Link>
                    </li>
                    <li className='nav-items'>
                        <Link className='nav-links' to="/gallery">
                            <ion-icon className="icons" name="images-outline"></ion-icon>Gallery
                        </Link>
                    </li>
                    <li className='nav-items'>

                        <Link className='nav-links' id='register' to="/registration">
                            <ion-icon className="icons" name="person-add-outline"></ion-icon>Registration
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="theme-menu">
                <div className="dark-mode-toggle" onClick={() => { setIsDarkMode(!isDarkMode) }} >
                    {isDarkMode ? <ion-icon name="sunny-outline"></ion-icon> : <ion-icon className="icons" name="moon-outline"></ion-icon>}
                </div>
                <div className="themecolor" onClick={() => { setIsThemeOpen(!isThemeOpen) }}>
                    <ion-icon name="color-palette-outline"></ion-icon>
                    {isThemeOpen ? <div className="color-palate">
                        <div className="color" data-color='#eaeaea'></div>
                        <div className="color" data-color='#eaeaea'></div>
                        <div className="color" data-color='#eaeaea'></div>
                    </div> : ''}
                </div>
            </div>
        </header>
    )
}

export default Header;
