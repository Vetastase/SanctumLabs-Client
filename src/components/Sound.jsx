import React, { useState } from "react"
import audio from "../assets/sounds/NavbarSound.mp3"

function Sound() {

   playAudio = () => {
    new Audio(audio).play();
   }

  }
  
export default Sound;