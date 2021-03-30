import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Data = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  useEffect( ()=>{
   const search = async () =>{
const res = await axios.get('https://swapi.dev/api/films/1/');
console.log(res);
setTitle(res.data.title);  
setDirector(res.data.director);
};
    
    search();
  }, []);

  // console.log({data});

  return (
    <div>
<p>{title}</p>
<p>{director}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">

      <Data

			/>


    </div>
  );
}

export default App;
