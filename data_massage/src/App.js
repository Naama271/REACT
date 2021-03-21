
import './App.css';
import React from 'react'
import {datas} from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      arr: datas,
      
    };
    console.log(datas)
  }

under90=()=>{

console.log(datas.map( person =>  person.birthday[ person.birthday.length-1] ));


}

 refreshPage=() =>{
    window.location.reload(false);
  }



  render() {
   // console.log(data);
   // console.log(this.state.data)
    return ( <div>
      <h6>names</h6>
      <ul>
   {datas.map( person => <li> {person.name} </li>)}
   </ul>
   <button onClick={this.under90}>under90</button>

  { datas.map( person => <div> {person.birthday[ person.birthday.length-2]}
    {person.birthday[ person.birthday.length-1]}
  </div> 
  )}

{ datas.map( person => <div className="card"> {person.name}<br/>
    {person.birthday}<br/>
    {person.favoriteFoods.fish}
  </div> 
  )}
      </div>

    );
   
    }
  
}

export default App;
