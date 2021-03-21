import './App.css';
import React from 'react'
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      usersData: []

    };
  }

  async componentDidMount() {
		const users = [];
		for (let i = 0; i < 10; i++) {
			let user = await axios.get("https://randomuser.me/api/");
			users.push(user.data.results[0]);
		}
		this.setState({ usersData: users });
   // console.log(users)
	}


 refreshPage=() =>{
    window.location.reload(false);
  }

  filter=(users)=>{

const input = document.querySelector("input");
//console.log(input.value);
//console.log(this.state.usersData);

const result = this.state.usersData.filter(user => {user.name.includes(input.value)});
console.log(result);

  }


  render() {

      return  <div>
<div><input onChange={this.filter} type="text" ></input></div>

 <div>{this.state.usersData.map( user => <div className="card"><h4> {user.name.first}  {user.name.last} </h4>
 <img src= {user.picture.medium}></img></div>)}</div>

        </div>

      ;
    }
  
}

export default App;