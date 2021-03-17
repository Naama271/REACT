
//import './card.css';

import React from "react";

class CustomButton extends React.Component {
state= {color:"" };



   setColor = () => {

    const colors = ["blue","red","yellow"];
    console.log(colors);
 
    return colors.map(color => <button style={{backgroundColor:color}} handleClick= {this.handleClick} >{color}</button>)
  }

  handleClick = (clickedColor) => this.setState({color: clickedColor});   


  render() {
  
    return <div>
    {this.setColor()}
    <div>the color is: {this.state.color}</div>
    </div>
  }
}




export default CustomButton;
