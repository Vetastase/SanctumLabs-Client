import React from 'react';
import { useState } from 'react';

function Cursor() {
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

   window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
   })



  return (
    <div>
    <div className="cursor"
    style={{left: cursorX + "px",
            top: cursorY + "px" }}>
    </div>
    </div>
  )}

export default Cursor
