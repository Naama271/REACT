
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: [],
      categories:[]
    };
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result
          });
          console.log(this.state.items);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )


      fetch("https://api.chucknorris.io/jokes/categories")
      .then(res => res.json())
      .then(
        (catgory) => {
          this.setState({
            isLoaded: true,
            categories: catgory
          });
          console.log(this.state.categories);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
 
  }

 refreshPage=() =>{
    window.location.reload(false);
  }



  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return  <div>
 {this.state.item.value}
 <button onClick={() => window.location.reload(false)}>another one!</button>
 <h3>categories</h3>

 <ul>
          {this.state.categories.map(categori => (
            <button onClick={categori}>
              {categori} 
            </button>
          ))}
        </ul>
        </div>
      ;
    }
  }
}

export default App;
