import React, { Fragment } from 'react'
import { faqAns } from './faqAns';
import FaqCard from "./FaqCard.js";
import "./faq.css";

const Faq = () => {
     return (
          <Fragment>
               <div className='faq'>
                    <h2>Frequently Asked Questions</h2>
                    <div>
                         {faqAns.qA && 
                              faqAns.qA.map((q,i) => (
                              <FaqCard i={i} q={q}/>
                         ))}
                    </div>
               </div>
          </Fragment>
     )
}

export default Faq