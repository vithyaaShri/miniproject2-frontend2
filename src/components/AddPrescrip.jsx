import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAppointment } from "../services/Appointment";
import hospit from "../images/hospit.webp";
import Swal from "sweetalert2";
import { addMedicine } from "../services/Medication";
//Add Prescription for the Patient from Doctor Side


const AddPrescrip = () => {
  //const [id, setId] = useState();
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [appointmentState, setAppointmentState] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const navigate=useNavigate();

//use Effect fetch the doctor name populated for whom v book an appointment
  useEffect(() => {
    const fetchData = async () => {
      try {
        //setId(id);
        console.log(id)
        const response = await getAppointment(id);
        const appointment = response.data;
        console.log(appointment);
        setPatientName(appointment.patient.patientName)
        setAppointmentDate(appointment.appointmentDate)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
//Save Prescription at Backend
  const savePrescription=async(e)=>{
    e.preventDefault();
    const medicine={
        patientName,
        appointmentDate,
        medicineName,
        description
    }
    console.log(medicine);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Details has been Saved",
      showConfirmButton: false,
      timer: 1500,
    });
    const response = await addMedicine(medicine);
    console.log(response);
    navigate("/doctor");
  };


  

  return (
    <div
      class="container-fluid p-5"
      style={{
        backgroundImage: `url(${hospit})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 bg-secondary offset-md-3">
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Patient Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the Patient Name"
                    name="PatientName"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                  <label className="form-label">Appointment Date</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Enter the Appointment Date"
                    required
                    name="Appointment Date"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                  />
                  <label className="form-label">Medicine Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the Medicines Names"
                    required
                    name="Contact No"
                    value={medicineName}
                    onChange={(e) => setMedicineName(e.target.value)}
                  />
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the Description of medicine"
                    required
                    name="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <button
                    className="btn btn-success"
                    style={{ marginTop: "10px" }}
                    onClick={(e) => savePrescription(e)}
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
  );
    }


export default AddPrescrip;
