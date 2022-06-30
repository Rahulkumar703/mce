import React, { useState, useEffect } from 'react';
import logo from '../Assets/logo.jpg';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isThemeOpen, setIsThemeOpen] = useState(false);
    const [isActiveHamburger, setIsActiveHamburger] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    useEffect(() => {
        window.onresize = () => {
            setIsActiveHamburger(false);
            setIsThemeOpen(false);
        }
    }, [])

    const changeTheme = (e) => {
        const styles = getComputedStyle(e.target);
        const color = styles.getPropertyValue('--color');

        document.documentElement.style.setProperty('--primary', color);
    }
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
            <div className={isActiveHamburger ? "row active" : "row"}>
                <nav className='nav-bar'>
                    <ul className='nav-list'>
                        <li className='nav-items'>
                            <Link className='nav-links' to="/">
                                <ion-icon className="icons" name="home-outline"></ion-icon>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link className='nav-links' to="/program">
                                <ion-icon className="icons" name="stats-chart-outline"></ion-icon>
                                <p>Program</p>
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link className='nav-links' to="/about">
                                <ion-icon className="icons" name="information-circle-outline"></ion-icon>
                                <p>About</p>
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link className='nav-links' to="/gallery">
                                <ion-icon className="icons" name="images-outline"></ion-icon>
                                <p>Gallery</p>
                            </Link>
                        </li>
                        <li className='nav-items'>

                            <Link className='nav-links' id='register' to="/registration">
                                <ion-icon className="icons" name="person-add-outline"></ion-icon>
                                <p>Registration</p>
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
                            <div className="colors" style={{ '--color': '#f4ff30' }} onClick={changeTheme}></div>
                            <div className="colors" style={{ '--color': '#4d14c6' }} onClick={changeTheme}></div>
                            <div className="colors" style={{ '--color': '#ff0a0a' }} onClick={changeTheme}></div>
                            <div className="colors" style={{ '--color': '#28ff10' }} onClick={changeTheme}></div>
                            <div className="colors" style={{ '--color': '#9913b7' }} onClick={changeTheme}></div>
                            <div className="colors" style={{ '--color': '#ae1a2b' }} onClick={changeTheme}></div>
                        </div> : ''}
                    </div>
                </div>
            </div>
            <div className={isActiveHamburger ? "hamburger active" : "hamburger"} onClick={() => { setIsActiveHamburger(!isActiveHamburger) }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header;
