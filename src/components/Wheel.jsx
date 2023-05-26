import React from 'react'

function Wheel() {

  return (
    <div className="wheel-top">
    <div className="wheel">
<div className="wheel-wrapper">
  <div className="wheel-laser"></div>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="wheel-pic" 
width="200.93" height="32" preserveAspectRatio="xMidYMid meet" 
viewBox="400 80 500 200">


<circle className="st0" cx="500" cy="500" r="302.8">
  <animateTransform attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 500 500"
                    to="360 500 500"
                    dur="100s"
                    repeatCount="indefinite"/>
</circle>

<circle className="st1" cx="500" cy="500" r="237.7">
    <animateTransform attributeType="xml"
                      attributeName="transform"
                      type="rotate"
                      from="0 500 500"
                      to="360 500 500"
                      dur="40s"
                      repeatCount="indefinite"/>
</circle>

<circle className="st2" cx="500" cy="500" r="366.8" transform="rotate(0 500 500)">
  <animateTransform attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 500 500"
                    to="-360 500 500"
                    dur="50s"
                    repeatCount="indefinite"/>
</circle>

<circle className="st3" cx="500" cy="500" r="385.1"></circle>


<circle className="st4" cx="500" cy="500" r="150">
<animateTransform  attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 500 500"
                    to="-360 500 500"
                    dur="50s"
                    repeatCount="indefinite"/>
  </circle>

<div>

</div>

</svg>
</div>


  </div>
</div>
  )
}

export default Wheel