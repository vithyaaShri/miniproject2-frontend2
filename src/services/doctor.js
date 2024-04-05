import axios from 'axios'
const Base_URL= "http://localhost:8080/api/doctor";
import { getToken } from './AuthService';

axios.interceptors.request.use(
    function (config) {
    config.headers["Authorization"]= getToken();
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
export const getAllDoctors=()=>axios.get(Base_URL);

 export const getDoctor=(id)=>axios.get(Base_URL+ "/" + id);

 export const addDoctor=(doctor)=>axios.post(Base_URL,doctor);

 export const deleteDoctor=(id)=>axios.delete(Base_URL+"/"+id);

 export const updateDoctor=(id,doctor)=>axios.put(Base_URL+"/"+id,doctor);