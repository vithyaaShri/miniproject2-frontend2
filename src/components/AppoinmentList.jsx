import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllAppointments } from "../services/Appointment";
import { isAdminUser } from "../services/AuthService";
import hospitalbg from "../images/hospitalbg.jpg";
//Appointment List will allows Admin only to view it and if the logged in user is User then Book appointment button is enabled for booking Appointment 

const AppoinmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const isAdmin=isAdminUser();
  //Data is fetched from backend
  useEffect(() => {
    listAppointments();
  }, []);

  const listAppointments = async () => {
    const response = await getAllAppointments();
    console.log(response.data);
    setAppointments(response.data);
    console.log(appointments);
  };

  //In Appointment List only Add prescription is enable for doctor user

  const handleUpdate = (id) => {
    console.log(id);
    navigate(`/addPrescription/${id}`);
  };
  return (
    <div
      class="container-fluid p-5"
      style={{
        backgroundImage: `url(${hospitalbg})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        opacity: "80%",
      }}
    >
      <div className="container">
        <h2 className="text-center ">Appointment List</h2>
        <div>
          <table className="table table-bordered table table-striped table-dark table-hover">
            <thead>
              <tr>
                <th className="text-center">Patient Name</th>
                <th className="text-center">Doctor Id</th>
                <th className="text-center">Appointmet Time</th>
                <th className="text-center">Appointment Date</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="text-center">
                    {appointment.patient.patientName}
                  </td>
                  <td className="text-center">{appointment.doctorId}</td>
                  <td className="text-center">{appointment.appointmentTime}</td>
                  <td className="text-center">{appointment.appointmentDate}</td>
                  <td>
                    {!isAdmin && (
                    <button
                      className="btn btn-info"
                      style={{ marginLeft: "25px" }}
                      onClick={() => handleUpdate(appointment.id)}
                    >
                      Add Prescription
                    </button>
                    )}
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

export default AppoinmentList;
