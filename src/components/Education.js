import React,{useEffect} from 'react';
import education from "./education.json";
import FadeInSection from "./FadeInSection";


const Education = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
  return (
    <div className='section ed'>
        <div id="idk">
            <h1>Web3 Terminology</h1>
        </div>
        {
        education.terms.map((term, i)=>(
            <FadeInSection>
            <div className='term' key={i}>
                <h2>{term.word}</h2>
                <h3>{term.definition}</h3>
            </div>
            </FadeInSection>
        ))
        }
      
    </div>
  );
};
export default Education;