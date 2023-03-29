import React, { Fragment } from 'react';
import "./benefits.css";
import Pic4 from "./Images/pic4.png";
import Pic5 from "./Images/pic5.png";
import Pic6 from "./Images/pic6.png";
import { benefitsData } from './benefitsData';
import { benefitsReason } from './benefitReason';
import BenefitCard from "./BenefitCard.js";
import ReasonCard from "./ReasonCard.js"


const Benefits = () => {
  return (
     <Fragment>
          <div className='benefits'>
               <div className='benefits_heading'>
                    <p>Separate the wheat from the chaff with Our Screeners - handy for sorting </p>
                    <p>symbols both by fundamental and technical indicators.</p>
               </div>
               <div className='benefits_mid1'>
                    <img
                         src={Pic4}
                         alt="Pic4"
                    />
                    <div>
                         <div>
                              <ul>
                                   <li>Equity Screener</li>
                                   <li>Forex Screener</li>
                                   <li>Crypto Screener</li>
                              </ul>
                         </div>
                         <button>Explore Now</button>
                    </div>
               </div>
               <div className='benefits_mid2'>
                    <img
                         src={Pic5}
                         alt="Pic5"
                    />
               </div>
               <div className='benefits_mid3'>
                    <img
                         src={Pic6}
                         alt="Pic6"
                    />
                    <div>
                         <p>Be a Pro trader! Use our trading tools to enhance your trading journey</p>
                         <div>
                              <ul>
                                   <li>ADVANCED CURRENCY CONVERTER</li>
                                   <li>MARGIN REQUIREMENT CALCULATOR</li>
                                   <li>CFD TECHNICAL INDICATOR</li>
                                   <li>HISTORICAL DATA EXPORT</li>
                                   <li>PIVOT POINT CALCULATOR</li>
                                   <li>FIBONACCI CALCULATOR</li>
                                   <li>FOREX POSITION SIZE CALCULATOR</li>
                                   <li>FOREX PROFIT CALCULATOR</li>
                              </ul>
                         </div>
                         <button>Explore Now</button>
                    </div>
               </div>
               <div className='benefits_mid4'>
                    <p>BENEFITS OF OUR ONLINE</p>
                    <p style={{color:"green"}}>FINANCE SCHOOLS <span></span></p>
                    <div>
                         {benefitsData.benefits && 
                              benefitsData.benefits.map((benefit, i) => (
                                   <BenefitCard ind={i} benefit={benefit}/>
                         ))}
                    </div>
               </div>
               <div className='benefits_mid5'>
                    <p>Reasons: Why you should Learn 
                         <span style={{color:"green"}}> Finance </span>
                         at
                         <span style={{color:"green"}}> TRADeg Financial</span>
                    </p>
                    <div>
                         {benefitsReason.reason && 
                              benefitsReason.reason.map((rea,i) => (
                                   <ReasonCard ind={i} rea={rea}/>
                         ))}
                    </div>
               </div>
          </div>
     </Fragment>
  )
}

export default Benefits