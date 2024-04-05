import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPatient, updatePatient } from "../services/patient";
import hos from "../images/hos.webp";
import Swal from "sweetalert2";

//Will update Patient Detail when Logged in as Admin
const UpdatePatient = () => {
  const navigate = useNavigate();
  const [patientName, setPatientName] = useState("");
  const [medicalHistory, setMedicalHistory] = useState();
  const [contactNo, setContactNo] = useState();
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const { id } = useParams();
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPatient(id);
        const patient1 = response.data;
        console.log(patient1);
        setPatientName(patient1.patientName);
        setMedicalHistory(patient1.medicalHistory);
        setContactNo(patient1.contactNo);
        setEmail(patient1.email);
        setAge(patient1.age);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const changePassenger = async (e) => {
    e.preventDefault();
    if (patientName === "") {
      setError(true);
      console.log(error);
      Swal.fire("Patient Name cannot be empty");
    } else if (contactNo == 0) {
      setError(true);
      console.log(error);
      Swal.fire("Contact Number cannot be empty");
    } else if (medicalHistory === "") {
      setError(true);
      console.log(error);
      Swal.fire("Medical History cannot be empty");
    } else if (email === "") {
      setError(true);
      console.log(error);
      Swal.fire("Email cannot be empty");
    } else if (age === 0) {
      setError(true);
      console.log(error);
      Swal.fire("Age cannot be empty");
    }
    else{
   
    const patient = {
      patientName,
      medicalHistory,
      contactNo,
      email,
      age,
    };
    console.log(id);
    await updatePatient(id, patient);
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    navigate("/patientList");
  };
}

  return (
    <div
      class="container-fluid p-5"
      style={{
        backgroundImage: `url(${hos})`,
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
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3 bg-dark">
            <div className="card-body">
              <form className="table-dark">
                <div className="form-group mb-2">
                  <label className="form-label">Patient Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the PatientName"
                    name="patientName"
                    error={!!error}
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />

                  <label className="form-label">Contact Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter From Contact Number"
                    name="contactNo"
                    error={!!error}
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                  />
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter To Email"
                    name="setEmail"
                    error={!!error}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label">age</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the age(Optional)"
                    name="age"
                    error={!!error}
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <label className="form-label">Medical History</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the medical Condition"
                    name="medicalHistory"
                    error={!!error}
                    value={medicalHistory}
                    onChange={(e) => setMedicalHistory(e.target.value)}
                  />
                  <button
                    className="btn btn-success"
                    style={{ marginTop: "10px" }}
                    onClick={(e) => changePassenger(e)}
                  >
                    Update
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

export default UpdatePatient;
