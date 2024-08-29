import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Work from './Work';
import './Homepage.css';
function Homepage() {
    console.log('Homepage rendered');
    return (
        <div>
            <div className="background">
                <Header />
                <Intro />
            </div>
            <div>
                <Work />
            </div>
        </div>



    )
}

export default Homepage;