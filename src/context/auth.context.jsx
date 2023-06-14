import React, { useState, useEffect } from "react";
import axios from "axios";

//const API_URL = "https://calm-gray-sawfish-tie.cyclic.app";
const API_URL = "http://localhost:3000";

const AuthContext = React.createContext();
 
function AuthProviderWrapper(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  };

  const authenticateUser = () => {           //  <==  ADD  
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem('authToken');
    
    // If the token exists in the localStorage
    if (storedToken) {
      // We must send the JWT token in the request's "Authorization" Headers
      axios.get(
        `${API_URL}/verify`, 
        { headers: { Authorization: `Bearer ${storedToken}`} }
      )
      .then((response) => {
        // If the server verifies that the JWT token is valid  
        const user = response.data;
       // Update state variables        
        setLoggedIn(true);
        setLoading(false);
        setUser(user);        
      })
      .catch((error) => {
        // If the server sends an error response (invalid token) 
        // Update state variables         
        setLoggedIn(false);
        setLoading(false);
        setUser(null);        
      });      
    } else {
      // If the token is not available (or is removed)
        setLoggedIn(false);
        setLoading(false);
        setUser(null);      
    }   
  }
  
  const removeToken = () => {                    // <== ADD
    // Upon logout, remove the token from the localStorage
    localStorage.removeItem("authToken");
  }

  const logOut = () => {                   // <== ADD    
    // To log out the user, remove the token
    removeToken();
    // and update the state variables    
    authenticateUser();
  }  
  
  useEffect(() => {
    authenticateUser();
  }, []);
  
  /* 
    Functions for handling the authentication status (isLoggedIn, isLoading, user)
    will be added here later in the next step
  */
 
  return (
    <AuthContext.Provider value={{ loggedIn, loading, user, storeToken, authenticateUser, logOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}
 
export { AuthProviderWrapper, AuthContext };