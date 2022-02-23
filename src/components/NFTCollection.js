import React,{useEffect} from 'react';
import gif from '../images/1331.gif';
import team from '../images/team.png';
import paper from '../images/paper.png';
import community from '../images/community.png';
import FadeInSection from "./FadeInSection";

//showing account number and balance once connected to metamask
const NFTCollection = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
},[])
  return (
    <div className='section nft'>
        <div className="row">
          <div id="collection">
            <img src={gif} alt="nfts" className='gif'/>
            {/* or MINT if connected */}
            <button className='btn3'>CONNECT WALLET</button>
          </div>
          <div id="desc">
            <FadeInSection>
              <h2>The 1331 Recordz NFT Collection is a <span className='blue'>5,500 generative drop</span> of a music artist with a ski-mask.</h2>
              <h3>The NFT has a ski mask to represent <span className='orange'>anonymity</span>, <span className='red'>financial sovereignty</span>, and to embody how it felt to make music as a <span className='pink'>Web2.0 artist</span>. For most, their music (identity) was unknown. The majority of music made from Web2.0 artists went unnoticed. The music artist on the NFT stands for <span className='green'>artists rights</span> around the globe, and setting <span className="lb">a new standard for music deals</span>.</h3>
            </FadeInSection>
          </div>
        </div>
        <h1 id="access">1331 RECORDZ TOKEN HOLDERS WILL HAVE ACCESS TO:</h1>
        <div className='boxes'>
        <div className='row2'>
          <div className='box'>
            <FadeInSection>
            <h1>Our Elite Team's Network</h1>
            </FadeInSection>
          </div>
          <div className='box'>
            <FadeInSection>
            <h1>IRL Events</h1>
            </FadeInSection>
          </div>
          <div className='box'>
            <FadeInSection>
            <h1>Metaverse Events</h1>
            </FadeInSection>
          </div>
        </div>
        <div className='row2'>
          <div className='box'>
            <FadeInSection>
            <h1>Limited Edition Merchandise</h1>
            </FadeInSection>
          </div>
          <div className='box'>
            <FadeInSection>
            <h1>Commercial rights to your NFT</h1>
            </FadeInSection>
          </div>
          <div className='box'>
            <FadeInSection>
            <h1>Community-powered creative direction</h1>
            </FadeInSection>
          </div>
          </div>
        </div>
        
        

    </div>
  );
};
export default NFTCollection;