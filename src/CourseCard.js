import React, { Fragment } from 'react';
import "./courses.css";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Pic10 from "./Images/pic10.png";
import FlagIcon from '@mui/icons-material/Flag';
import WatchLaterIcon from '@mui/icons-material/WatchLater';


const CourseCard = (d) => {

     const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
          height: 10,
          borderRadius: 5,
          [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
          },
          [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? 'green' : 'green',
          },
        }));

  return (
    <Fragment>
          <div className='course_body'>
               <div className='course_body_heading'>
                    <p>{d.details.heading}</p>
                    <button>LIVE</button>
               </div>
               <div className='course_body_date'>
                    <div>
                         <FlagIcon/>
                         <p>{d.details.date}</p>
                    </div>
                    <div>
                         <WatchLaterIcon/>
                         <p>{d.details.time}</p>
                    </div>
               </div>
               <div className='course_body_detail'>
                    <p>{d.details.body}</p>
               </div>
               <div className='course_body_mentor'>
                    <div className='course_body_mentor_detail'>
                         <h7>Mentors</h7>
                         <img
                              src={Pic10}
                              alt="pic10"
                         />
                    </div>
                    <div className='course_body_mentor_right'>
                         <div className='course_body_mentor_progress'>
                              <div>
                                   <h4>Batch Progress</h4>
                                   <p>{d.details.progress}% Seats filled</p>
                              </div>
                              {/* <div> */}
                              <BorderLinearProgress variant="determinate" value={d.details.progress} />
                              {/* </div> */}
                         </div>
                    </div>
               </div>
               <button>Explore More</button>
          </div>
    </Fragment>     
  )
}

export default CourseCard