import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [term, setTerm] = useState([]);
  const [results, setResults] = useState([]);
  const [input, setInput] = useState('');

  useEffect( ()=>{
   const search = async () =>{
const res = await axios.get('https://restcountries.eu/rest/v2/all');
console.log(res.data);

setTerm(res.data.map(country=>
  country.name.toLowerCase()));  
console.log(term);
};
    
    search();
  }, []);

  useEffect(() => {
    let newData=[];
    newData = term.filter(country=>
      country.includes(input)
      );

      setResults(newData)
  },[input])

 const handleChange=(event)=>{
 setInput(event.target.value)
 console.log(input);
  }

  // console.log({data});
  return (<div>

      <input type="text" value={input} onChange={handleChange}></input>

      <div key={term.id} className="list">
      {results}
   
    </div>
</div>
  );

  
}

   



export default App;
