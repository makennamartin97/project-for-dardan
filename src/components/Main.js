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
                <Submissions path="project-for-dardan/submissions"/>
                <Education path="project-for-dardan/education"/>
                <Mission path="project-for-dardan/mission"/>
                <TheTeam path="project-for-dardan/1331team"/>
                <NFTCollection path="/project-for-dardan/nftcollection"/>
            </Router>
            <Footer/>
        </div>
    )
}

export default Main