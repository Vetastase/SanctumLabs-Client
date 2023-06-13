import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
 
const API_URL = "https://calm-gray-sawfish-tie.cyclic.app";
//const API_URL = "http://localhost:3000";
 
function Signup(props) {
  // state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
 
  const navigate = useNavigate();
  
  // handler functions which will connect to inputs below
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUserName = (e) => setUserName(e.target.value);
 
  
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, username };
 
    // Make an axios request to the API
    // If the POST request is a successful redirect to the login page
    // If the request resolves with an error, set the error message in the state
    axios.post(`${API_URL}/signup`, requestBody)
      .then((response) => {
        // after signing up the user will be navigated to the login page
        navigate('/login');
      })
      // sends an error message if account already exist
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };
  
  return (
    <div className="signup-top d-flex flex-column">
        <div className="signup-setup card d-flex">
      <h1>Sign Up</h1>
 
      {/* Sends a POST request to the API_URL */}
      <form onSubmit={handleSignupSubmit} className="signup-form">
      <div className="signup-auth d-flex flex-column">
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          placeholder="Enter E-Mail"
        />
 
        <label>Password:</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          placeholder="Enter Password"
        />
 
        <label>Name:</label>
        <input 
          type="text"
          name="username"
          value={username}
          onChange={handleUserName}
          placeholder="Enter Name"
        />
        </div>

      <div className="signup-button d-flex justify-content-center">
        <button type="submit">Sign Up</button>
        </div>
      </form>
 
      { errorMessage && <p className="error-message">{errorMessage}</p> }
 
      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
    </div>
  )
}
 
export default Signup;