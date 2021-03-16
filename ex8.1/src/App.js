import "./App.css";
import React from 'react';



  class App extends React.Component {


    constructor(props) {
      super(props);
      this.state = {favoriteColor:"red"}
    }

  
    componentDidMount() {
      this.favoriteColor = setInterval(
        () => this.set(),
        1000
      );
    }
  
    componentWillUnmount() {
      console.log(this.favoriteColor);
      let div= document.querySelector("#myDiv");
      console.log(div)
     
    }

    set() {
      this.setState({favoriteColor:"blue"})
    }
 
    


    // React says we have to define render!!
    render() {
    
      return <div>
      {/* <button  onClick= {this.increase}>increase</button> */}
      <h1 > My favorite color is: {this.state.favoriteColor}</h1>
      <div id="myDiv">The updated favorite color is: {this.state.favoriteColor}</div>
      </div>
    }
  }

export default App;
