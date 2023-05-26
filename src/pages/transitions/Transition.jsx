import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import "./transition.css";
import audio from "../../assets/sounds/NavbarSound.mp3"

function Transition({setLanding, playAudio}) {

  const [move, setMove] = useState(false);



   playAudio = () => {
    setTimeout(() => {
    new Audio(audio).play();
  }, 100)
    }
     

  const changeMove = () => {
 
    setMove(false);
    setTimeout(() => {
      setMove(true)
    })
  }

  const changeLand = () => {
    {setMove === true
    setLanding(false);
    setTimeout(() => {
      setLanding(true)
    }, 500)
  }}


  const collection = document.getElementsByClassName("bubble-inner");
  for (let i = 0; i < collection.length; i++) {
   collection[i].style.transition = "all 1.2s 20ms";
  };

  /*const text = document.getElementsByClassName("sanctum-text");
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";
  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
  }
  
  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    const span = text.getElementsByClassName("span")[char];
    span.classList.add("fade");
    char++
    if (char === splitText.length) {
      complete();
      return;
    }
  }

  function complete() {
    clearInterval(timer);
    timer = null;
  }*/
  
    
  
  return (
<>
    <div className="bubble-bg"></div>
    <div className="bubble">
            <div className="circle"></div>
            <div className="inner-ring"></div>
            <div className="middle-ring"></div>
            <div className="outer-ring"></div>
            <div className="another-ring"></div>
            {!move ?
            <div className="bubble-inner" style={{position: "fixed", top: "23%", left: "35.5%", translateX:'-50%'}}>
              { /* Add two elements at once in onClick*/ }
            <Link className="bubble-link" onClick={() => {changeMove(); playAudio()}}>Sanctum Labs</Link>
            </div>
            :
            <div className="bubble-inner" style={{ position: "fixed", top: "23%", opacity: 1, left: "72%", maxWidth:'450px', zIndex: 1, translateX:'-50%'}}>
            <Link className="bubble-link" to="/home" onClick={changeLand}><h1 data-text="Sanctum&nbsp;Labs" className="sanctum-text">Sanctum Labs</h1></Link>
            </div>
}
    </div>
</>
  )
}

export default Transition