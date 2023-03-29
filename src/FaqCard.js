import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import "./faq.css";


const FaqCard = ({i,q}) => {

     const [arrow,setArrow]= useState(false);
     const changeArrow = () =>{
          setArrow(!arrow);
     }
  return (
    <div className='faqCard'>
          <div className='faqCard_top'>
               <div>
                    <p>{i+1}</p>
                    <p>{q.ques}</p>
               </div>
               {arrow ? <KeyboardArrowUpIcon onClick={changeArrow}/> : <KeyboardArrowDownIcon onClick={changeArrow}/>}
          </div>
          <div className='faqCard_mid'>
               {arrow ? (
                    <div>
                         <p>{q.ans}</p>
                         <div>
                              <FacebookIcon/>
                              <TwitterIcon/>
                              <LinkedInIcon/>
                              <AttachFileIcon/>
                         </div>
                    </div>
               ) : (
                    <div></div>
               )}
          </div>
          <div className='faqCard_bottom'></div>
    </div>
  )
}

export default FaqCard