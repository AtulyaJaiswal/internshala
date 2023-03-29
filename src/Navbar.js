import React, { Fragment } from 'react'
import "./navbar.css";
import Hovering from "./Hovering.js";

const Navbar = () => {
  return (
    <Fragment>
          <div className='navbar'>
               <p>HOME <Hovering/></p>
               <p>STOCK MARKET COURSES <Hovering/></p>
               <p>SCREENERS <Hovering/></p>
               <p>ANALYSIS TOOLS <Hovering/></p>
               <p>TRADING TOOLS <Hovering/></p>    
               <p>KNOWLEDGE BASE <Hovering/></p>
               <p>JOB ORIENTED COURSES (PRARAMBH) <Hovering/></p>
          </div>
     </Fragment>
  )
}

export default Navbar