import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// Pages
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Cards from "./pages/Cards"
import CardAdd from './pages/CardAdd'

// Components
import Navbar from './components/Navbar'
import Private from "./components/Private";  
import Anon from "./components/Anon";
import CardDetails from './components/CardDetails'
import UpdateCard from './components/UpdateCard'
import Wheel from './components/Wheel'
import Header from "./components/Header"
//import Sound from "./components/Sound";
import Cursor from "./components/Cursor"
import Transition from "./pages/transitions/Transition"

// Test
//import Test from "./tests/test"

 

function App({move, setMove, changeLand, changeMove}) {

  const [show, setShow] = useState(true);
  const [landing, setLanding] = useState(false)

  
  return (
    <div className="App">
      {!move & !landing ?  (
        <Routes>
         <Route path="/" element={<Transition move={move} setMove={setMove} landing={landing} setLanding={setLanding}/>}/>
         </Routes>
      ) : (

     <div className="animation-top"> 
<div>
     <Cursor></Cursor>
     <Header></Header>
      <Wheel></Wheel>
      {!show && (
        <div className="wheel-laser"></div>
      )}</div>

      <div className="App-wrapper" style={{ display: "flex"}}>

        {/*<Sound>*/}
        <Navbar setShow={setShow} show={show}> {/*show ? <Route /> : <Route />*/} </Navbar>
        {/*</Sound>*/}

        {
          // If I'm not showing NavBar completely, show the pages
          !show && (
      <div className="without-navbar">
     <Routes>
      
      {/*<Route path="/test" element={<Test />} />*/}
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Anon> <Signup /> </Anon>} />
      <Route path="/login" element={<Anon> <Login /> </Anon>} />
      <Route path="/profile" element={<Private> <Profile /> </Private>} />
      <Route path="/cards" element={<Private> <Cards /> </Private>} />
      <Route path="/cards/:cardId" element={<Private><CardDetails /></Private>} />
      <Route path="cards/edit/:cardId" element={<Private><UpdateCard /></Private>} />
      <Route path="/cards/create" element={<Private> <CardAdd/> </Private>} />
     </Routes>
     </div>
          )
}
      </div>
      </div>
      )}
    </div>
  )
}

export default App
