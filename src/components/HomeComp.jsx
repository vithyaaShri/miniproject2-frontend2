import React from "react";
import PG from "../images/PG.png";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

// It is Home Page of Hospital Management System
const HomeComp = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/AboutUs");
  };
  return (
    <div
      class="container-fluid p-5"
      style={{
        backgroundImage: `url(${PG})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="homeComp">
        <h1 className="text-primary mb-5 mt-2 ml-5">
          Medical Service!!! You Can Trust
        </h1>
        <h4 className="headerTile mb-5 mt-5 ml-5 text-primary">
          Best Medical Care You Can Get for you and your Family
        </h4>
        <p className="headerDesc mb-5 mt-5 ml-5 text-primary">
          LiLavathi Health center is Your Go-to team of doctors for
          <p>
            all your medical needs.Our Specialized team will leave nothing to be
            desired.
          </p>
        </p>
        <button
          className="btn btn-secondary mb-5 mt-2 ml-5"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Our Practice
        </button>
        <div className="row mt-5 ml-5 d-flex align-items-baseline">
          <div className="row-mt-5 mb-5">
            <Card border="white" className="bg-info mt-5" style={{ width: "16rem" }}>
              <Card.Body className="text-light">
                <Card.Title>Opening Times</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Mon-fri
                </Card.Subtitle>
                <Card.Text>Mrng-8.00am-12.00pm
                <Card.Text>Evng-5.00pm-8.00pm</Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="row-mt-5">
            <Card border="white" className="bg-info mt-5" style={{ width: "16rem" }}>
              <Card.Body className="text-light">
                <Card.Title>Find Us</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Address
                </Card.Subtitle>
                <Card.Text>34th East Street,Tambaram, Chennai</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="row-mt-5">
            <Card border="white" className="bg-info mt-5" style={{ width: "16rem" }}>
              <Card.Body className="text-light">
                <Card.Title>Emergency HotLine</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Call</Card.Subtitle>
                <Card.Text>Make a Call To Toll Free Number-088-94436-2134</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="row-mt-5">
            <Card border="white" className="bg-info mt-5" style={{ width: "16rem" }}>
              <Card.Body className="text-light">
                <Card.Title>Ambulance Service</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Call</Card.Subtitle>
                <Card.Text>Make a Call To Toll Free Number-088-90789-6573</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="row-mt-5 mr-5">
            <Card border="white" className="bg-info mt-5" style={{ width: "16rem" }}>
              <Card.Body className="text-light">
                <Card.Title>Full Body Check-UP</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Sat-Sun</Card.Subtitle>
                <Card.Text>Give Missed Call-08873459012</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
