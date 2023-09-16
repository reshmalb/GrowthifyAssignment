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
  const checks = firstItem.checks ? firstItem.checks : {};
  const content = firstItem.meta ? firstItem.meta.content : {};
  const htags = firstItem.meta ? firstItem.meta.htags : {};
  const errors = firstItem.resource_errors ? firstItem.resource_errors : {};
  const pagetimings = firstItem.page_timing ? firstItem.page_timing : {};
  const onpagescore = firstItem.onpage_score ? firstItem.onpage_score : 0;
  const size = firstItem.size ? firstItem.size : 0;
  const domsize = firstItem.total_dom_size ? firstItem.total_dom_size : 0;
  const transferrate = firstItem.total_transfer_size
    ? firstItem.total_transfer_size
    : 0;

  let htagarray = [];
  let contentDetails = [];
  let errorData = [];
  let duplicates = [];
  let totalTagCount = 0;
  let timings = [];
  let checkArray=[];


  if(checks){
    checkArray=[
      {key:"Canonical",value:checks.canonical ===true? "true":"false"},
      {key:"Frame",value: checks.frame ===true? "true":"false"},  
      {key:"Flash",value:checks.flash ===true? "true":"false"},
      {key:"has_html_doctype",value:checks.has_html_doctype ===true? "true":"false"}, 
{key:"high_loading_time",value:checks.high_loading_time ===true? "true":"false"},
 {key:"high_waiting_time",value:checks.high_waiting_time ===true? "true":"false"},
      {key:"is_4xx_code",value:checks.is_4xx_code ===true? "true":"false"},
      {key:"is_5xx_code",value:checks.is_5xx_code ===true? "true":"false"},
      {key:"is_broken",value:checks.is_broken ===true? "true":"false"},
      {key:"is_http",value:checks.is_http ===true? "true":"false"},
      {key:"is_https",value:checks.is_https ===true? "true":"false"},
      {key:"seo_friendly_url",value:checks.seo_friendly_url ===true? "true":"false"},
      {key:"seo_friendly_url_keywords_check",value:checks.seo_friendly_url_keywords_check ===true? "true":"false"},
      {key:"seo_friendly_url_dynamic_check",value:checks.seo_friendly_url_dynamic_check ===true? "true":"false"},
      {key:"size_greater_than_3mb",value:checks.size_greater_than_3mb ===true? "true":"false"},
      {key:"title_too_long",value:checks.title_too_long ===true? "true":"false"},
      {key:"title_too_short",value:checks.title_too_short ===true? "true":"false"},




    ]
  }

  if (htags)
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

  htagarray = [{ key: "htag count", value: totalTagCount }];
  if (errors) {
    errorData = [
      {
        key: "Errors",
        value:
          errors.errors === null ? "No errors found" : errors.errors.length,
      },
      {
        key: "Warnings",
        value:
          errors.warnings === null
            ? "No warnings found"
            : errors.warnings.length,
      },
    ];
  }
  if (pagetimings) {
    timings = [
      {
        key: "Connection Time",
        value: pagetimings.connection_time
          ? pagetimings.connection_time
          : "No data given",
      },
      {
        key: "DOM complete Time",
        value: pagetimings?.dom_complete
          ? pagetimings.dom_complete
          : "No data given",
      },
      {
        key: "Download Time",
        value: pagetimings?.download_time
          ? pagetimings.download_time
          : "No data given",
      },
      {
        key: " Duration Time",
        value: pagetimings?.duration_time
          ? pagetimings.duration_time
          : "No data given",
      },
      {
        key: " Fetch End Time",
        value: pagetimings?.fetch_end ? pagetimings.fetch_end : "No data given",
      },
      {
        key: " Time to interactive",
        value: pagetimings?.time_to_interactive
          ? pagetimings.time_to_interactive
          : "No data given",
      },
      {
        key: " Time to Secure Connection",
        value: pagetimings?.time_to_secure_connection
          ? pagetimings.time_to_secure_connection
          : "No data given",
      },
      {
        key: " Waiting Time",
        value: pagetimings?.waiting_time
          ? pagetimings.waiting_time
          : "No data given",
      },
    ];
  }
  duplicates = [
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
  // const data = [
  //   { key: "onpage_score", value: firstItem.onpage_score? firstItem.onpage_score:0 },
  //   { key: "resource_type", value: firstItem.resource_type ?firstItem.resource_type},
  // ];

  if (content) {
    contentDetails = [
      {
        key: "Automated Readability index",
        value: content.automated_readability_index
          ? content.automated_readability_index
          : "No data given",
      },
      {
        key: "Dale Chall Readability Index",
        value: content.dale_chall_readability_index
          ? content.dale_chall_readability_index
          : "No data given",
      },
      {
        key: "Plain Text Rate ",
        value: content.plain_text_rate
          ? content.plain_text_rate
          : "No data given",
      },
      {
        key: "Plain Text Size",
        value: content.plain_text_size
          ? content.plain_text_size
          : "No data given",
      },
      {
        key: "Plain Text word Count",
        value: content.plain_text_word_count
          ? content.plain_text_word_count
          : "No data given",
      },
      {
        key: "Smog Readability Index",
        value: content.smog_readability_index
          ? content.smog_readability_index
          : "No data given",
      },
      {
        key: "Title to Content Consistency",
        value: content.title_to_content_consistency
          ? content.title_to_content_consistency
          : "No data given",
      },
    ];
  }

  return (
    <div className="display-container">
      <div className="bar-container">
        {onpagescore && (
          <Bar color={"success"} label={"On Page Score"} value={onpagescore} />
        )}
        {size && <Bar color={"primary"} label={"Size"} value={size} />}
        {domsize && (
          <Bar color={"success"} label={"DOM Size"} value={domsize} />
        )}
        {transferrate && (
          <Bar color={"primary"} label={"Transfer Size"} value={transferrate} />
        )}
      </div>

     {content &&(<h6 style={{ marginTop: "10px", color: "yellow", marginLeft: "30px" }}>
        On-Page Results:
      </h6>)}

      <div className="card-container">
        {contentDetails?.map(({ key, value }, index) => (
          <CardItem key={index} heading={key} value={value} />
        ))}
      </div>
      <h6 style={{ marginTop: "10px", color: "yellow", marginLeft: "30px" }}>
        Duplicate content Analysis:
      </h6>

      <div className="card-container">
        {duplicates.map(({ key, value }, index) => (
          <CardItem key={index} heading={key} value={value} />
        ))}
      </div>
 {htags &&( <h6 style={{ marginTop: "10px", color: "yellow", marginLeft: "30px" }}>
        Found the the following htag count:
      </h6>)}

      <div className="card-container">
        {htagarray.map(({ key, value }, index) => (
          <CardItem key={index} heading={key} value={value} />
        ))}
      </div>
    {pagetimings &&( <h6 style={{ marginTop: "10px", color: "yellow", marginLeft: "30px" }}>
        Timings:
      </h6>)}

      <div className="card-container">
        {timings.map(({ key, value }, index) => (
          <CardItem key={index} heading={key} value={value} />
        ))}
      </div>
      {checks &&( <h6 style={{ marginTop: "10px", color: "yellow", marginLeft: "30px" }}>
        Detailed Analysis :
      </h6>)}

      <div className="card-container">
        {checkArray.map(({ key, value }, index) => (
          <CardItem key={index} heading={key} value={value} />
        ))}
      </div>
     {errors &&( <h6 style={{ marginTop: "10px", color: "yellow", marginLeft: "30px" }}>
        Error and warnings:
      </h6>)}

      <div className="card-container">
        {errorData.map(({ key, value }, index) => (
          <CardItem key={index} heading={key} value={value} />
        ))}
      </div>
    </div>
  );
};

export default Display;
