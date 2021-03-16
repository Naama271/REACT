
import "./spinner.css";
import React from 'react';



  class Spinner extends React.Component {

    state = { counter: 5 };


    componentDidMount() {
      this.counter = setInterval(
        () => {this.set();
       console.log("hiiii") },
        1000
      );

      setInterval(() => document.querySelector('.spinner').classList.add('hidden'),5000 )
      setInterval(() => document.querySelector('.timer').classList.add('hidden'),5000 )
        }


    set() {
   
     this.setState({counter:this.state.counter-1 })

     this.counter = setInterval(
      () => {this.set();
     console.log("hiiii") },
      5000
    );

    }
 

    render() {
    
      return <div>
      <div className="spinner">
      </div>
      <div className="timer" >{this.state.counter}</div>
      </div>
    }
  }

export default Spinner;
