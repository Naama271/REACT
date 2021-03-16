import "./App.css";
import React from 'react';


// incrementCount() {
//   this.setState((state) => {
//     // Important: read `state` instead of `this.state` when updating.
//     return {count: state.count + 1}
//   });
// }

// handleSomething() {
//   // Let's say `this.state.count` starts at 0.
//   this.incrementCount();
//   this.incrementCount();
//   this.incrementCount();

//   // If you read `this.state.count` now, it would still be 0.
//   // But when React re-renders the component, it will be 3.
// }



  // class App extends React.Component {
  //  counter=0;

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       count: this.counter++,
  //     };

  

  //   }
  //   render() {
  //     return (
  //       <div>
  //         <button >button</button>
  //         <h1> {this.state.count}</h1>
  //         <h1> {this.state.count}</h1>
  //         <h1> {this.state.count}</h1>
  //         <h1> {this.state.count}</h1>
    
  //       </div>
  //     );
  //   }
  // }

  class App extends React.Component {
 
    state = {count:0}

    increase = () =>{
   
      this.setState({count:this.state.count+1})
    }
    
    // React says we have to define render!!
    render() {
    
      return <div>
      <button  onClick= {this.increase}>increase</button>
      <div > count: {this.state.count}</div>
      </div>
    }
  }

export default App;
