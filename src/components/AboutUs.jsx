import React from 'react'
import black from "../images/black.jpg";
//This Page is the general description of thier services Offered
const AboutUs = () => {
  return (
    <div
      class="container-fluid p-5"
      style={{
        backgroundImage: `url(${black})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
    <div className='bt-5 p-5'>
     <h1 className='text-primary'>Services</h1> 
     <h3 className='text-warning'>Request Information</h3>
     <p className='text-light'>
     You can call Apollo Lifeline and get information about service offerings, Doctors and the details of the various new initiatives launched by Apollo Hospitals and the Apollo Clinics. The Lifeline team will not only ensure that you have the right information but they will also guide you on your next steps to get the best of care at Apollo .
     </p>
     <br></br>
     <br></br>
     <h3 className='text-warning'>Fix Appointments</h3>
     <p className='text-light'> 
     You can call Apollo Lifeline and book doctor appointments across all the Apollo Hospitals and Apollo Clinics. You don’t need to call our Hospitals or Clinics. Just call our Lifeline team and they will ensure that your appointment is confirmed as per your convenience.
     </p>
     <br></br>
     <br></br>
     <h3 className='text-warning'>Emergency Services</h3>
     <p className='text-light'>
     In case of emergency, Lifeline team will ensure you are connected to our world class emergency services.
     </p>
    </div>
    </div>
    
    
  )
}

export default AboutUs
