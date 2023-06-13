import axios from "axios";
 
const storedToken = localStorage.getItem('authToken');
const profile = axios.create({
  baseURL: "https://calm-gray-sawfish-tie.cyclic.app",
  //baseURL: "http://localhost:3000",
  headers: { Authorization: `Bearer ${storedToken}`} 
});
 
const errorHandler = (err) => {
  throw err;
};
 
const uploadImage = (file) => {
  return profile.post("/profile/upload", file)
    .then(res => res.data)
    .catch(errorHandler);
};

export default {
  uploadImage,
};
