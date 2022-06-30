import React from 'react'
import './Page.css';
import './Home.css';
import poster from '../Assets/poster.png'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='page home'>
            <div className="poster">
                <img src={poster} alt="poster" />
            </div>
            <div className="para">
                <p>We Welcome you here and invites you to participate in various events organised by MCEian family</p>
            </div>
            <div className="row">
                <div className="contact">
                    <h2>Contact and Help</h2>
                    <div className="links">
                        <ion-icon name="call-outline"></ion-icon>
                        <a href="tel:+91 0000000000">0000000000</a>
                    </div>
                    <div className="links">
                        <ion-icon name="mail-unread-outline"></ion-icon>
                        <a href="mailto:mcefamily@mceian.com">mcefamily@mceian.com</a>
                    </div>
                </div>
                <div className="social-links">
                    <div className="links">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <Link to="https://www.facebook.com">Facebook</Link>
                    </div>
                    <div className="links">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <Link to="https://www.instagram.com">Instagram</Link>
                    </div>
                    <div className="links">
                        <ion-icon name="logo-linkedin"></ion-icon>
                        <Link to="https://www.linkedin.com">Linkedin</Link>
                    </div>
                </div></div>
        </div>
    )
}

export default Home
