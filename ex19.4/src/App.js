import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect( ()=>{
   const search = async () =>{
    let userlist=[];
    for (let i = 0; i < 10; i++) {
const {data} =await axios.get("https://randomuser.me/api/");
userlist.push(data.results[0]);
    }

//console.log(userlist);
setUsers(userlist);
console.log(userlist);
console.log(users);
};
    
    search();
  }, [users]);


  // async componentDidMount() {
	// 	const users = [];
	// 	for (let i = 0; i < 10; i++) {
	// 		let user = await axios.get("https://randomuser.me/api/");
	// 		users.push(user.data.results[0]);
	// 	}
	// 	this.setState({ usersData: users });
  //  // console.log(users)
	

  
//  const handleChange=(event)=>{
//  setInput(event.target.value)
//  console.log(input);
//   }

  // console.log({data});

  return (<div>

    {/* <input type="text" value={input} onChange={handleChange}></input> */}
    <div  className="list">
    {users.map(el=>
    <div className="card"> {el.gender}<h4> {el.name.first}  {el.name.last} </h4>
    <img src={el.picture.medium}></img>
    </div>
    )}
    </div>
 
</div>
);
    ;  
}

   



export default App;
