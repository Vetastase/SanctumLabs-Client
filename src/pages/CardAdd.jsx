import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios';

const API_URL = "https://calm-gray-sawfish-tie.cyclic.app";


function CardAdd() {
  const [title, setTitle] = useState("");
  const [release, setRelease] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [genres, setGenres] = useState([]);
  const [media, setMedia] = useState("");
  const [text, setText] = useState("");


  function handleOptionChange(event) {
    setMedia(event.target.value);
  }

  function handleTextChange(event) {
    setText(event.target.value)
  }
   

const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  const requestBody = ({ title, release, description, image, video, genres, media, text });

  const storedToken = localStorage.getItem("authToken");

  axios.post(
    `${API_URL}/cards/create`, requestBody,
    { headers: { Authorization: `Bearer ${storedToken}` } }
  )
  .then((response) => {
    setTitle("");
    setRelease("");
    setDescription("");
    setImage("");
    setVideo("");
    setGenres([]);
    setMedia("")
    setText("")
   
    navigate("/cards");
  })
  .catch((error) => console.log("No card was added ", error));
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

    <button type="submit" className="button-add">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default CardAdd

 /* const [movies, setMovies] = useState(false);
  const [games, setGames] = useState(false);
  const [series, setSeries] = useState(false);
  const [books, setBooks] = useState(false);*/

  /*const [movies, setMovies] = useState(false)
  const [games, setGames] = useState(false)
  const [series, setSeries] = useState(false)
  const [books, setBooks] = useState(false)

  const handleMovie = () => {
  setMovies(!movies);
  };

  const handleGame = () => {
    setGames(!games);
    };

    const handleSeries = () => {
      setSeries(!series);
      };

      const handleBook = () => {
        setBooks(!books);
        };*/

         //setMovies(false);

         /*const handleChecked = (e) => {
}*/

{/*</div><label>Genres</label>
        <div className="dropdown">
      <select className="form-select genres" aria-label="Default select example" value={value} onChange={handleChange} multiple>
      <option defaultValue disabled>Select Genre/s</option>
        <optgroup className="fw-bold" label="Movies"></optgroup>
        <option value={Action} name={Action}  >Action</option>
        <option value={Horror} >Horror</option>
        <option value="Novel" >Novel</option>
        <optgroup className="fw-bold" label="Games"></optgroup>
        <option value="Shooter">Shooter</option>
        <option value="RPG">RPG</option>
        <optgroup className="fw-bold" label="Books"></optgroup>
        <option value="Fantasy">Fantasy</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Thriller">Thriller</option>
      </select>
</div>*/}

        {/*<div className="checkbox-wrapper">
        <fieldset className="field d-flex flex-column">
          <div className="choose d-flex">
          <legend className="check">Choose</legend>
          </div>
          <div className="choices d-flex flex-row align-items-center">
            <label className="container d-flex"><input type="radio" className="checkbox" checked={movies} value={movies} onChange={handleMovie} />  <span className="checkmark"></span>Movies</label>
            <label className="container d-flex"><input type="radio" className="checkbox" checked={games}  value={games} onChange={handleGame}  />  <span className="checkmark"></span>Games</label>
            <label className="container d-flex"><input type="radio" className="checkbox" checked={series}   value={series} onChange={handleSeries}  />   <span className="checkmark"></span>Series</label>
            <label className="container d-flex"><input type="radio" className="checkbox" checked={books}    value={books} onChange={handleBook} />   <span className="checkmark"></span>Books</label>
            <label className="container d-flex">Miscellanous<input type="radio" className="checkbox2" checked={checked} value={checkbox} onChange = {(e) => { if(checked) {setText('')} setChecked(!checked)}} />
            <span className="checkmark"></span></label>
             <input type="text" className="miscellanous" disabled={!checked} value={text} aria-label="miscellanous2" onChange={(e) => setText(e.target.value)} />  <span className="checkmark"></span>
            </div>
           
</fieldset>
        </div>
*/}