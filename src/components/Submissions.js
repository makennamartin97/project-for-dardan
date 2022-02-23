import React,{useEffect, useState, useRef} from 'react';
import FadeInSection from "./FadeInSection";
import bluenft from '../images/bluenft.png';
//import emailjs from 'emailjs-com';
import emailjs from 'emailjs-com';
import{ init } from '@emailjs/browser';
init("user_ID6B2OkYLqb5RgvrCJttE");


// const toBase64 = file => new Promise((resolve, reject) => {
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = () => resolve(reader.result);
//   reader.onerror = error => reject(error);
// });

const Submissions = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hwur08h', 'template_iuhm5el', form.current, 'user_ID6B2OkYLqb5RgvrCJttE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  // const [sent, setSent] = useState(false);
  // const [errors, setErrors] = useState({});
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [solAddress, setSolAddress] = useState("");
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [toSend, setToSend] = useState({
  //   name: '',
  //   email: '',
  //   solAddress: '',
  //   selectedFile: null
  // });
//   const handleFileChange = (e) =>{

//    //toBase64(files[0]).then(dataUri => {
//       //setToSend(toSend => ({...toSend, [selectedFile]: dataUri}))
//       setToSend({ ...toSend, selectedFile: e.target.files[0]});
//  }

    // const handleValidation=()=>{
    //       //   let fields = {name, email, solAddress, selectedFile};
    //       //   let errors = {};
    //       //   let formIsValid = true;

    //       //   //Name
    //       //   if(!fields["name"]){
    //       //      formIsValid = false;
    //       //      errors["name"] = "Cannot be empty";
    //       //   }
    //       //   if(!fields["email"]){
    //       //       formIsValid = false;
    //       //       errors["email"] = "Cannot be empty";
    //       //    }
    //       //    setErrors(errors)
    //       //  return formIsValid;
    // }
    // function formSubmit() {
    //   e.preventDefault();
    //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this);
    // }
 

    // const handleChange = (e) => {
    //     // const { name, value } = e.target;
    //     // setSelectedFile(e.target.files[0]);
    //     // setValues({
    //     // ...values,
    //     // [name]: value,
    //     // });
    //     setToSend({ ...toSend, [e.target.name]: e.target.value });
    // };
    
    // function sendEmail(e) {
    //     e.preventDefault();
    //     const formData = new FormData(); 
     
    //   // Update the formData object 

    //     send(
    //       'service_ifny9hi',
    //       'template_7r9d7dw',
    //       toSend,
    //       'user_tlZlD5XvX8g1NQ5XuvEDM'
    //     )
    //       .then((response) => {
    //         console.log('SUCCESS!', response.status, response.text);
    //       })
    //       .catch((err) => {
    //         console.log('FAILED...', err);
    //       });
        // if(handleValidation()){
        //     emailjs.sendForm('service_hwur08h', 'template_iuhm5el', sent, 'user_ID6B2OkYLqb5RgvrCJttE')
        //     .then((result) => {
        //     console.log(result.text);
        //     setSent("Thank you for submitting!")
            
        //     }, (error) => {
        //     console.log(error.text);
        //     setSent("Error")
        //     },[errors]);
            
            
        // }
        // else{
        //     alert("All form fields are required")
        // }
        // e.target.reset();
        
   // }


  useEffect(()=>{
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
              <li>All song submissions are free</li>
              <li>Deadline is 7/31/22 or when we reach 5,000 submissions</li>
              <li>Every song submission requires a Phantom Wallet address</li>
            </ul>
            <input type="text" placeholder='Name' name="name" required />
            <input type="email" placeholder='Email' name="email"  />
            <input type="text" placeholder='Solana Address' name="solAddress" required />
            <input type = "file" placeholder='Upload Song' name="my_file" required />
            <button className='btn'>Submit</button>

          </form>

        </div>
        <h5>Don’t have a Solana address? Install <a href="https://phantom.app/download">Phantom Wallet</a></h5>
        <h5>We are bridging the gap between web2 artist and web3 technologies by promoting the Solana blockchain and making this a requirement.  By making this a requirement, 5,000 new users will have successfully set up crypto wallets. Artists who make a submission will be one step closer to being able to create or purchase  NFTs. This ultimately will increase the amount of web3 users and help grow the ecosystem.</h5>
    </div>
  );
};
export default Submissions;