
import './App.css'
import Header from './Header'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AdminDashBoard from './components/AdminDashBoard'
import PatientList from './components/PatientList'
import UpdatePatient from './components/UpdatePatient'
import DoctorList from './components/DoctorList'
import UpdateDoctor from './components/UpdateDoctor'
import AppoinmentList from './components/AppoinmentList'
import AddDoctor from './components/AddDoctor'
import PatientComp from './components/PatientComp'
import CancelAppointment from './components/CancelAppointment'
import MedicationList from './components/MedicationList'
import AppointmentAdd from './components/AppointmentAdd';
import DoctorComp from './components/DoctorComp';
import AddPrescrip from './components/AddPrescrip';
import HomeComp from './components/HomeComp';
import AboutUs from './components/AboutUs';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';

function App() {
 

  return (
    <BrowserRouter>
        <Header/>
        <Routes >
          <Route path="/admin" element={<AdminDashBoard/>}></Route>
          <Route path="/patientList" element={<PatientList/>}></Route>
          <Route path="updatePatient/:id" element={<UpdatePatient/>}></Route>
          <Route path="/doctorList" element={<DoctorList/>}></Route>
          <Route path="/appointmentList" element={<AppoinmentList/>}></Route>
          <Route path="/updateDoctor/:id" element={<UpdateDoctor/>}></Route>
          <Route path="/addDoctor" element={<AddDoctor/>}></Route>
          <Route path="/user" element={<PatientComp/>}></Route>
          <Route path="/addAppointment/:id" element={<AppointmentAdd />}></Route>
          <Route path="/cancelAppointment" element={<CancelAppointment/>}></Route>
          <Route path="/medicationList" element={<MedicationList/>}></Route>
          <Route path="/doctor" element={<DoctorComp/>}></Route>
          <Route path="/addPrescription/:id" element={<AddPrescrip/>}></Route>
          <Route path="/" element={<HomeComp/>}></Route>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
          <Route path="/login" element={<LoginComponent/>}></Route>
          <Route path="/register" element={<RegisterComponent/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
