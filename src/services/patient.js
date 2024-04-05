import axios from 'axios'
const Base_URL= "http://localhost:8080/api/patient";
import { getToken } from './AuthService';

axios.interceptors.request.use(
    function (config) {
    config.headers["Authorization"]= getToken();
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
export const getAllPatient=()=>axios.get(Base_URL);

 export const getPatient=(id)=>axios.get(Base_URL+ "/" + id);

 export const addPatient=(patient)=>axios.post(Base_URL,patient);

 export const deletePatient=(id)=>axios.delete(Base_URL+"/"+id);

 export const updatePatient=(id,patient)=>axios.put(Base_URL+"/"+id,patient);