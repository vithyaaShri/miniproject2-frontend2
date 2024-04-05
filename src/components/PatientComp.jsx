import React from "react";
import HospitalSystem from "../images/HospitalSystem.jpg";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import OIP1 from "../images/OIP1.jpg"
import appo3 from "../images/appo3.jpg"
import OIP from "../images/OIP.jpg"
//Wll display home Page for User
const PatientComp = () => {
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
          backgroundImage: `url(${HospitalSystem})`,
          // backgroundImage: `url(${externalImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="container" style={{ padding: "2rem" }}>
        <h2 className="text-center text-primary mb-4">Patienct Dashboard!</h2>
          <div className="row">
            <div className="row-mt-5 mr-5">
              <Card style={{ width: "18rem" }} className="bg-light">
                <Card.Img variant="top" src={OIP1} />
                <Card.Body>
                  <Card.Title>Find a Doctor</Card.Title>
                  <Card.Text>
                    Book an Appointment with doctor for Consultation
                  </Card.Text>
                  <Link to="/doctorList">
                  <Button variant="primary">Book Appointment</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="row-mt-5 mr-5 ml-5">
              <Card style={{ width: "16rem" }} className="bg-light">
                <Card.Img variant="top" src={appo3} />
                <Card.Body>
                  <Card.Title>Appointment</Card.Title>
                  <Card.Text>
                    View/Cancel Appointment with your Doctor
                  </Card.Text>
                  <Link to="/cancelAppointment">
                  <Button variant="primary">Cancel Appointment</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="row-mt-5 mr-4 ml-5">
              <Card style={{ width: "17rem" }} className="bg-light">
                <Card.Img variant="top" src={OIP}/>
                <Card.Body>
                  <Card.Title>Medication List</Card.Title>
                  <Card.Text>
                    Please click on Medicine Prescribed Button to View the Medicine prescribed for you
                  </Card.Text>
                  <Link to="/medicationList">
                  <Button variant="primary">Medicines Prescribed</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientComp;
