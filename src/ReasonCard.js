import React, { useEffect, useState } from 'react'

const ReasonCard = ({ind,rea}) => {

  const[col,setCol] = useState();
  const[bCol,setBCol] = useState();

  useEffect(() => {
    if(ind===0){
      setCol("purple");
      setBCol("rgb(254, 108, 254)");
    }
    else if(ind===1){
      setCol("orange");
      setBCol("rgb(249, 204, 119)");
    }
    else if(ind===2 || ind===4){
      setCol("red");
      setBCol("rgb(250, 128, 128)");
    }
    else if(ind===3){
      setCol("blue");
      setBCol("rgb(134, 134, 249)");
    }
    else if(ind===5){
      setCol("rgb(0, 155, 206)");
      setBCol("lightblue");
    }
  }, []);


  return (
    <div className='reasonCard'>
      <button 
      style={
        {color: col, backgroundColor: bCol}
      }
      >{ind+1}</button>
      <div>
        <p>{rea.data}</p>
      </div>
    </div>
  )
}

export default ReasonCard