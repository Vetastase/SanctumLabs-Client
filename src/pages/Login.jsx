import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
 
const API_URL = "https://calm-gray-sawfish-tie.cyclic.app";
 
 
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  
  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);
 
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
 
  // Login request to API Server Url containing email and password
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };
 
    // Verification of the requestBody properties
    axios.post(`${API_URL}/login`, requestBody)
      .then((response) => {
        //console.log("JWT token", response.data.authToken)
        
        // Save the logged in userId to later get profile information
        localStorage.setItem("userId", response.data.userId)
        storeToken(response.data.authToken);
        
        authenticateUser();
        navigate('/');                                 
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };
  
  return (
    <div className="login-top d-flex">
      <div className="login-setup card d-flex">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit} className="login-form">
      <div className="login-auth d-flex flex-column">
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
         </div>
        
        <div className="login-button d-flex justify-content-center">
        <button type="submit">Login</button>
        </div>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }
 
      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
    </div>
  )
}
 
export default Login;