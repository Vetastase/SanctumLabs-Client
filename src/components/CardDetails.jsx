import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'

const API_URL = "https://calm-gray-sawfish-tie.cyclic.app";
//const API_URL = "http://localhost:3000";

function CardDetails (props) {
  const [card, setCard] = useState(null);
  // Retrieving cardId parameter from the URL with useParams() hook
  const { cardId } = useParams();
  
  const getCard = () => {

    const storedToken = localStorage.getItem("authToken");

    axios.get(`${API_URL}/cards/${cardId}`,
    { headers: { Authorization: `Bearer ${storedToken}` } }
    )
    .then((response) => {
      const singleCard = response.data;
      setCard(singleCard);
    })
    .catch((error) => console.log(error));
  };

  useEffect (() => {
    getCard();
  }, [])

  return (
    <div className="details-wrapper d-flex flex-wrap">
      {card && (
        <div className="details-card card d-flex">
        <div className="details-top">
        <div className="details-img-wrapper">
         <img src={card.image} className="details-img-top" alt="card-img" />
         </div>
         <div className="details-body text-white">
        <h1>{card.title}</h1>
        <p>{card.release}</p>
        <p>{card.description}</p>
        <p>Genre: {card.genres}</p>
        {card.media !== "Miscellanous" ?  <p>Media: {card.media}</p> : 
        <div><p>Media: {card.text}</p></div>  }
        </div>
        <div className="details-video-wrapper d-flex">
        <iframe className="details-video"
        src={card.video} title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" allowFullScreen/>
        </div>

      <div className="details-buttons d-flex justify-content-center">
      <Link to="/cards">
        <button style={{backgroundColor: "transparent", color: "white", borderColor: "white"}}>Back to Cards</button>
      </Link>

      
      <Link to={`/cards/edit/${cardId}`}>
        <button style={{backgroundColor: "transparent", color: "white", borderColor: "white"}}>Edit Card</button>
      </Link> 
      </div>
      </div>
      </div>
      )}
      </div>
  );
}

export default CardDetails