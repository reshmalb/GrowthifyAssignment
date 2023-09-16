import React, { useEffect, useState } from "react";

import axios from "axios";
import "./UrlForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SpinnerBar from "./spinner";

const fetchSEOData = async (url, apilogin, apipassword) => {
  const post_array = [];
  post_array.push({
    url: url,
    enable_javascript: true,
    custom_js: "meta = {}; meta.url = document.URL; meta;",
  });
  try {
    const response = await axios({
      method: "post",
      url: "https://api.dataforseo.com/v3/on_page/instant_pages",
      auth: {
        username: apilogin,
        password: apipassword,
      },
      data: post_array,
      headers: {
        "content-type": "application/json",
      },
      timeout: 10000,
    });
    if (response.status === 200) {
      return response;
    } else {
      throw new Error("API request failed with status code: " + response.status);
    }
  
  } catch (error) {
    if (error.response) {
      console.log("API Error Response Data:", error.response.data);
      console.log("API Error Response Status:", error.response.status);
    } else if (error.request) {
      console.log("No response received. Request made but no response.");
    } else {
      console.error("Error:", error.message);
    }
  }
};

const UrlForm = ({ setItems }) => {
  let [url, setUrl] = useState("");
  let [isloading, setIsloading] = useState(false);
  const [seoresponses, setSeoresponses] = useState([]);
  const [task, setTask] = useState([]);
  const [itemsArr, setItemArr] = useState([]);
  let [updatedurl, setupdatedUrl] = useState("");
  let normalizedUrl = "";

  const handleSubmit = async (e) => {
    setIsloading(true);
    setItems([]);
    e.preventDefault();
    if (url) {
      normalizedUrl = url.trim();
      if (!normalizedUrl.startsWith("https://")) {
        normalizedUrl = "https://" + normalizedUrl;
      }
      setupdatedUrl(normalizedUrl);
      const apilogin = process.env.REACT_APP_API_LOGIN;
      const apipassword = process.env.REACT_APP_API_PASSWORD;
      try {
        const seoResponse = await fetchSEOData(normalizedUrl, apilogin, apipassword);
  
        if (seoResponse && seoResponse.data && seoResponse.data.tasks && seoResponse.data.tasks.length > 0 && seoResponse.data.tasks[0].result) {
          const resultArray = seoResponse.data.tasks[0].result;
          const items = resultArray[0].items;
          setIsloading(false);
          setItems(items);
        setUrl("")

        } else {
          setIsloading(false);
          console.error("No SEO data found for the provided URL.");
          alert("No SEO data found for the provided URL.")
           setUrl("")

        }
      } catch (error) {
        setIsloading(false);
        setUrl("")
        console.error("An error occurred during the API request:", error);
        alert("An error occurred during the API request:", error)
      }
    }
  };

  return (
    <div className="d-flex flex-column align-items-center h-50 mt-5">
      <Form
        className="d-flex flex-row align-items-center"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mr-3">
          <Form.Control
            placeholder="Enter  Website URL"
            className="custom-input-width"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </Form.Group>
        <Button
          className="btn-sm custom-margin"
          variant="primary"
          type="submit"
        >
          Get SEO
        </Button>
      </Form>
      {isloading && <SpinnerBar website={updatedurl} />}
    </div>
  );
};

export default UrlForm;
