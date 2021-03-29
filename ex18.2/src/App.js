import './App.css';

import React, { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState(
    [
      { id: 1, name: "CSS", completed: true },
      { id: 2, name: "JavaScript", completed: true },
      { id: 3, name: "React", completed: false },
      { id: 4, name: "Node JS", completed: false },
      ]

  );
  

   const onClick = (id) => {
   // setTodo(!setTodo.completed);
  // console.log(id)
   if (id === todo.id){
     console.log(todo.id);
   }
   };

   

  return (
    <div key={todo.id}>
      {todo.map((item) => {
        return (
          <li key={todo.id}>
        
           <a onClick={() => onClick(item.id)} style={item.completed ? {textDecoration: "line-through"} :{}}> {item.name} {item.completed ? <>&#x02713;</>: <>&#x02717;</>}</a>
          </li>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <div className="App">

      <Todo

			/>


    </div>
  );
}

export default App;
