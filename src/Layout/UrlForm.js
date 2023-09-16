import React,{useEffect, useState} from 'react'

import axios from 'axios';
import './UrlForm.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SpinnerBar from './spinner';

const fetchSEOData= async(url,apilogin,apipassword)=>{
    const post_array = [];
    post_array.push({
      "url": url,
      "enable_javascript": true,
      "custom_js": "meta = {}; meta.url = document.URL; meta;"
    });
    try{
    
    const response= await axios({
      method: 'post',
      url: 'https://api.dataforseo.com/v3/on_page/instant_pages',
      auth: {
        username:apilogin ,
        password: apipassword
      },
      data: post_array,
      headers: {
        'content-type': 'application/json'
      }
    })
    if(response){
      return response;
    }
  }    
    catch(error){
      console.log(error)
    
            
}
}

const UrlForm = ({setItems}) => {
    let [url,setUrl]=useState("")
    let [isloading,setIsloading]=useState(false)
    const [seoresponses, setSeoresponses]=useState([])
    const [task,setTask]=useState([])
    const [itemsArr,setItemArr]=useState([]);
    let [updatedurl,setupdatedUrl]=useState('')
    let normalizedUrl='';


    

     const handleSubmit= async (e)=>{
      setIsloading(true)
      setItems([])
        e.preventDefault();
        if(url){
             normalizedUrl = url.trim();
                     if (!normalizedUrl.startsWith('https://')) {
                        normalizedUrl = 'https://' + normalizedUrl;
                     }
                     setupdatedUrl(normalizedUrl)
        console.log("normalurl",normalizedUrl)

        const apilogin=process.env.REACT_APP_API_LOGIN;
        console.log(apilogin)
        console.log(process.env)
        const apipassword=process.env.REACT_APP_API_PASSWORD;
        console.log(apipassword);
        const seoResponse= await fetchSEOData(normalizedUrl,apilogin,apipassword);
        setSeoresponses(seoResponse)
        let tasks=seoResponse.data.tasks ||[]
   
        setTask(tasks)
        if (tasks.length > 0 && tasks[0].result) {
          const resultArray = tasks[0].result;
          const items = seoResponse.data.tasks[0].result[0].items;
          setIsloading(false)
          setItems(items)
          console.log("items",items)
          
        }
                    }
                    
        }

     
  return (
  
  <div className="d-flex flex-column align-items-center h-50 mt-5">
   <Form className="d-flex flex-row align-items-center" onSubmit={handleSubmit}>
        <Form.Group className='mr-3'>
          <Form.Control placeholder="Enter  Website URL"
           className="custom-input-width"
            value={url}
            onChange={(e)=>setUrl(e.target.value)}/>
        </Form.Group>
        <Button className='btn-sm custom-margin' variant="primary" type="submit">
          Get SEO 
        </Button>
      </Form>
      {isloading && (<SpinnerBar website={updatedurl}/>)}
          
    </div>
        
         
  
  )
}

export default UrlForm
  {/* <form className='search-form' onSubmit={handleSubmit}>
             <input type="text" placeholder='Enter url'
            value={url}
             onChange={(e)=>setUrl(e.target.value)}></input>
            <button className='search-btn' >Check url</button>
        </form> */}
        // </div>