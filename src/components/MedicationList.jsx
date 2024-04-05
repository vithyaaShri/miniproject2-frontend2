import React from "react";
import HO from "../images/HO.webp";
import { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
//Medication List Will describe Medicine Prescribed by Doctor by getting details of Pateind name and Appointment date
const MedicationList = () => {
  const [id, setId] = useState();
  const[medication1,setMediction1]=useState([]);
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [appointmentState, setAppointmentState] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const change1 = (event) => setPatientName(event.target.value);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isError, setError] = useState(false);

//Will display the medicine Prescribed for Patient By Doctor

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get("http://localhost:8080/api/medication")
      .then((response) => {
        const medication = response.data;
        const filteredmedication = medication.filter(
          (medicineList) =>
          medicineList.patientName.toLowerCase() === patientName &&
          medicineList.appointmentDate === appointmentDate
        );
        setMediction1(filteredmedication);
        if(filteredmedication.length>0){
        setAppointmentState(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching medication:", error);
      });
  };
  return (
    <div
      class="container-fluid p-5"
      style={{
        backgroundImage: `url(${HO})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="cont2">
        <div className="card w-50 mx-auto mt-3 mb-5 bg-secondary">
          <div className="card-header text-center  text-white">
            Medication Details
          </div>
          <div className="card-body">
            <Form id="myForm">
              <div className="mb-3 ">
                <label htmlFor="name" className="form-label text-white">
                  Enter the Patient Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Patient Name"
                  name="Patient Name"
                  value={patientName}
                  onChange={change1}
                />
                <label htmlFor="name" className="form-label text-white">
                  Enter the Appointment Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="Appointment Date"
                  name="Appointment Date"
                  value={appointmentDate}
                  onChange={(e)=>setAppointmentDate(e.target.value)}
                />
              </div>
              <div class="text-center">
                <button
                  type="button"
                  className="btn btn-primary text-center"
                  onClick={(e) => handleSubmit(e)}
                >
                  Search
                </button>
              </div>
            </Form>
          </div>
        </div>
        {appointmentState && (
          <div className="container">
            <div className="py-4">
              <table className="table border shadow t2 bg-secondary">
                <thead>
                  <tr>
                    <th scope="col" className="text-white">
                      Id
                    </th>
                    <th scope="col" className="text-white">
                      Patient Name
                    </th>
                    <th scope="col" className="text-white">
                    Appointment Date
                    </th>
                    <th scope="col" className="text-white">
                      Medicine Name
                    </th>
                    <th scope="col" className="text-white">
                      Description
                    </th>
                  </tr>
                </thead>

                <tbody>
                {medication1.map((medicine, index) => (
                  <tr key={medicine.id}>
                    <td>{medicine.id}</td>
                    <td>{medicine.patientName}</td>
                    <td>{medicine.appointmentDate}</td>
                    <td>{medicine.medicineName}</td>
                    <td>{medicine.description}</td>
                  </tr>
                   ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicationList;
