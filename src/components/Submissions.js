import React,{useEffect, useState, useRef} from 'react';
import bluenft from '../images/bluenft.png';
import music from '../images/musical-note.png';
import emailjs from 'emailjs-com';
import{ init } from '@emailjs/browser';
init("user_ID6B2OkYLqb5RgvrCJttE");



const Submissions = () => {
  const [hasError, setError] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hwur08h', 'template_iuhm5el', form.current, 'user_ID6B2OkYLqb5RgvrCJttE')
        .then((result) => {
        console.log(result.text);
        alert("Thank you for submitting!")
        
        }, (error) => {
          console.log(error.text);
          alert("There is an error with your submission.")
      });
        
    e.target.reset();
    
  };


  useEffect(() => {
    window.scrollTo(0, 0)
  },[])


  return (
    <div className='section submissions'>
        <h1>Submissions</h1>
  
        <div className='form row'>
          <div className='formimg'>
            <img src={bluenft} alt="logo"/>
          </div>
          <form encType="multipart/form-data" ref={form} onSubmit={sendEmail}>
            <ul>
              <li><img src={music} className="music" alt="music"/>All song submissions are free</li>
              <li><img src={music} className="music" alt="music"/>Deadline is 7/31/22 or when we reach 5,000 submissions</li>
              <li><img src={music} className="music" alt="music"/>Every song submission requires a Phantom Wallet address</li>
            </ul>
            <input type="text" placeholder='Name' name="name" required />
            <input type="email" placeholder='Email' name="email" />
            <input type="text" placeholder='Solana Address' name="solAddress" required />
            <input type="file" placeholder='Upload Song' name="my_file" accept=".mp3" required/>
            <button className='btn'>Submit</button>

          </form>

        </div>
        <h5>Don’t have a Solana address? Install <a href="https://phantom.app/download">Phantom Wallet</a></h5>
        <h5>We are bridging the gap between web2 artist and web3 technologies by promoting the Solana blockchain and making this a requirement.  By making this a requirement, 5,000 new users will have successfully set up crypto wallets. Artists who make a submission will be one step closer to being able to create or purchase  NFTs. This ultimately will increase the amount of web3 users and help grow the ecosystem.</h5>
    </div>
  );
};
export default Submissions;