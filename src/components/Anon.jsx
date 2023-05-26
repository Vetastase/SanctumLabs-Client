import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";
 
function Anon( { children } ) {
  
  const { loggedIn, loading } = useContext(AuthContext);
 
  // If the authentication is still loading 
  if (loading) return <p>Loading ...</p>;
 
  if (loggedIn) {
    // If the user is logged in, navigate to the home page     
    return <Navigate to="/home" />;
  } else {
    // If the user is not logged in, allow to see the page 
    return children;
  }
}
 
export default Anon;