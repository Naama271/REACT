import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [term, setTerm] = useState([]);
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("hooks");

  useEffect( ()=>{
   const search = async () =>{
const {data} = await axios.get(`https://hn.algolia.com/api/v1/search?query=${input}`);

setTerm(data.hits);  

};
    
    search();
  }, [input]);

  
 const handleChange=(event)=>{
 setInput(event.target.value)
 console.log(input);
  }

  // console.log({data});
  return (<div>

      <input type="text" value={input} onChange={handleChange}></input>
      <div  className="list">
      {term.map(el=>
      <div> {el.title}</div>
      
      )}
      </div>
   
    
</div>
  );

  
}

   



export default App;
