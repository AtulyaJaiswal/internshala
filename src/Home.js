import React, { Fragment } from 'react';
import "./home.css";
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Pic9 from "./Images/pic9.png";
import Pic1 from "./Images/pic1.png";
import Pic2 from "./Images/pic2.png";
import Pic3 from "./Images/pic3.png"


const Home = () => {
  return (
    <Fragment>
          <div className='home'>
               <div className='home_top'>
                    <img 
                         src={Pic9}
                    />
                    <div>
                         <SearchIcon/>
                         <input
                              placeholder='Search for investment, trading & analysis'
                         />
                    </div>
                    <button>Login/SignUp</button>
               </div>
               <div className='home_mid'>
                    <div>
                         <div className='home_mid_1'>
                              <p className='p1'>Up Your 
                                   <span style={{color:"green"}}> Finance Skills</span>
                              </p>
                              <p className='p2'>
                                   To
                                   <span style={{color:"green"}}>Advance </span>
                                   Your
                              </p>
                              <p className='p2'>
                                   <span style={{color:"green"}}>Career </span>
                                   Path
                              </p>
                         </div>
                         <div className='home_mid_2'>
                              <p className='p3'>Learn Stock Market Trading from N.I.S.M & CFA Certified Financial experts</p>
                              <p className='p3'>Download Tradeg learning app today.</p>
                         </div>
                         <div className='home_mid_3'>
                              <button className='btn1'>Get Started</button>
                              <button className='btn2'>Free Trial</button>
                         </div>
                         <div className='home_mid_4'>
                              <div>
                                   <RecordVoiceOverOutlinedIcon style={{color:"rgb(146, 146, 9)"}}/>
                                   <p>Interactive sessions</p>
                              </div>
                              <div>
                                   <ShoppingBasketOutlinedIcon style={{color:"red"}}/>
                                   <p>Career-Oriented</p>
                              </div>
                              <div>
                                   <LightbulbOutlinedIcon style={{color:"purple"}}/>
                                   <p>Creative Thinking</p>
                              </div>
                         </div>
                    </div>
                    <img 
                         className='image1'
                         src={Pic1}
                    />
               </div>
               <div className='home_lower_mid'>
                    <img
                    className='image2'
                    src={Pic2}
                     />
                    <div>
                         <h3>Welcome to 
                              <span style={{color:"green"}}> TRADeg Financial</span>
                         </h3>
                         <div className='underline'></div>
                         <p>TRADeg is a stock market training and analysis Firm, we are one of the fastest growing</p>
                         <p>TRADeg is a stock market training and analysis Firm, we are one of the fastest growing
                         organization in India.The purpose of TRADeg is to provide a right way of trading to the
                         retail traders and a perfect training to the one who wants to enter in stock market</p>
                         <p>The social trading days are over. Today‘s retail Traders are as Capable as professional
                         traders. Our motto is to empower Retail Traders oi India and We are focused to provide a</p>
                         <p>Technical overview of the market on daily basis as well as Learnings and tools to Retail</p>
                         <p>Technical overview of the market on daily basis as well as Learnings and tools to Retail</p>
                         <p>Traders across the country.</p>
                         <button className='btn3'>Discover</button>
                    </div>
               </div>
               <div className='home_lower'>
                    <div>
                         <h3>Learn Investment & Trading with
                              <span style={{color:"green"}}> Industry Experts</span>
                         </h3>
                         <div className='underline'></div>
                         <p>"Take control of your financial future with our comprehensive financial learning app. From</p>
                         <p>"Take control of your financial future with our comprehensive financial learning app. From
                         Stock Investment and Mutual funds & Sips to Stock trading & Scalping, we have
                         everything you need to make informed financial decisions."</p>
                         <p>"TrodeG learning app is designed to empower you with the knowledge and skills you need
                         to succeed financially. From beginners to experienced investors, we have something for
                         everyone."</p>
                         <button className='btn3'>Discover</button>
                    </div>
                    <img
                         className='image3'
                         src={Pic3}
                     />
               </div>
          </div>
     </Fragment>
  )
}

export default Home