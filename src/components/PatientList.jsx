import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPatient } from '../services/patient';
import hos from "../images/hos.webp"

const PatientList = () => {
    const [patient, setPatient] = useState([]);
    const navigate = useNavigate();
  //Data is fetched from backend
    useEffect(() => {
      listPatient();
    }, []);
  
    const listPatient = async () => {
      const response = await getAllPatient();
      console.log(response.data);
      setPatient(response.data);
      console.log(patient);
    };
  //Update the Passenger Detail when Update button is Pressed.
    const handleUpdate = (id) => {
        console.log(id);
      navigate(`/updatePatient/${id}`);
    };
    return (
        
        <div class="container-fluid p-5"style={{
            backgroundImage: `url(${hos})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
            opacity:"80%"
          }}>
      <div className="container">
        <h2 className="text-center ">List of Patients</h2>
        <div>
          <table className="table table-bordered table table-striped table-dark table-hover">
            <thead>
              <tr>
                <th className="text-center">Patient Name</th>
                <th className="text-center">Contact Number</th>
                <th className="text-center">Email</th>
                <th className="text-center">Age</th>
                <th className="text-center">Medical History</th>
              </tr>
            </thead>
  
            <tbody>
              {patient.map((pass) => (
                <tr key={pass.id}>
                  <td className="text-center">{pass.patientName}</td>
                  <td className="text-center">{pass.contactNo}</td>
                  <td className="text-center">{pass.email}</td>
                  <td className="text-center">{pass.age}</td>
                  <td className="text-center">{pass.medicalHistory}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      style={{ marginLeft: "25px" }}
                      onClick={() => handleUpdate(pass.id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    );
  };

export default PatientList
