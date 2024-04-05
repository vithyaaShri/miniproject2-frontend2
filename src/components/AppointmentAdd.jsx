import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { getDoctor } from "../services/doctor";
import { addAppointment1 } from "../services/Appointment";
import RoadVet from "../images/RoadVet.jpg";
import Select from "react-select";

//Appoinment is Booked by User/patient by choosing the Doctor Detail

const AppointmentAdd = () => {
  const navigate = useNavigate();
  const [patientName, setPatientName] = useState("");
  const [contactNo, setContactNo] = useState();
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [medicalHistory, setMedicalHistory] = useState("");
  const [cancelState, setCancelState] = useState(false);
  const [doctorName, setDoctorName] = useState("");
  const [doctorId, setDoctorId] = useState();
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [error, setError] = useState(false);
  const { id } = useParams();


//This will automatically populate Doctor Name When u click Book Appointment Button
  useEffect(() => {
    const fetchData = async () => {
      try {
        setDoctorId(id);
        const response = await getDoctor(id);
        const doctor = response.data;
        console.log(doctor);
        setDoctorName(doctor.doctorName);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  
//Save Appointment will save appointment detail to backend
  const saveAppointment = async (e) => {
    e.preventDefault();
    if (doctorName === "") {
      setError(true);
      console.log(error);
      Swal.fire("Doctor Name cannot be empty");
    } else if (patientName === "") {
      setError(true);
      console.log(error);
      Swal.fire("Patient Name cannot be empty");
    } else if (contactNo === 0) {
      setError(true);
      console.log(error);
      Swal.fire("Contact Num cannot be empty");
    } else if (email === "") {
      setError(true);
      console.log(error);
      Swal.fire("Email cannot be empty");
    } else if (age === 0) {
      setError(true);
      console.log(error);
      Swal.fire("Age cannot be empty");
    } else if (medicalHistory === "") {
      setError(true);
      console.log(error);
      Swal.fire("Medical History cannot be empty");
    } else if (appointmentTime === 0) {
      setError(true);
      console.log(error);
      Swal.fire("Appointment Time cannot be empty");
    } else if (appointmentDate === 0) {
      setError(true);
      console.log(error);
      Swal.fire("Appointment Date cannot be empty");
    } else {
      console.log(appointmentTime);
      const patient = {
        patientName,
        contactNo,
        email,
        age,
        medicalHistory,
      };
      const appointment = {
        doctorId,
        appointmentTime,
        appointmentDate,
        cancelState,
        patient,
      };

      console.log(appointment);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Details has been Saved",
        showConfirmButton: false,
        timer: 1500,
      });
      const response = await addAppointment1(appointment);
      console.log(response);
      navigate("/user");
    }
  };

  return (
    <div
      class="container-fluid p-5"
      style={{
        backgroundImage: `url(${RoadVet})`,
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
                  <label className="form-label">Doctor Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the DoctorName"
                    error={!!error}
                    name="DoctorName"
                    required
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                  />
                  <label className="form-label">Patient Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the Patient Name"
                    required
                    name="Patient Name"
                    error={!!error}
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                  <label className="form-label">Contact Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the Contact Num"
                    required
                    error={!!error}
                    name="Contact No"
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                  />
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the Email"
                    required
                    error={!!error}
                    name="Contact No"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label">Age</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the Age"
                    required
                    error={!!error}
                    name="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <label className="form-label">Medical History</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the Medical History"
                    error={!!error}
                    required
                    name="medicalHistory"
                    value={medicalHistory}
                    onChange={(e) => setMedicalHistory(e.target.value)}
                  />

                  <label htmlFor="Appointment Time" className="form-label ll">
                    Appointment Time
                  </label>
                  <select
                    onChange={(e) => {
                      const selectedvalue = e.target.value;
                      setAppointmentTime(selectedvalue);
                    }}
                    className="browser-default custom-select"
                    error={!!error}
                  >
                    <option value="2.30-2.45pm">2.30-2.45pm</option>
                    <option value="2.45-3.00pm">2.45-3.00pm</option>
                    <option value="3.00-3.15pm">3.00-3.15pm</option>
                    <option value="3.15-3.30pm">3.15-3.30pm</option>
                  </select>
                  <label className="form-label">Appointment Date</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Enter AppointmentDate"
                    name="AppointmenrDate"
                    error={!!error}
                    required
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                  />

                  <button
                    className="btn btn-success"
                    style={{ marginTop: "10px" }}
                    onClick={(e) => saveAppointment(e)}
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
};

export default AppointmentAdd;
