import "./App.css";
import Box from "./componemts/box.js";
import React from 'react';



  class App extends React.Component {


    constructor(props) {
      console.log(props)
      super(props);
      this.state = {props}
    }

  
    componentDidMount() {
      this.favoriteColor = setInterval(
        () => this.set(),
        1000
      );
    }
  
    componentWillUnmount() {

     
    }

    set() {
      this.setState({animation: "mymove 4s"})
    }
 
    


    // React says we have to define render!!
    render() {
    
      return <div>

<Box style={{backgroundColor: "red"}} />
      </div>
    }
  }

export default App;
