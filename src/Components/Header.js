import React from 'react';
import logo from '../Assets/logo.jpg';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
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
                        <Link className='nav-links' to="/">Home</Link>
                    </li>
                    <li className='nav-items'>
                        <Link className='nav-links' to="/program">Program</Link>
                    </li>
                    <li className='nav-items'>
                        <Link className='nav-links' to="/regestration">Regestration</Link>
                    </li>
                    <li className='nav-items'>
                        <Link className='nav-links' to="/gallery">Gallery</Link>
                    </li>
                    <li className='nav-items'>
                        <Link className='nav-links' to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
