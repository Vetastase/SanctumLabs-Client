import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import session from "../services/session";
import profiledefault from "../assets/images/profile-default.png"

const API_URL = "http://localhost:3000";

function Profile(props) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  // You can change userId to profileId
  const profileId = localStorage.getItem("userId");
   // ******** this method handles the file upload ********
   const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();
 
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);
 
    session
      .uploadImage(uploadData)
      .then(response => {
        // console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };
  
  const getProfile = () => {

    const storedToken = localStorage.getItem("authToken");

    axios.get(`${API_URL}/profile/${profileId}`,
    { headers: { Authorization: `Bearer ${storedToken}` } }
    )
    .then((response) => {
      const oneProfile = response.data;
      setUsername(oneProfile.username);
      setEmail(oneProfile.email);
      setImageUrl(oneProfile.imageUrl)
    })
    .catch((error) => console.log(error));
  };

  useEffect (() => {
    getProfile();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

  const requestBody = { username, email, imageUrl };
  const storedToken = localStorage.getItem("authToken");

  // PUT requests are used for updating 
  axios.put(
  `${API_URL}/profile/${profileId}`, requestBody,
  { headers: { Authorization: `Bearer ${storedToken}` } }
  )
  .then((response) => {

  // After the update is successfull you revert back to CardDetails
  navigate(`/profile`);
  });
  };
  

  return (
       <div className="profile-top d-flex">
       <div className="profile-setup card rounded-5 align-items-center">
                    <div className="profile-middle">
                  
      {!isEditing ?

<>
         <form onSubmit={handleSubmit}>
         <div className="profile-img-wrapper">
          { !imageUrl ?
         <img src={profiledefault} className="profile-default-img"  alt="" disabled />
        :
       <img src={imageUrl} className="profile-img"  alt="" disabled />
          }
        </div>
         <div className="profile-body d-flex align-items-center flex-column">
          <input value={username} className="profile-username text-center" onChange={(e) => {setUsername(e.target.value)}} disabled />
          <input value={email} className="profile-email text-center" onChange={(e) => {setEmail(e.target.value)}} disabled />
          </div>
          <div className="profile-button d-flex justify-content-center">
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
             {/* would be the edit stuff too
      <Link to={`/cards/${cardId}`}>*/}
        </form>
      {/*</Link> */}
        </>

:

  <> 
      <form onSubmit={handleSubmit}>
      <div className="profile-img-wrapper">
        {imageUrl ?
    <img src={imageUrl} className="profile-img" alt="" />
  :
  <img src={profiledefault} className="profile-default-img" alt="" />
  }
    </div>
    <div className="profile-body d-flex align-items-center flex-column">
          <input value={username} className="profile-username text-center" onChange={(e) => {setUsername(e.target.value)}} />
          <input value={email} className="profile-email text-center" onChange={(e) => {setEmail(e.target.value)}}  />
          </div>
             {/* would be the edit stuff too
      <Link to={`/cards/${cardId}`}>*/}
      <div className="profile-button d-flex align-items-center flex-column">
      <button onClick={() => setIsEditing(false)}>Submit</button>
      <label className="upload-profile" htmlFor="filePicker" style={{ background:"skyblue"}}>
      Upload Image
      </label>
      <input className="file-profile" id="filePicker" type={"file"} style={{visibility: "hidden"}} onChange={(e) => handleFileUpload(e)}/>
      </div>

     
      
        </form>
        </>

    }
    </div>
         </div>
         </div>
  );
}

export default Profile


  {/*const saveChanges = (event) =>  {

    event.preventDefault()

    setIsEditing(false)

  }*/}

      {/*:    
      {!isEditing ? 
        // The content that is displayed if I'm not editing (so, the beginning of the page)
        <>
             </>

             <h1>{username}</h1>
             <p>{email}</p>

             <button onClick={() => setIsEditing(true)}>Edit Profile</button>
:
       The content that is displayed if I'm editing
    
        <>
          <form onSubmit={handleSubmit}>
            <input className="username" value={username} onChange={(e) => {setUsername(e.target.value)}} />
            <input className="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
             input works like a button here  if form is not used you use button onClick and don't use input submit either 
            <input type="submit" value="Save Changes" />

          </form>
       
        </>

      }*/}
  