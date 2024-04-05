import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoctor, updateDoctor } from "../services/doctor";
import wp3353770 from "../images/wp3353770.webp"
import Swal from "sweetalert2";
//Will Update Doctor Detail when Logged in as Admin
const UpdateDoctor = () => {
  const navigate = useNavigate();
  const [doctorName, setDoctorName] = useState("");
  const [department, setDepartment] = useState();
  const [qualification, setQualification] = useState();
  const [language, setLanguage] = useState("");
  const [email, setEmail] = useState();
  const { id } = useParams();
  const [error, setError] = useState(false);

  //Will fetch doctor Detail and Populate it on Form
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDoctor(id);
        const doctor = response.data;
        console.log(doctor);
        setDoctorName(doctor.doctorName);
        setDepartment(doctor.department);
        setQualification(doctor.qualification);
        setLanguage(doctor.language);
        setEmail(doctor.email);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
//Will update Doctor Detail
  const changedoctor = async (e) => {
    e.preventDefault();
    if(doctorName===""){
      setError(true);
      console.log(error);
      Swal.fire("Doctor Name cannot be empty");
    }
    else if(department==="")
    {
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
      email,
    };
    console.log(id);
    Swal.fire("Details has been updated")
    await updateDoctor(id, doctor);
    navigate("/doctorList");
  }
  };


  return (
    <div class="container-fluid p-5"style={{
        backgroundImage: `url(${wp3353770})`,
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
        <div className="card col-md-6 offset-md-3 offset-md-3 bg-dark ">
          <div className="card-body table-dark">
            <form className="table-dark">
              <div className="form-group mb-2">
                <label className="form-label">Doctor Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the DoctorName"
                  error={!!error}
                  name="DoctorName"
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                />

                <label className="form-label">Department</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Department"
                  error={!!error}
                  name="Department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
                <label className="form-label">Qualification</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Qualification"
                  error={!!error}
                  name="setQualification"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                />
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter To Email"
                  error={!!error}
                  name="setEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label">Language</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the Language"
                  error={!!error}
                  name="Language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                />
                <button
                  className="btn btn-success"
                  style={{ marginTop: "10px" }}
                  onClick={(e) => changedoctor(e)}
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

export default UpdateDoctor;
