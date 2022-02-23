import React,{useEffect} from 'react';
import FadeInSection from "./FadeInSection";
import nft from '../images/nft.jpeg';
import nft1 from '../images/nft1.jpeg';
import nft2 from '../images/nft2.jpeg';
import nft3 from '../images/nft3.jpeg';
import nft4 from '../images/nft4.jpeg';
import nft5 from '../images/nft5.jpeg';



const Mission = () => {

  useEffect(()=>{
    window.scrollTo(0, 0)
},[])

  return (
    <div className='section'id="mission">
        <h1>The Mission</h1>
        <FadeInSection>
          <h2>The 1331 Recordz mission is to disrupt the music industry by setting a new standard for music deals.</h2>
        </FadeInSection>
        <div className='row2 nfts'>
          <img src={nft}/>
          <img src={nft1}/>
          <img src={nft2}/>
          <img src={nft3}/>
          <img src={nft4}/>
          <img src={nft5}/>
        </div>
        <FadeInSection>
          <h2>We aim to bridge the gap between web2 artist and web 3, by helping onboard, educate, mentor, empower, and show the artists how through the utilization of NFT’s, Community, and Web3 technologies their passion of creating music can turn into a full time career.</h2>
        </FadeInSection>
    </div>
  );
};
export default Mission;