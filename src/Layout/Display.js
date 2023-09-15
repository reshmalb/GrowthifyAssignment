import './Display.css'
import Card from '../card/Card'

import React from 'react';

const Display = ({ items }) => {
  const firstItem = items[0];
  if (!items || items.length === 0) {
    return <p>No data available.</p>;
  }

  // Arrange data into arrays
  const checks = firstItem.checks;
  const check=[
    {key:""}
]
  const duplicates = [
    { key: 'duplicate_content', value: firstItem.duplicate_content=== true? ' Containing Duplicates':" Not contains duplicates" },
    { key: 'duplicate_description', value: firstItem.duplicate_description===true ?'Containing Duplicate Description':'Not Containing Duplicate description' },
    { key: 'duplicate_title', value: firstItem.duplicate_title===true? 'Containing duplicate title ':' Not Containing duplicate title' },
  ];

  const data = [  
   
    { key: 'onpage_score', value: firstItem.onpage_score },
    { key: 'resource_type', value: firstItem.resource_type },

  ];
  const errors = firstItem.resource_errors.errors;
  const htags = firstItem.htags;
  const content = firstItem.meta.content;

  return (
    <div className="card-container">
      {/* <h1>Checks</h1>
      {Object.entries(checks).map(([key1, value], index) => (
    <ul style={{listStyle:"none"}}>
       <Card key={index} keyName={key1} value={value} />
    </ul>  
    ))} */}
    <h1><u> Duplicates</u></h1>
      {duplicates.map(({ key, value }, index) => (
  <ul style={{ listStyle: "none" }} key={index}>
    <Card keyName={key} value={value} />
  </ul>
      ))}
         <h1><u> Data</u></h1>
      {data.map(({ key, value }, index) => (
  <ul style={{ listStyle: "none" }} key={index}>
    <Card keyName={key} value={value} />
  </ul>
      ))}
      
     {/* <h1>Data</h1>
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
      <h1>Errors</h1> */}
      {/* {errors.map((error, index) => (
        <Card key={index} item={error} />
      ))}
      <h1>HTags</h1>
      {htags.map((htag, index) => (
        <Card key={index} item={htag} />
      ))}
      <h1>Content</h1>
      {content.map((item, index) => (
        <Card key={index} item={item} />
      ))} */}
    </div>
  );
};

export default Display;
