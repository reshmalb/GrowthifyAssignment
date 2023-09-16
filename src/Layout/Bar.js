import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
const Bar = ({color,label,value}) => {
    


  return (
  <ProgressBar now={value}  label={`${label} ${value}`} variant={color} 
   style={{width:"80%",height:"30px",fontSize:"20px",fontStyle:"bold",color:"black"}} />
  )
}

export default Bar