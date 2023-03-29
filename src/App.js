import './App.css';
import { Fragment } from 'react';
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Courses from "./Courses.js";
import Benefits from "./Benefits.js";
import Faq from "./Faq.js";
import Footer from "./Footer.js";
import Pic7 from "./Images/pic7.png";
import Pic8 from "./Images/pic8.png";

function App() {
  return (
    <Fragment>
      <div>
        <Navbar/>
        <Home/>
        <div className='between'>Financial Courses by CFA & N.I.S.M Certified Finance Professionals</div>
        <Courses/>
        <div className='between'>Explore a new horizon of Technology with TradeG</div>
        <Benefits/>
        <img
          style={{width:"100%"}}
          src={Pic7}
          alt="pic7"
        />
        <Faq/>
        <Footer/>
        <img
          style={{width:"100%"}}
          src={Pic8}
          alt="pic8"
        />
      </div>
    </Fragment>
  );
}

export default App;
