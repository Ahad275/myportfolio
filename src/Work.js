import React from 'react';
import './Work.css';
import whatidomern from './assets/whatidomern.png';
import whatidosoftware from './assets/whatidosoftware.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

function Work() {
    return (
        <>
            <div className="pagebody">
                <div className="workmain">
                    <h2 className='whatido'>What I Do?</h2>

                    <div className="work1">
                        <div className="imgwhatido">
                            <img src={whatidomern} alt="What I Do" />
                        </div>
                        <div className="workpost1">
                            <h2 className='desg1'>Full Stack Development</h2>
                            <p >⚡ Building responsive website front end using React.</p>
                            <p>⚡ Developing Web applications using HTML, CSS, Bootstrap, JavaScript & React.</p>
                            <p>⚡ Creating application backend in Node, Express, MongoDB & Mongoose.</p>
                        </div>
                    </div>
                    <div className="work2">

                        <div className="imgwhatido2">
                            <img src={whatidosoftware} alt="What I Do" />
                        </div>
                        <div className="workpost2">
                            <h2 className='desg2'>Software Developer</h2>
                            <p >⚡Designed and developed high-performance software applications using C++ Programming Language.</p>
                            <p>⚡ Implemented clean, efficient, and scalable code adhering to industry best practices.</p>
                            <p>⚡ Conducted thorough code reviews to ensure code quality and maintainability.</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Work;
