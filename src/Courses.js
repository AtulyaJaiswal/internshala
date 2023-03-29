import React, { Fragment } from 'react'
import {data} from "./data";
import CourseCard from "./CourseCard.js";
import "./courses.css";

console.log(data.course);

const Courses = () => {
  return (
     <Fragment>
          <div className='courses'>
               {data.course && 
                    data.course.map((details) => (
                         <CourseCard details={details}/>
               ))}
          </div>
     </Fragment>
  )
}

export default Courses;