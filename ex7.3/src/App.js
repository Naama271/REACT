import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, backgroundColor: "black" };
  }

  increment = () => {
    if (this.state.count < 10) {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    }
  };
  decrement = () => {
    if (this.state.count > -10) {
      this.setState((prevState) => {
        return { count: prevState.count - 1 };
      });
    }
  };

  render() {
    const color = () => {
      if (this.state.count >0 ) {
        return "green";
      } else if (-10 <this.state.count && this.state.count < 0)  {
        return "red";
      } else {
        return "black";
      }
    };

    return (
      <div style={{ paddingTop: 30, paddingLeft: 100 }}>
        <input type="button" value="+" onClick={this.increment} />
        <label style={{ backgroundColor: color() }}> {this.state.count}</label>
        <input type="button" value="-" onClick={this.decrement} />
      </div>
    );
  }
}

export default App;
