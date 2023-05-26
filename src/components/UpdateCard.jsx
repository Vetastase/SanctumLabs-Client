import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const API_URL = "http://localhost:3000";

function UpdateCard(props) {
  const [title, setTitle] = useState("");
  const [release, setRelease] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [genres, setGenres] = useState([]);
  const [media, setMedia] = useState("");
  const [text, setText] = useState("");

    const { cardId } = useParams();
    const navigate = useNavigate();
    const storedToken = localStorage.getItem("authToken");

    // Connection to CardDetails. There you edit.
    useEffect(() => {
        axios.get(`${API_URL}/cards/${cardId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
        )
        .then((response) => {

            const singleCard = response.data;
            setTitle(singleCard.title);
            setRelease(singleCard.release);
            setDescription(singleCard.description);
            setImage(singleCard.image);
            setVideo(singleCard.video);
            setGenres(singleCard.genres);
            setMedia(singleCard.media);
            setText(singleCard.text);

  })
  .catch((error) => console.log(error));

}, []);

function handleOptionChange(event) {
  setMedia(event.target.value);
}

function handleTextChange(event) {
  setText(event.target.value)
}

    const handleSubmit = (e) => {
        e.preventDefault();

    const requestBody = { title, release, description, image, video, genres, media, text };

    // PUT requests are used for updating 
  axios.put(
    `${API_URL}/cards/edit/${cardId}`, requestBody,
    { headers: { Authorization: `Bearer ${storedToken}` } }
  )
  .then((response) => {

    // After the update is successfull you revert back to CardDetails
    navigate("/cards");
  });
};

const deleteCard = () => {
    // DELETE request are used for deleting 
    axios.delete(`${API_URL}/cards/${cardId}`,
    { headers: { Authorization: `Bearer ${storedToken}` } }
  )
    .then(() => {

    // After the update is successfull you revert back to Cards
        navigate("/cards");
    })
    .catch((error) => console.log(error));
};

const options  = [
  { label: "Movies", value: "Movies ", active: "no"},
  { label: "Action", value: "Action " },
  { label: "Horror", value: "Horror " },
  { label: "Novel", value: "Novel " },
  { label: "Games", value: "Games ", active: "no"},
  { label: "Shooter", value: "Shooter " },
  { label: "RPG", value: "RPG " },
  { label: "Platformer", value: "Platformer " },
  { label: "Beat 'em up", value: "Beat 'em up " },
  { label: "Series", value: "Series ", active: "no"},
  { label: "Comedy", value: "Comedy " },
  { label: "Drama", value: "Drama " },
  { label: "Documentary", value: "Documentary " },
  { label: "Crime", value: "Crime" },
  { label: "Books", value: "Books ", active: "no"},
  { label: "Fantasy", value: "Fantasy " },
  { label: "Sci-Fi", value: "Sci-Fi " },
  { label: "Thriller", value: "Thriller " },
];


const handleChange = (e) => {
  const updatedOptions = [...e.target.options]
  .filter(option => option.selected)
  .map(x => x.value);
  setGenres(updatedOptions);
};
    

  return (
    <div className="card-add d-flex text-center flex-wrap flex-column">
      <div className="form-wrapper d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="add-form">
        <label>Title</label>
        <input type="text" className="title form-control" value={title} placeholder="Type an English title" onChange={(e) => setTitle(e.target.value)} />

        <label>Release</label>
        <input type="date" className="release form-control" value={release} onChange={(e) => setRelease(e.target.value)} />
        <input type="text" className="publisher form-control" value={release} placeholder="publisher" onChange={(e) => setRelease(e.target.value)} />

        <label>Description</label>
        <textarea type="text" className="description form-control" value={description} placeholder="Summary of the plot" rows="3" onChange={(e) => setDescription(e.target.value)} />

        <label>Image</label>
        <input type="link" className="image form-control" value={image} placeholder="https://example.com" pattern="https://.*" onChange={(e) => setImage(e.target.value)} />

        <label>Video</label>
        <input type="link" className="video form-control" value={video} placeholder="https://example.com" pattern="https://.*" onChange={(e) => setVideo(e.target.value)} />


        <div className="dropdown d-flex justify-content-center">
        <label className="d-flex flex-column">Genres
        <select onChange={handleChange} multiple value={genres} options={options} className="genres form-control" >
        <option defaultValue disabled>Select Genre/s</option>
        {/*<optgroup className="fw-bold" label="Movies"></optgroup>*/}
          {options.map(option => {
            return <option className="options-inner" disabled={option.active} value={option.value}>{option.label}</option>;
            {/*style={{ fontWeight: option.label ? "bold" : ""}}*/}
          })}
        </select>
      </label>
    </div>

    <div className="d-flex flex-row justify-content-center">
    <div className="radio">
      <label>Movies
        <input type="radio" value="movies" 
                      checked={media === "movies"} 
                      onChange={handleOptionChange} />
        </label>
    </div>

    <div className="radio">
      <label>Games
        <input type="radio" value="games" 
                      checked={media === "games"} 
                      onChange={handleOptionChange} />
      </label>
    </div>

    <div className="radio">
      <label>Series
        <input type="radio" value="series" 
                      checked={media === "series"} 
                      onChange={handleOptionChange} />
     </label>
    </div>

    <div className="radio">
      <label>Books
        <input type="radio" value="books" 
                      checked={media === "books"} 
                      onChange={handleOptionChange} />
     </label>
    </div>

    <div className="radio">
      <label>Miscellanous
        <input type="radio" value="miscellanous" 
                      checked={media === "miscellanous"} 
                      onChange={handleOptionChange} />
     </label>
     </div>
     <div className="other d-flex align-items-center">
     {media === "miscellanous" ?
      <input type="text" className="form-control" value={text} checked={media === "text"} onChange={handleTextChange} placeholder="Type other media genre" />
     :
     <input type="text" className="form-control" value={text} checked={media === "text"} onChange={handleTextChange} disabled></input>
}
</div>
 
    </div>
    <div className="edit-delete d-flex justify-content-center">
    <button type="submit">Edit</button>
    <button onClick={deleteCard}>Remove</button>
    </div>
    </form>
    </div>
  </div>
)
}



export default UpdateCard