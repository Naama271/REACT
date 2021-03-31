import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [users, setUsers] = useState(null);
  const [show, setShow] = useState([false]);  


    // const CancelToken = axios.CancelToken;
    // const source = CancelToken.source();

    //  let userlist=[];
    //  for (let i = 0; i < 10; i++) {
      
    //    const { data } = await axios.get("https://randomuser.me/api/", {
    //      cancelToken: source.token,
    //    });
    //  userlist.push(data.results[0]);
    //  }

     useEffect(() => {

      let userlist=[];

       const CancelToken = axios.CancelToken;
       const source = CancelToken.source();
  
       const search = async () => {
        try {
          
          const { data } = await axios.get("https://randomuser.me/api/", {
            cancelToken: source.token,
          });
  
          setUsers(data.results[0]);
        } catch (e) {
          if (axios.isCancel(e)) {
            console.log(e.message);
          } else {
            console.log(e.message);
          }
        }

        console.log(userlist);
       // setUsers(userlist);
        console.log(users);
      };
      search();
  
        return () => {
          source.cancel("cancelled by user");
        };
  }, []);

  const toggleData= () =>{
    setShow((show) => !show)
  }



  return (<div>

    <button  onClick={toggleData}> {show ? "hide data" : "show data"}</button>
    <div  className="list">

   {show ? <div>{users && JSON.stringify(users.name)}</div> : <></>};
    {/* {users.map(el=>
    <div className="card"> {el.gender}<h4> {el.name.first}  {el.name.last} </h4>
    <img src={el.picture.medium}></img>
    </div>
    )} */}
    </div>
 
</div>
);
      
}

   



export default App;
