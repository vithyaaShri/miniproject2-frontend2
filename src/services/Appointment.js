import axios from 'axios'
const Base_URL= "http://localhost:8080/api/Appointment";
import { getToken } from './AuthService';

axios.interceptors.request.use(
    function (config) {
    config.headers["Authorization"]= getToken();
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
export const getAllAppointments=()=>axios.get(Base_URL);

 export const getAppointment=(id)=>axios.get(Base_URL+ "/" + id);

 export const addAppointment1=(appointment)=>axios.post(Base_URL,appointment);

 export const deleteAppointment=(id)=>axios.delete(Base_URL+"/"+id);

 export const updateAppointment=(id,appointment)=>axios.put(Base_URL+"/"+id,appointment);
 export const cancelAppointment=(id)=>axios.put(Base_URL+"/cancelAppointment/"+id)