import React from 'react';
import './Intro.css';
import imageintro from './assets/imageintro.png'; // Use relative path to import image
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add the icons to the library
library.add(faGithub, faLinkedin, faXTwitter, faFacebook, faInstagram, faEnvelope);

function Intro() {
    return (
        <div className="pagebody">
            <div className="main">
                <div className="intro">
                    <h3 className='myname'>Mohammad Ahad</h3>
                    <p className="description">
                        A passionate individual who always thrives to work on end-to-end products which develop sustainable and scalable social and technical systems to create impact.
                    </p>
                    <nav>
                        <ul className='SocialMediaButton'>
                            <li>
                                <a href="https://github.com/Ahad275" target="_blank" rel="noopener noreferrer">
                                    <button className='gitbut'>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/mohammad-ahad-633719227/" target="_blank" rel="noopener noreferrer">
                                    <button className='linkedinbut'>
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </button>
                                </a>
                            </li>
                           
                            <li>
                                <a href="mailto:ahadaa9369@gmail.com">
                                    <button className='emailbut'>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/m_ahad275?igsh=MTNxbDhlc3QwcGtxOA==" target="_blank" rel="noopener noreferrer">
                                    <button className='instabut'>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <button className='twitterbut'>
                                        <FontAwesomeIcon icon={faXTwitter} />
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <button className='fbbut'>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </button>
                                </a>
                            </li>


                        </ul>
                    </nav>
                </div>
                <div className="imageintro">
                    <img src={imageintro} alt="Intro" />
                </div>
            </div>
        </div>
    );
}

export default Intro;
