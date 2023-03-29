import React, { Fragment } from 'react';
import "./footer.css";
import Pic9 from "./Images/pic9.png";
import Pic13 from "./Images/pic13.jpg";
import Pic14 from "./Images/pic14.png";

const Footer = () => {
     return (
          <Fragment>
               <div className='footer'>
                    <div className='footer_top'>
                         <div>
                              <img
                                   src={Pic9}
                                   alt="pic9"
                              />
                         </div>
                         <div>
                              <img
                                   className='playStore'
                                   src={Pic13}
                                   alt="pic13"
                              />
                         </div>
                    </div>
                    <div className='footer_bottom'>
                         <div>
                              <ul>
                                   <li style={{color:"red"}}>HOME</li>
                                   <li>STOCK MARKET COURSES</li>
                                   <li>SCREENERS</li>
                                   <li>ANALYSIS TOOLS</li>
                                   <li>TRADING TOOLS</li>
                                   <li>KNOWLEDGE BASE</li>
                                   <li>JOB ORIENTED COURSES</li>
                              </ul>
                              <button>careers</button>
                         </div>
                         <div>
                              <h4>520-A MAIDANGARHI NEW DELHI-110017</h4>
                              <div>
                                   <p>WORKING HOURS</p>
                                   <p>MORNING 9:00 AM IST</p>
                                   <p>EVENING 10:00 PM IST</p>
                              </div>
                              <p style={{margin:"1.2rem 0"}}>Contact - +91 6287848943</p>
                              <p>For queries - <a href="mailto:info@trade.org">info@trade.org</a></p>
                              <p>For Careers - <a href="mailto:career@trade.org">career@trade.org</a></p>
                         </div>
                         <div>
                              <img
                                   src={Pic14}
                                   alt="pic14"
                              />
                         </div>
                    </div>
               </div>
          </Fragment>
     )
}

export default Footer