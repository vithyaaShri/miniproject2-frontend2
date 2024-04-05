import React from "react";
import HospitalSystem from "../images/HospitalSystem.jpg";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import hospitalDoctor from "../images/hospitalDoctor.webp";

//Doctor Comp Will Display the Doctor Page when logged in as Doctor
const DoctorComp = () => {
  const btnxl = {
    padding: "10px",
    fontsize: "20px",
    borderradius: "10px",
    width: "250px",
    height: "100px",
  };
  return (
    <div className="d-flex justify-content-center">
      <div
        class="container-fluid p-5"
        style={{
          backgroundImage: `url(${hospitalDoctor})`,
          // backgroundImage: `url(${externalImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="container " style={{ padding: "0rem" }}>
          <h2 className="text-center text-primary mb-4">Doctor Dashboard!</h2>
          <div className="col">
            <div className="row-md-6 mb-5">
              <Card border="white" className="text-center bg-secondary">
                <Card.Header className="text-white">Feature 1</Card.Header>
                <Card.Body>
                  <Card.Title className="text-white">
                    View/Cancel Appointment
                  </Card.Title>
                  <Card.Text className="text-white">
                    Doctors can view their Appointment and Cancel It
                  </Card.Text>
                  <Link to="/cancelAppointment">
                    <Button variant="primary">Appointment List</Button>
                  </Link>
                </Card.Body>
                <Card.Footer className="text-muted text-dark">
                  Go to Appointment List
                </Card.Footer>
              </Card>
            </div>
            <div className="row-md-6 mb-5">
              <Card border="white" className="text-center bg-secondary">
                <Card.Header className="text-white">Feature 2</Card.Header>
                <Card.Body className="text-white">
                  <Card.Title>Add Prescription</Card.Title>
                  <Card.Text>
                    Add Prescription to patient using patient List
                  </Card.Text>
                  <Link to="/appointmentList">
                    <Button variant="primary">Add Prescription</Button>
                  </Link>
                </Card.Body>
                <Card.Footer className="text-muted">
                  Go to Add prescription
                </Card.Footer>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorComp;
