import React,{useEffect} from 'react';
import dardan from '../images/dardanbela.jpg';
import osaze from '../images/osazemoore.jpg';
import jake from '../images/jakehitz.jpg';
import adrian from '../images/adrianswish.jpg';
import shontelle from '../images/shontelle.jpg';
import brian from '../images/briangibbs.jpg';
import FadeInSection from "./FadeInSection";


//meet the team
const TheTeam = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
},[])
  return (
    <div className='section' id="team">
        <h1>Meet The Team</h1>
        <FadeInSection>
        <div className="teammember">
          <div className='image'>
            <img src={dardan} alt="Dardan Bela" />
          </div>
          <div className='abt'>
            <h2>Dardan Bela</h2>
            <h3>1331  Recordz was founded by musician an visionary Dardan Bela. His experience touring the east & west coast, coupled with his passion for entrepreneurship/mentorship, lead to the creation of a web3 music group, specialized in NFT music releases. 1331 Recordz does more then just offer money to up an coming artist. The establishment offers mentorship, artist development, and helps musicians achieve goals of growing their career to the next level. 1331 Recordz aims to help onboard more web2 artist into the web3 ecosystem, while teaching and showcasing the importance of web3 technologies. As CEO & founder of 1331 Recordz, Dardan’s objective is to disrupt the music industry and to set a new standard for record label deals.</h3>
          </div>
        </div>
        </FadeInSection>
        <FadeInSection>
        <div className="teammember">
        <div className='abt'>
            <h2>Adrian Swish</h2>
            <h3>Veteran talent manager, entrepreneur, and founder, with a proven track record of success across several different platforms of the music industry including talent development, strategic digital marketing campaigns, music publishing, digital music distribution, live event production, branded content activations, and corporate partnerships.  Adrian Swish released his first whitepaper in 2018 with his idea of Music Distribution on Blockchain. Adrian’s professional accomplishments as a diversified leader that included talent management & artist development, will be utilized to propel 1331 Recordz to new heights for artist development</h3>
          </div>
          <div className='image'>
            <img src={adrian} alt="Adrian Swish" />
          </div>
        </div>
        </FadeInSection>
        <FadeInSection>
        <div className="teammember">
          <div className='image'>
            <img src={osaze} alt="Osaze Moore" />
          </div>
          <div className='abt'>
            <h2>Osaze Moore</h2>
            <h3>Osaze Moore is an experienced IT professional who spent years implementing and developing cyber security solutions for government agencies. He is passionate and knowledgeable in the IT world and as CTO of 1331 Recordz he will use his skills in blockchain development to create new and innovative web3 music solutions.</h3>
          </div>
        </div>
        </FadeInSection>
        <FadeInSection>
        <div className="teammember">
        <div className='abt'>
            <h2>Shontelle Layne</h2>
            <h3>Shontelle, most popularly known for her hit singles “Impossible,” & “T-shirt,” is one of the 1st black female mainstream pop-artist to enter the web3 space. One of the first songs Shontelle wrote was “Roll It Gal,” by Alison Hinds. The song became a Global hit. She also went on to co-write “Man Down,” the sixth single lifted from Rihanna’s fifth studio album “LOUD.” As of August 2012, “LOUD” was certified as the fifth biggest selling digital album of all time and Shontelle’s role on “Man Down” awarded her the title as a Grammy nominated songwriter. Shontelle’s exceptional music industry accomplishments gives her a cutting edge understanding of what it takes to make it as a web2 and web3 artist. Her role at 1331 Recordz will be as the chief marketing officer and community leader.</h3>
          </div>
          <div className='image'>
            <img src={shontelle} alt="Shontelle Layne" />
          </div>
        </div>
        </FadeInSection>
        <FadeInSection>
        <div className="teammember">
          <div className='image'>
            <img src={jake} alt="Jake Hitz" />
          </div>
          <div className='abt'>
            <h2>Jake Hitz</h2>
            <h3>Jake Hitz is an experienced musician, audio engineer and businessman. Between touring the east coast as a musician, running live shows for high end acts, and founding his own commercial recording studio, Jake Hitz has a thorough understanding of the music industry. As an artist himself, Jake’s goal is to give power back to the ones who deserve it, the artist.</h3>
          </div>
        </div>
        </FadeInSection>
        <FadeInSection>
        <div className="teammember">
        <div className='abt'>
            <h2>Brian Gibbs</h2>
            <h3>Music producer Brian Gibbs, who’s notable work on Netflix’s Rhythm & Flow earned him an NAACP Image Award, is also a Blockchain, & Web3 Enthusiast who specializes live & digital media innovation, brand partnerships, & product activations. </h3>

          </div>
          <div className='image'>
            <img src={brian} alt="Brian Gibbs" />
          </div>
        </div>
        </FadeInSection>
    </div>
  );
};
export default TheTeam;