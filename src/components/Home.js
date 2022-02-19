import React from 'react';
import video from '../images/croppedvideo.mp4';
import nft from '../images/nft.jpeg';
import FadeInSection from "./FadeInSection";
import logo from '../images/logo.png';
import musicnote from '../images/musical-note.png';
import data from "./Data.json";
import Count from './Count';

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
            <div className='row-section'>
                <FadeInSection className="col-1">
                    <h4> We are holding a competition where we are accepting <span>5,000</span> song submissions.</h4>
                    <h4>The best song submission wins a <span>$20,000</span> backing</h4>
                </FadeInSection>
                <div className="col-2">
                </div>
            </div>
            <div className='row-section'>
                <div className="col-2">
                    
                </div>
                <FadeInSection className="col-1">
                    <h4> which includes a <span>1,000 NFT music collection release</span> where the artist keeps <span>95%</span> of everything made, and owns <span>100%</span> of their IP/Masters. They also receive marketing, song production, a music video and NFT development.</h4>

                </FadeInSection >
            </div>
            <div className='col-section'>
                <h4>The winner will receive all of the following:</h4>
                <FadeInSection>
                    <ul>
                        <li><span>$20k</span> Backing Towards The Artist NFT Music Release</li>
                        <li><span>1,000 Collection</span> NFT Music Release (Artist keeps 95% of all proceeds made & own 100% of their IP/Masters)</li>
                        <li><span>Studio Time</span></li>
                        <li>Professional <span>Music Video</span></li>
                        <li><span>Music Production</span></li>
                        <li><span>Artist Development</span></li>
                        <li><span>Web3 Music Education</span> Towards Artists Future Success</li>
                        <li><span>FREE NFT</span> From The 1331 Recordz NFT Collection</li>
                    </ul>
                </FadeInSection>
            </div>


           
 
        </div>
       
    )
}

export default Home;