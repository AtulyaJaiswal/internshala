import React, { useEffect, useState } from 'react';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';


const BenefitCard = ({ind,benefit}) => {
  const[icon,setIcon] = useState();
  useEffect(() => {
    if(ind===0){
      setIcon(<PeopleAltOutlinedIcon/>);
    }
    else if(ind==1){
      setIcon(<GridOnOutlinedIcon/>);
    }
    else if(ind===2){
      setIcon(<BookmarkAddedOutlinedIcon/>);
    }
    else if(ind===3){
      setIcon(<InsightsOutlinedIcon/>);
    }
    else if(ind===4){
      setIcon(<FlashOnOutlinedIcon/>);
    }
    else if(ind===5){
      setIcon(<CrisisAlertOutlinedIcon/>);
    }
  }, []);

  return (
    <div className='benefitCard'>
      <div>
        {icon}
      </div>
      <h4>
      {benefit.heading}
      </h4>
      <p>
        {benefit.data}
      </p>
    </div>
  )
}

export default BenefitCard