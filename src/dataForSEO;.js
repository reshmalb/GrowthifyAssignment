// src/services/dataForSEO.js
import axios from 'axios';
const API_KEY = 'your_api_key_here';

const dataForSEO = axios.create({
  baseURL: 'https://api.dataforseo.com/v3/on_page',
  headers: {
    'Content-Type': 'application/json',
  },
  auth:{
    login:"reshma.lb27@gmail.com",
    password:'ea1f3ecf733f58f7'
  }
});

export default dataForSEO;
