import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.copyTextInput = this.copyTextInput.bind(this);
  }

  copyTextInput() {
    this.textInput.current.select();
    document.execCommand('copy');
  }

  render() {
    return (
      <div>
        <h3>what do you think??</h3>
        <textarea
          ref={this.textInput} />
        <input
          type="button"
          value="copy"
          onClick={this.copyTextInput}
        />
      </div>
    );
  }
}

export default App;
