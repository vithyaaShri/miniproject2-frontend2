import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoctor } from '../services/doctor';
import Swal from "sweetalert2";
import RoadVet from "../images/RoadVet.jpg"

//Admin can Add Doctor and this is admin adding doctor Page
const AddDoctor = () => {
const navigate = useNavigate();
  const [doctorName, setDoctorName] = useState("");
  const [department, setDepartment] = useState("");
  const [qualification, setQualification] = useState("");
  const [language, setLanguage] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

//This Save Doctor save Doctor detail at Backend.It checks for Null value of thr field Also
  const saveDoctor = async (e) => {
    e.preventDefault();
    if(doctorName===""){
      setError(true);
      console.log(error);
      Swal.fire("Doctor Name cannot be empty");
    }
    else if(department===""){
      setError(true);
      console.log(error);
      Swal.fire("Department cannot be empty");
    }
    else if(qualification===""){
      setError(true);
      console.log(error);
      Swal.fire("Qualification cannot be empty");
    }
    else if(language===""){
      setError(true);
      console.log(error);
      Swal.fire("Language cannot be empty");
    }
    else if(email===""){
      setError(true);
      console.log(error);
      Swal.fire("Email cannot be empty");
    }
    else{
    const doctor = {
        doctorName,
        department,
        qualification,
        language,
        email    
    };
  
    console.log(doctor);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Details has been Saved",
      showConfirmButton: false,
      timer: 1500,
    });
    const response = await addDoctor(doctor);
    console.log(response);
    navigate("/admin");
    }
  }

  return (
    <div class="container-fluid p-5"style={{
        backgroundImage: `url(${RoadVet})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw',
        height: '90vh',
        opacity:"80%"
      }}>
    <div className="container">
    <div className="row">
      <div className="card col-md-6 offset-md-3 bg-dark offset-md-3">
        <div className="card-body">
          <form className='table-dark'>
            <div className="form-group mb-2">
              <label className="form-label">Doctor Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the DoctorName"
                name="DoctorName"
                error={!!error}
                required
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
              />
              <label className="form-label">Department</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the Department Name"
                error={!!error}
                required
                name="Department Name"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
              <label className="form-label">Qualification</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter From Qualification"
                name="Qualification"
                error={!!error}
                required
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                error={!!error}
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="form-label">Language</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter known language"
                name="language"
                error={!!error}
                required
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              />
              <button
                className="btn btn-success"
                style={{ marginTop: "10px" }}
                onClick={(e) => saveDoctor(e)}
              >
                 Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default AddDoctor
