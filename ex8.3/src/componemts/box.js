
import "./box.css";
import React from 'react';



  class Box extends React.Component {


    constructor(props) {
      console.log(props)
      super(props);
      this.state = {backgroundColor:"red"}
    }

  
    componentDidMount() {
      this.backgroundColor = setInterval(
        () => {this.set();
       console.log("hiiii") },
        500
      );
     setTimeout(() => document.querySelector('.box').classList.add('round'),2500 )
      setInterval(() => document.querySelector('.box').classList.toggle('round'),2000 )
        }


    set() {
      const colors =["green", "yellow", "blue"];

      const color = this.state.backgroundColor=== colors[0] ? colors[1] : colors[0];
      this.setState({backgroundColor:color})
    }
 

    render() {
    
      return <div className="box" style={{backgroundColor:this.state.backgroundColor}}>


      </div>
    }
  }

export default Box;
