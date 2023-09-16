import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
const Bar = ({color,label,value}) => {
    


  return (
  <ProgressBar now={value}  label={`${label} ${value}`} variant={color}  style={{width:"80%",height:"20px"}} />
  )
}

export default Bar