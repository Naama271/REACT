import React from "react";
import "./App.css";
import Box from "./Box.component";

class App extends React.Component {
  state = { isHidden: true };
  handleToggle = () => {

      document.querySelector('.box').classList.toggle('hide')
  
  };
  render() {
 
    return (
      <div className="App">
        <button onClick={this.handleToggle}>Hide and seek </button>
       <Box /> 
      </div>
    );
  }
}

export default App;

