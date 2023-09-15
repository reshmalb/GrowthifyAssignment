import React,{useState} from 'react';
import './App.css'
import UrlForm from './Layout/UrlForm';
import Display from './Layout/Display';

function App() {
  const [items,setItems]=useState([])

const setResponseItems=(items)=>{
  setItems(items)
  console.log(items,typeof(items))
}

  return (
    <div className='App'>   
      <UrlForm  setItems={setResponseItems}/>
      <Display  items={items||[]}/>
    
    </div>
  );
}

export default App;
