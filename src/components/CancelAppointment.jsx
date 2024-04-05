import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { cancelAppointment, getAppointment } from "../services/Appointment";
import { getDoctor } from "../services/doctor";
import Swal from "sweetalert2";
import hospit from "../images/hospit.webp";


//Cancel Appointment will cancel Appointment and Disable Button . Will ask for Appointment id and on Searching will give Appointment details which we can cancel
const CancelAppointment = () => {
  const [appointmentId, setAppoitmentId] = useState();
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [appointmentState, setAppointmentState] = useState(false);
  const [doctorId, setDoctorId] = useState();
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const change1 = (event) => setAppoitmentId(event.target.value);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [error, setError1] = useState(false);
  const [isError, setError] = useState(false);
//Click Hnadler Search for entered Appointment Id and sets the result to UseState
  const clickhandler = async (e) => {
    e.preventDefault();
    if (appointmentId === 0) {
      setError1(true);
      console.log(error);
      Swal.fire("Appointment Id cannot be empty");
    } else {
      try {
        const response = await getAppointment(appointmentId);
        const appointment = response.data;
        console.log(appointment.patient.patientName);
        setPatientName(response.data.patient.patientName);
        setDoctorId(response.data.doctorId);
        console.log(doctorId);
        setAppointmentTime(response.data.appointmentTime);
        setAppointmentDate(response.data.appointmentDate);
        console.log(response.data.id);
        console.log(appointment);
        const response1 = await getDoctor(doctorId);
        setDoctorName(response1.data.doctorName);
        console.log(doctorName);
        setAppointmentState(true);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
  };
//Handle Cancel Will cancel Appointment
  const handleCancel = async (appointmentId) => {
    try {
      Swal.fire("Appointment Canceled");
      console.log(appointmentId);
      const response = await cancelAppointment(appointmentId);
      console.log(response.data);
      console.log(response.data.id);
      setAppointmentState(response.data.cancelState);
      setAppoitmentId(response.data.id);
      console.log(response.data.cancelState);

      setButtonDisabled(true);
      navigate;
    } catch (error) {
      console.log(error);
    }
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
        height: "90vh",
        opacity: "80%",
      }}
    >
      <div className="cont2">
        <div className="card w-50 mx-auto mt-3 mb-5 bg-secondary">
          <div className="card-header text-center  text-white">
            Cancel Appointment
          </div>
          <div className="card-body">
            <Form id="myForm">
              <div className="mb-3 ">
                <label htmlFor="name" className="form-label text-white">
                  Enter your Appointment id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="appointmentId"
                  name="appointmentId"
                  error={!!error}
                  value={appointmentId}
                  onChange={change1}
                />
              </div>
              <div class="text-center">
                <button
                  type="button"
                  className="btn btn-primary text-center"
                  onClick={(e) => clickhandler(e)}
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
                      Doctor Name
                    </th>
                    <th scope="col" className="text-white">
                      Appointment Time
                    </th>
                    <th scope="col" className="text-white">
                      Appointment Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="text-white">{appointmentId}</td>
                    <td className="text-white">{patientName}</td>
                    <td className="text-white">{doctorName}</td>
                    <td className="text-white">{appointmentTime}</td>
                    <td className="text-white">{appointmentDate}</td>
                    <td>
                      <button
                        type="submit"
                        className="btn btn-outline-light"
                        disabled={isButtonDisabled}
                        onClick={(e) => handleCancel(appointmentId)}
                      >
                        Cancel Appointment
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CancelAppointment;
