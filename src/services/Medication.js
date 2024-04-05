import axios from 'axios'
const Base_URL= "http://localhost:8080/api/medication";
import { getToken } from './AuthService';
axios.interceptors.request.use(
    function (config) {
    config.headers["Authorization"]= getToken();
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
export const getAllMedication=()=>axios.get(Base_URL);

 export const getMedicine=(id)=>axios.get(Base_URL+ "/" + id);

 export const addMedicine=(medicine)=>axios.post(Base_URL,medicine);

 export const deleteMedicine=(id)=>axios.delete(Base_URL+"/"+id);

 export const updateMedicine=(id,medicine)=>axios.put(Base_URL+"/"+id,medicine);
