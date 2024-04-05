import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteDoctor, getAllDoctors } from "../services/doctor";
import wp3353770 from "../images/wp3353770.webp";
import Swal from "sweetalert2";
import {
  isUserLoggedIn,
  isAdminUser,
  isDoctorUser,
} from "../services/AuthService";

//Doctor List Will Display list of doctors Name. It Will change based on Login User
//If Admin logs in he can update and Delete Doctor
//if Log in as User he can choose doctor From list and Book Appointment
const DoctorList = () => {
  const isAuth = isUserLoggedIn();
  const isAdmin = isAdminUser();
  const isDoctor = isDoctorUser();
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();
  //Data is fetched from backend
  useEffect(() => {
    listDoctors();
  }, []);

  const listDoctors = async () => {
    const response = await getAllDoctors();
    console.log(response.data);
    setDoctors(response.data);
    console.log(doctors);
  };
//Handle Update Will update Doctor details by navigating to UpdateDoctor
  const handleUpdate = (id) => {
    console.log(id);
    navigate(`/updateDoctor/${id}`);
  };

  //Will delete Doctor detail from Backend
  const handleDelete = async (id) => {
    try {
      const response = await deleteDoctor(id);
      Swal.fire("Doctors Details Deleted");
      navigate("/admin");
    } catch (error) {
      console.error(error);
    }
  };
//Will navigate to addAppointment page when click Book Appointment Button
  const handleAppointment = async (id) => {
    console.log(id);
    navigate(`/addAppointment/${id}`);
  };

  return (
    <div
      class="container-fluid p-5"
      style={{
        backgroundImage: `url(${wp3353770})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100vw",
        height: "90vh",
        opacity: "80%",
      }}
    >
      <div className="container">
        <h2 className="text-center ">List of Doctors</h2>
        <div>
          <table className="table table-bordered table table-striped table-dark table-hover">
            <thead>
              <tr>
                <th className="text-center">Doctor Name</th>
                <th className="text-center">Department</th>
                <th className="text-center">Qualification</th>
                <th className="text-center">Language</th>
                <th className="text-center">Email</th>
              </tr>
            </thead>

            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td className="text-center">{doctor.doctorName}</td>
                  <td className="text-center">{doctor.department}</td>
                  <td className="text-center">{doctor.qualification}</td>
                  <td className="text-center">{doctor.language}</td>
                  <td className="text-center">{doctor.email}</td>
                  {}
                  <td>
                    {isAdmin && (
                      <button
                        className="btn btn-info"
                        style={{ marginLeft: "25px" }}
                        onClick={() => handleUpdate(doctor.id)}
                      >
                        Update
                      </button>
                    )}
                    {isAdmin && (
                      <button
                        className="btn btn-danger"
                        style={{ marginLeft: "25px" }}
                        onClick={() => handleDelete(doctor.id)}
                      >
                        Delete
                      </button>
                    )}
                    {!isDoctor && !isAdmin && (
                      <button
                        className="btn btn-success"
                        style={{ marginLeft: "25px" }}
                        onClick={() => handleAppointment(doctor.id)}
                      >
                        Book Appointment
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

export default DoctorList;
