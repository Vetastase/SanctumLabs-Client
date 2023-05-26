import React from "react";
import { Link} from "react-router-dom";
import { useContext } from "react";                     
import { AuthContext } from "../context/auth.context";

 
function Navbar({ show, setShow}) {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { 
    loggedIn,
    user,                   
    logOut             
  } = useContext(AuthContext);

  const collection = document.getElementsByClassName("nav-top");
  for (let i = 0; i < collection.length; i++) {
   collection[i].style.transition = "all 1.2s 20ms";
  };

  //  Update the rendering logic to display different content 
  //  depending on whether the user is logged in or not
  return (
    <div style={{ width: show ? "100%" : "20%" }} className="nav-top d-flex">
      <div className="nav-all">
        <div className="links">
          <div>
            <Link onClick={() => setShow(!show)} to="/home">Home</Link>
          </div>

          {loggedIn && (
            <div>
              <div>
                <Link onClick={() => setShow(!show)} to="/cards">Cards</Link>
              </div>
              <div>
                <Link onClick={() => setShow(!show)} to="/cards/create">Create Card</Link>
              </div>
              <div>
                <Link onClick={() => setShow(!show)} to="/profile">Profile</Link>
              </div>
              <div>
                <Link onClick={() => {
                  logOut()
                  setShow(!show)
                }} >Logout</Link>
                <span>{user && user.name}</span>
              </div>
            </div>
          )}

          {!loggedIn && (
            <div>
              <div>
              <Link onClick={() => setShow(!show)} to="/signup">Sign Up</Link>
              </div>
                <div>
                <Link onClick={() => setShow(!show)} to="/login">Login</Link>
                </div>
              </div>
          )}

        </div>
      </div>
    </div>
  );
}
 
export default Navbar;



 /* <div>
       <CSSTransition
       transitionName="example"
       transitionAppear={true}
       transitionAppearTimeout={500}
       transitionEnter={false}
       transitionLeave={false}/>*/

  /*const [move, setMove]= useState(0);
/* if (move.isCompleted)
  function accelerate() {
    setMove("0%")
  }*/

  /*return (
  <Link className="style" onClick={() => 
    setMove(1)} onAnimationEnd={() => setMove(0)} move={move}/>
)*/

/*const aRef = useRef<HTMLLinkElement>(null);

useEffect(() => {

const a = aRef.current;

if (!a) return;

const handleButtonClick = document.querySelector('.nav-top')
};

a.addEventListener('focus',  handleButtonClick);
  a.addEventListener(transitionEndEventName, onTransitionEnd);
  a.classList.add('expand');
  Link.addEventListener('focusout',)  
  a.classList.remove('expand');
return () => {
  a.removeEventListener("click", transitionEndEventName, onTransitionEnd);
};
}, []);*/