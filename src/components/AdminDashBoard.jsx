import React from "react";
import { Link } from "react-router-dom";
import hospitalbg from "../images/hospitalbg.jpg"
import { useNavigate } from "react-router-dom";
import tag from "../images/tag.png"
//This Display the Admin Dashboard and Navigate to each Button
const AdminDashBoard = () => {
    const navigate=useNavigate();
  const btnxl = {
    padding: "10px",
    fontsize: "20px",
    borderradius: "10px",
    width: "250px",
    height: "100px",
  };
  const handlePatientList=(e) => {
    e.preventDefault();
    navigate("/patientList");
  }
  const handleDoctorList=(e) => {
    e.preventDefault();
    navigate("/doctorList");
  }
  const handleAppointmentList=(e) => {
    e.preventDefault();
    navigate("/appointmentList");
  }
  const handleMedicationList=(e) => {
    e.preventDefault();
    navigate("/addDoctor");
  }
  
  return (
    <div className="d-flex justify-content-center">
      <div class="container-fluid p-5"style={{
        backgroundImage: `url(${hospitalbg})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        
      }}>
        <div class="container">
          <div class="row">
            <button className="btn btn-outline-primary text-dark btn-lg ml-2px" style={btnxl} onClick={(e) =>{handlePatientList(e)}}>
              Patient List
            </button>
            <button className="btn btn-outline-primary text-dark btn-lg" style={btnxl} onClick={(e) =>{handleDoctorList(e)}}>
              Doctor List
            </button>
            <button className="btn btn-outline-primary text-dark btn-lg" style={btnxl} onClick={(e) =>{handleAppointmentList(e)}}>
              Appoinment List
            </button>
            <button className="btn btn-outline-primary text-dark btn-lg" style={btnxl} onClick={(e) =>{handleMedicationList(e)}}>
              Add Doctor
            </button>
          </div>
          
        </div>
        <div className="mt-4">
          <img
            src={tag}
            width="1470"
            height="520"
            className="d-inline-block align-top"
            alt=""
          />
          </div>
       
      </div>
      
    </div>
  );
};

export default AdminDashBoard;
