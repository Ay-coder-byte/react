// import { useState, useEffect } from "react"
// import './App.css'
// import { FaCheck } from "react-icons/fa";
// function App() {
//  const [isFalse, setIsFalse] = useState(false)

//  useEffect(() => {
//   console.log(isFalse)
//  }, [])

// const handleDis = () => {
//   console.log('i am clicking')
//   setIsFalse(prev => !prev)
// }

//   return (
//     <div className="app">
//       <div className="child">
//        {
//         !isFalse && <p>My name is Ayo</p>
//        }
//         <button onClick={handleDis}>Click me</button>
//       </div>
//     </div>
//   )
// }

// export default App

// import { FaCheck } from "react-icons/fa";
// import { MdOutlineCancel } from "react-icons/md";
// import "./App.css";
// import { useState } from "react";

// const App = () => {
//   const [isToggle, setToggle] = useState(false);

//   const toggleCheck = () => {
//     console.log("i am toggling");

//     setToggle((a) => !a);
//   };

//   return (
//     <div className="app">
//       <div className="card">
//         <div className="ball-cont" onClick={toggleCheck}>
//           <div className={isToggle ? "ball move" :
//             "ball"
//           }></div>
//         </div>
//         <div className="check">
//           {isToggle ? <MdOutlineCancel /> : <FaCheck />}

//           <p>Dancing</p>
//         </div>
//         <div className="check">
//         {isToggle ? <MdOutlineCancel /> : <FaCheck />}

//           <p>Dancing</p>
//         </div>
//         <div className="check">
//         {isToggle ? <MdOutlineCancel /> : <FaCheck />}

//           <p>Dancing</p>
//         </div>
//         <div className="check">
//         {isToggle ? <MdOutlineCancel /> : <FaCheck />}

//           <p>Dancing</p>
//         </div>

//         {isToggle ? (
//           <div>
//             <div className="check">
//               <FaCheck />
//               <p>singing</p>
//             </div>
//             <div className="check">
//               <FaCheck />
//               <p>singing</p>
//             </div>
//             <div className="check">
//             <FaCheck />
//               <p>singing</p>
//             </div>
//             <div className="check">
//             <FaCheck />
//               <p>singing</p>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";
// import './App.css'

// function App() {
//   const [name, setName] = useState({
//     name:'ayo',
//     job: 'developer',
//     gender: 'male'
//   });

//   const handleClick = () => {
//     console.log("i am clicking");
//     setName(prev => {

//       const neww = {...prev, name: 'viktor'}

//       return neww
//     });
//   };
  
//     return (
//       <div className="parent">
//       <div className="child">
//         <p>Name: {name.name}</p>
//         <p>Job: {name.job}</p>
//         <p>Gender: {name.gender}</p>
//         <button onClick={handleClick}>Click Me</button>
//       </div>
//     </div>
  
    
//   );
// }



// export default App;


import React from "react";
import { useState } from "react";
import './App.css'
import Header from "./Header";
import Login from "./pages/Login";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from "./SignUp";
import Home from "./Home";
import DashBoard from "./Dashboard";


function App(){

  return(<div className="app">
     <Header />
     <Routes>
         <Route path="/" element = {<DashBoard/>}/>
        <Route path="/signup"  element = {<SignUp />} />
        <Route path="/login"  element ={<Login  />} />
     </Routes> 
  </div>
  )
}
export default App;