import "./Display.css";
import React, { useState } from "react";
import CardItem from "../card/Card";
import Bar from "./Bar";

const Display = ({ items }) => {
  const firstItem = items[0];
  const dataArray = [];

  if (!items || items.length === 0) {
    return <p>''</p>;
  }
  const checks = firstItem.checks;
  const content = firstItem.meta.content;
  const htags = firstItem.meta.htags;
  const errors = firstItem.resource_errors;
  const pagetimings = firstItem.page_timing;
  const onpagescore=firstItem.onpage_score;
  const size=firstItem.size;
  const domsize=firstItem.total_dom_size;
  const transferrate=firstItem.total_transfer_size;



  let totalTagCount = 0;

for (const tag in htags) {
  if (htags.hasOwnProperty(tag)) {
    if (htags[tag]) {
      totalTagCount += Array.isArray(htags[tag]) ? htags[tag].length : 1;
    }
  }
}

  console.log("content", content);
  console.log("errors", errors);
  console.log("htags", htags);
  console.log("pagetime", pagetimings);
  const htagarray = [{ key: "htag count", value: totalTagCount }];
  const errorData = [
    { key: "Errors", value: errors.errors=== null? 'No errors found':errors.errors.length },
    { key: "Warnings", value: errors.warnings ===null? 'No warnings found':errors.warnings.length },
  ];

  const timings = [
    { key: "Connection Time", value: pagetimings.connection_time },
    { key: "DOM complete Time", value: pagetimings.dom_complete },
    { key: "Download Time", value: pagetimings.download_time },
    { key: " Duration Time", value: pagetimings.duration_time },
    { key: " Fetch End Time", value: pagetimings.fetch_end },
    { key: " Time to interactive", value: pagetimings.time_to_interactive },
    {
      key: " Time to Secure Connection",
      value: pagetimings.time_to_secure_connection,
    },
    { key: " Waiting Time", value: pagetimings.waiting_time },
  ];

  const duplicates = [
    {
      key: "Duplicate Content",
      value:
        firstItem.duplicate_content === true
          ? " Containing Duplicates"
          : " Not contains duplicates",
    },
    {
      key: "Duplicate Description",
      value:
        firstItem.duplicate_description === true
          ? "Containing Duplicate Description"
          : "Not Containing Duplicate description",
    },
    {
      key: "Duplicate Title",
      value:
        firstItem.duplicate_title === true
          ? "Containing duplicate title "
          : " Not Containing duplicate title",
    },
  ];
  const data = [
    { key: "onpage_score", value: firstItem.onpage_score },
    { key: "resource_type", value: firstItem.resource_type },
  ];

  const contentDetails = [
    {
      key: "Automated Readability index",
      value: content.automated_readability_index,
    },
    {
      key: "Dale Chall Readability Index",
      value: content.dale_chall_readability_index,
    },
    { key: "Plain Text Rate ", value: content.plain_text_rate },
    { key: "Plain Text Size", value: content.plain_text_size },
    { key: "Plain Text word Count", value: content.plain_text_word_count },
    { key: "Smog Readability Index", value: content.smog_readability_index },
    {
      key: "Title to Content Consistency",
      value: content.title_to_content_consistency,
    },
  ];



  return (
    <div className="display-container">
      <div className="card-container">
        <Bar color={"success"} label={"On Page Score"} value={onpagescore}/>
        <Bar color={"warning"} label={"Size"} value={size}/>
        <Bar color={"danger"} label={"DOM Size"} value={domsize}/>
        <Bar color={"info"} label={"Transfer Size"} value={transferrate}/>


       </div>

      

      <h6 style={{marginTop:"10px",color:"yellow",marginLeft:"30px"}}>Content Analysis:</h6>

      <div className="card-container">
        {contentDetails.map(({ key, value }, index) => (
          <CardItem key={index} heading={key} value={value} />
        ))}
      </div>
      <h6 style={{marginTop:"10px",color:"yellow",marginLeft:"30px"}}>Duplicate content Analysis:</h6> 

      <div className="card-container">
        {duplicates.map(({ key, value }, index) => (
          <CardItem key={index} heading={key} value={value} />
        ))}
      </div>
      <h6 style={{marginTop:"10px",color:"yellow",marginLeft:"30px"}}>found the the following htag count:</h6>
    
      <div className="card-container">
        
        {htagarray.map(({ key, value }, index) => (
          <CardItem key={index} heading={key} value={value} />
        ))}
      </div>
      <h6 style={{marginTop:"10px",color:"yellow",marginLeft:"30px"}}>Timings:</h6>

      <div className="card-container">
        
        {timings.map(({ key, value }, index) => (
          <CardItem key={index} heading={key} value={value} />
        ))}
      </div>
      <h6 style={{marginTop:"10px",color:"yellow",marginLeft:"30px"}}>Error and warnings:</h6>

<div className="card-container">
  
  {errorData.map(({ key, value }, index) => (
    <CardItem key={index} heading={key} value={value} />
  ))}
</div>
      
    </div>
  );
};

export default Display;
