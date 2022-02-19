import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Submissions from './Submissions';
import Mission from './Mission';
import Education from './Education';
import TheTeam from './TheTeam';
import NFTCollection from './NFTCollection';
import { Router} from '@reach/router';




const Main = () => {

    return (
        <div className="main">
            <Navbar />
            <Router>
                <Home path="/"/>
                <Submissions path="submissions"/>
                <Education path="education"/>
                <Mission path="mission"/>
                <TheTeam path="team"/>
                <NFTCollection path="nftcollection"/>
            </Router>
            <Footer/>
        </div>
    )
}

export default Main