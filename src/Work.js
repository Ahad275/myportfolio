import React, { useEffect } from 'react';
import './Work.css';
import whatidomern from './assets/whatidomern.png';
import whatidosoftware from './assets/whatidosoftware.png';

function Work() {

    useEffect(() => {
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top < window.innerHeight &&
                rect.bottom > 0
            );
        }

        function handleScroll() {
            const whatido = document.querySelector('.whatido');
            const workpost1 = document.querySelector('.workpost1');
            const workpost2 = document.querySelector('.workpost2');
            const imgwhatido = document.querySelector('.imgwhatido');
            const imgwhatido2 = document.querySelector('.imgwhatido2');

            if (isInViewport(whatido)) {
                whatido.classList.add('animate-whatido');
            }
            if (isInViewport(workpost1)) {
                workpost1.classList.add('animate-workpost1');
            }
            if (isInViewport(workpost2)) {
                workpost2.classList.add('animate-workpost2');
            }
            if (isInViewport(imgwhatido)) {
                imgwhatido.classList.add('animate-imgwhatido');
            }
            if (isInViewport(imgwhatido2)) {
                imgwhatido2.classList.add('animate-imgwhatido2');
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the check immediately on component mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="pagebody">
            <div className="workmain">
                <h2 className='whatido'>What I Do?</h2>

                <div className="work1">
                    <div className="imgwhatido">
                        <img src={whatidomern} alt="What I Do" />
                    </div>
                    <div className="workpost1">
                        <h2 className='desg1'>Full Stack Development</h2>
                        <p>⚡ Building responsive website front end using React.</p>
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
                        <p>⚡ Designed and developed high-performance software applications using C++ Programming Language.</p>
                        <p>⚡ Implemented clean, efficient, and scalable code adhering to industry best practices.</p>
                        <p>⚡ Conducted thorough code reviews to ensure code quality and maintainability.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
