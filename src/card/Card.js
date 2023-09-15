import React from 'react'
import './Card.css'

const Card = ({key,keyName,value}) => {
  return (
    < li style={{style:"none"}}>
           <h5>{keyName}:{value}</h5>
        
    </li>
  )
}

export default Card