import React, { useState, useEffect } from 'react';
import logo from '../Assets/logo.jpg';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
    const [isThemeOpen, setIsThemeOpen] = useState(false);
    const [isActiveHamburger, setIsActiveHamburger] = useState(false);
    const [activeTab, setActiveTab] = useState(window.location.pathname);


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

    const changeActiveTab = (e) => {
        setActiveTab(e.target.getAttribute('href'))
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
                            <Link className={activeTab !== '/' ? 'nav-links' : 'nav-links active'} onClick={changeActiveTab} to="/" >
                                <ion-icon className="icons" name="home-outline"></ion-icon>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link className={activeTab !== '/program' ? 'nav-links' : 'nav-links active'} onClick={changeActiveTab} to="/program">
                                <ion-icon className="icons" name="stats-chart-outline"></ion-icon>
                                <p>Program</p>
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link className={activeTab !== '/about' ? 'nav-links' : 'nav-links active'} onClick={changeActiveTab} to="/about">
                                <ion-icon className="icons" name="information-circle-outline"></ion-icon>
                                <p>About</p>
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link className={activeTab !== '/gallery' ? 'nav-links' : 'nav-links active'} onClick={changeActiveTab} to="/gallery">
                                <ion-icon className="icons" name="images-outline"></ion-icon>
                                <p>Gallery</p>
                            </Link>
                        </li>
                        <li className='nav-items'>

                            <Link className={activeTab !== '/registration' ? 'nav-links' : 'nav-links active'} id='register' onClick={changeActiveTab} to="/registration">
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
                            <div className="colors" style={{ '--color': '#64FFC4' }} onClick={changeTheme}></div>
                            <div className="colors" style={{ '--color': '#ff7e7e' }} onClick={changeTheme}></div>
                            <div className="colors" style={{ '--color': '#f057ba' }} onClick={changeTheme}></div>
                            <div className="colors" style={{ '--color': '#b06aff' }} onClick={changeTheme}></div>
                            <div className="colors" style={{ '--color': '#5e60fb' }} onClick={changeTheme}></div>
                            <div className="colors" style={{ '--color': '#5efbf9' }} onClick={changeTheme}></div>
                            <div className="colors" style={{ '--color': '#88fb5e' }} onClick={changeTheme}></div>
                            <div className="colors" style={{ '--color': '#fbf55e' }} onClick={changeTheme}></div>
                            <div className="colors" style={{ '--color': '#fbaf5e' }} onClick={changeTheme}></div>
                        </div> : ''}
                    </div>
                </div>
            </div>
            <div className={isActiveHamburger ? "hamburger active" : "hamburger"} onClick={() => { setIsActiveHamburger(!isActiveHamburger); setIsThemeOpen(false) }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header;
