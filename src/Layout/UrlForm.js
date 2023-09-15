import React,{useEffect, useState} from 'react'

import axios from 'axios';
import './UrlForm.css'
import Card from '../card/Card';

const fetchSEOData= async(url)=>{
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
        username: 'reshma.lb27@gmail.com',
        password: 'ea1f3ecf733f58f7'
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
    let [taskID,setTaskId]=useState('')
    const [seoresponses, setSeoresponses]=useState([])
    const [task,setTask]=useState([])
    const [itemsArr,setItemArr]=useState([]);




     const handleSubmit= async (e)=>{
        e.preventDefault();
        if(url){
            let normalizedUrl = url.trim();
                     if (!normalizedUrl.startsWith('https://')) {
                        normalizedUrl = 'https://' + normalizedUrl;
                     }
        console.log("normalurl",normalizedUrl)
        const seoResponse= await fetchSEOData(normalizedUrl);
        setSeoresponses(seoResponse)
        let tasks=seoResponse.data.tasks ||[]
   
        setTask(tasks)
        if (tasks.length > 0 && tasks[0].result) {
          const resultArray = tasks[0].result;
          const items = seoResponse.data.tasks[0].result[0].items;
          setItems(items)
          console.log("items",items)
          resultArray.forEach(resultItem => {
            console.log('Crawl Gateway Address:', resultItem.crawl_gateway_address);
            console.log('Crawl Progress:', resultItem.crawl_progress);
            console.log('Crawl Status:', resultItem.crawl_status);
          
          });
        }
                    }
                    
        }

     
  return (
  
        <div className='form-container'>
            <form className='search-form' onSubmit={handleSubmit}>
             <input type="text" placeholder='Enter url'
            value={url}
             onChange={(e)=>setUrl(e.target.value)}></input>
            <button className='search-btn' >Check url</button>
        </form>
        </div>
          
        
         
  
  )
}

export default UrlForm