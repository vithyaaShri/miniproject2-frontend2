import React from "react";
import { Link } from "react-router-dom";
import hospitallogo from "../src/images/hospitallogo.jpg"
import FancyText from "@carefully-coded/react-text-gradient";
import { isAdminUser } from "./services/AuthService";
import { isUserLoggedIn,UserLoggedOut,isDoctorUser } from "./services/AuthService";
const Header = () => {

  const isAuth = isUserLoggedIn();
  const isAdmin = isAdminUser();
  const isDoctor=isDoctorUser();

  const handleLogOut = () => {
    UserLoggedOut();
    navigate("/login");
  };
  const divstyle1 = {
    marginRight: "20px",
  };
  const divStyle = {
    height: "80px",
  };
  return (
    
      <header>
        <nav
          className="navbar navbar-expand-md navbar-danger bg-primary bg-opacity-30"
          style={divStyle}
        >
          <div>
            <img
            src={hospitallogo}
            width="78"
            height="auto"
            
            className="d-inline-block align-top"
            alt=""
          />
            <a
              href="http://localhost:5173"
              className="navbar-brand text-center fw-bold "
            >
              <FancyText gradient={{ from: "#FFFFFF", to: "#FFFFFF" }}> 
              <h1>LILAVATI HOSPITAL</h1>
              </FancyText> 
            </a>
          </div>
          
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
            {!isAuth && (
              <li className="nav-item">
                <Link to="/login" className="nav-link fst-italic text-white">
                  Login
                </Link>
              </li>
              )}
              {!isAuth && (
              <li className="nav-item">
                <Link to="/register" className="nav-link fst-italic text-white">
                  Register
                </Link>
              </li>
              )}
              {isAuth && (
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link fst-italic text-white"
                  onClick={handleLogOut}
                >
                  Logout
                </Link>
              </li>
              )}

              {isAuth && isAdmin && (
              <li className="nav-item">
                <Link to="/admin" className="nav-link fst-italic text-white">
                  Admin Dashboard
                </Link>
              </li>
              )}
              {isAuth && !isAdmin && !isDoctor && (
              <li className="nav-item">
                <Link to="/user" className="nav-link fst-italic text-white">
                  User Dashboard
                </Link>
              </li>
              )}
              {isAuth && isDoctor && (
              <li className="nav-item">
                <Link to="/doctor" className="nav-link fst-italic text-white">
                  Doctor DashBoard
                </Link>
              </li>
              )}
            </ul>
          </div>
          <div style={divstyle1} className="text-white">
            HUMAN CARE!!!
          </div>
          {/* <img
          style={divstyle1}
          src={slogan}
          width="100"
          height="auto"
          className="d-inline-block align-top"
          alt=""
        /> */}
        </nav>
      </header>
    
  );
};

export default Header;
