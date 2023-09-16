import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardItem({ heading, value }) {


  return (
    <Card style={{minWidth: '20rem',maxHeight:'10rem'}}>
      <Card.Header className="bg-success text-white" style={{minWidth: '3rem' }}>{heading}</Card.Header>
      <ListGroup variant="flush" >
     
          <ListGroup.Item
            className="text-black-bold small"
            style={{ height: '2rem' }}
          >
            {value}
          </ListGroup.Item>
    
      </ListGroup>
    </Card>
  );
}

export default CardItem;
