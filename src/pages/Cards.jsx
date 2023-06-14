import axios from "axios"
import React, { useEffect, useState} from "react"
import { Link } from "react-router-dom"


//const API_URL = "https://calm-gray-sawfish-tie.cyclic.app";
const API_URL = "http://localhost:3000";

function Cards() {
    const [cards, setCards] = useState([]);

    const getCards = () => {

        const storedToken = localStorage.getItem("authToken");

        // useState Hook stores and displays all cards from the stte
        axios.get(`${API_URL}/cards`,
        { headers: { Authorization: `Bearer ${storedToken}` }}
        )
        .then((response) => setCards(response.data))
        .catch((error) => console.log(error));
    };
    useEffect(() => {
        getCards();
    }, [])

  return (
    <div className="card-top d-flex">
                {cards.map((card) => (
                   <div key={card._id} className="card-setup d-flex card rounded-5">
                    <div className="card-middle">
                    <div className="image-wrapper">
                    <img src={card.image} className="card-img-top" alt="card-img" />
                    </div>
                    <div className="card-body d-flex align-items-center flex-column">
                    <h3>{card.title}</h3>
                    <h3>{card.release}</h3>
                    </div>
                    <div className="card-button d-flex justify-content-center">
                    <Link to={`/cards/${card._id}`}>
                    <button>Details</button>
                    </Link>
                    </div>
                    </div>
                    </div>
                  
        ))}
        
    </div>
  
  );
  }
export default Cards


   /*function Cardshow() {
      if (cards.length % 2 === 0) {
        return !reveal &&
        onClick.setReveal(true)
      } else 
      return reveal &&
      onClick.setReveal(false)
    };
    Cardshow();*/
    

   {/*useEffect(() => {
        axios.get(
            `${API_URL}/cards`)
            .then (response => {
                setCards(cards)
            })
    }, []);*/}

     {/*{cards.map((card) => (
<div key={card._id} className="card-setup2 d-flex card rounded-5 vw-25 min-vh-25" onClick={() => setReveal(true)}>
                    <div className="card-middle">
                    <div className="image-wrapper">
                    <img src={card.image} className="card-img-top min-vh-50 min-vw-25" style={{height: "250px", width: "400px"}} alt="card-img" />
                    </div>
                    <div className="d-flex align-items-center flex-column">
                    <h2>Card</h2>
                    <h3>{card.title}</h3>
                    <h3>{card.release}</h3>
                    </div>
                    <div className="card-button d-flex justify-content-center">
                    <Link to={`/cards/${card._id}`}>
                    <button>Edit</button>
                    </Link>
                    </div>
                    </div>
                    </div>
        ))[1]},

{cards.map((card) => (
<div key={card._id} className="card-setup d-flex card rounded-5 vw-25 min-vh-25" onClick={() => setReveal(true)}>
                    <div className="card-middle">
                    <div className="image-wrapper">
                    <img src={card.image} className="card-img-top min-vh-50 min-vw-25" style={{height: "250px", width: "400px"}} alt="card-img" />
                    </div>
                    <div className="d-flex align-items-center flex-column">
                    <h2>Card</h2>
                    <h3>{card.title}</h3>
                    <h3>{card.release}</h3>
                    </div>
                    <div className="card-button d-flex justify-content-center">
                    <Link to={`/cards/${card._id}`}>
                    <button>Edit</button>
                    </Link>
                    </div>
                    </div>
                    </div>
))[2]}*/}
