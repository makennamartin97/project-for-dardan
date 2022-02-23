import React from 'react';
import { Link} from '@reach/router';
import video from '../images/croppedvideo.mp4';
import nft from '../images/nft.jpeg';
import phantom from '../images/phantom.jpg';
import la from '../images/la.jpg';
import studio from '../images/studio.jpg';
import FadeInSection from "./FadeInSection";
import logo from '../images/logo.png';
import musicnote from '../images/musical-note.png';
import data from "./Data.json";
import Count from './Count';
import music from '../images/musical-note.png';

const Home = () => {
    


    return (
        
            
        <div className="home" >
            <h2><span>NFT</span> Music Partnership</h2>
            <video width="1024" className="video" autoPlay controls>
                <source  src={video} type="video/mp4"></source>
            </video>
            
            <div className='full-row-section half-mobile-section'>
                <FadeInSection>
                    <h1>We are a <span>Web3</span> oriented music group looking to offer an <span>NFT music deal.</span></h1>
                </FadeInSection>
                <img src={logo} alt="logo"></img>
            </div>
            <div className='part2'>
                <FadeInSection>
                    <h3> We are holding a competition where we are accepting <span>5,000</span> song submissions.</h3>
                    <h4>The best song submission wins a <span>$20,000</span> backing which includes a <span>1,000 NFT music collection release</span> where the artist keeps <span>95%</span> of everything made, and owns <span>100%</span> of their IP/Masters. They also receive marketing, song production, a music video and NFT development.</h4>

                </FadeInSection >
            </div>
            <div className='col-section'>
                <FadeInSection>
                <h4>The winner will receive all of the following:</h4>
                    <ul>
                   
                        <li><img src={music} className="music" alt="music"/><span>$20,000</span> Backing Towards The Artist NFT Music Release</li>
                        <li><img src={music} className="music" alt="music"/><span>1,000 Collection</span> NFT Music Release</li>
                        <li><img src={music} className="music" alt="music"/><span>Studio Time</span></li>
                        <li><img src={music} className="music" alt="music"/><span>Professional Music Video</span></li>
                        <li><img src={music} className="music" alt="music"/><span>Music Production</span></li>
                        <li><img src={music} className="music" alt="music"/><span>Artist Development</span></li>
                        <li><img src={music} className="music" alt="music"/><span>Web3 Music Education</span> Towards Artists Future Success</li>
                        <li><img src={music} className="music" alt="music"/><span>FREE NFT</span> From The 1331 Recordz NFT Collection</li>
                
                    </ul>
                    </FadeInSection>
                
            </div>
            <div className='row'>
                <div id="phantomimg">
                    <img src={phantom} alt="phantom"/>
                </div>
                <div id="abtphantom">
                    <FadeInSection>
                    <h3>Every song submission is FREE but requires a Phantom Wallet address. By making this a requirement, 5,000 new users will have successfully set up crypto wallets. Artists who make a submission will be one step closer to being able to create or purchase  NFTs. This ultimately will increase the amount of web3 users and help grow the ecosystem.</h3>
                    </FadeInSection>
                </div>
                
            </div>
            <div className='row part5'>
                <div className='words'>
                <FadeInSection>
                    <h3>We are accepting 5,000 song submissions, 1 in every 500 submissions will win a FREE NFT and be placed in our contestant pool size of 10 artist who have the chance at a NFT Music Partnership with 1331 Recordz.</h3>
                </FadeInSection>
                </div>
                <div className='studio'>
                    <img src={studio} alt="studio"/>
                </div>
            </div>
            <div className='row part5'>
                <div className='la'>
                    <img src={la} alt="la"/>
                </div>
                <div className='words'>
                <FadeInSection>
                    <h3>The 10 contestants will then be flown out to the 1331 Recordz studio where they will be featured in a 5 video YouTube series, where the web3/NFT community votes on the winner. (All 10 Of The Contestants Travel Expenses Will Be Covered By 1331 Recordz.)</h3>
                </FadeInSection>
                </div>
            </div>
            <Link to='/submissions'><button className='enterbtn'>Submit Songs Here to Enter</button></Link> 


           
 
        </div>
       
    )
}

export default Home;