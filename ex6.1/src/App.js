
import './App.css';
import Card from './componemts/card';
import React from 'react';

// function App() {
//   return (
//     <div className="box">
//  <Card title="title11" img="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
//  <Card title="title2" img="https://www.hackingwithswift.com/uploads/matrix.jpg" />
//  <Card title="title3" img="https://phillipbrande.files.wordpress.com/2013/10/random-pic-14.jpg" />
// </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="box">
   <Card title="title11" img="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
   <Card title="title2" img="https://www.hackingwithswift.com/uploads/matrix.jpg" />
   <Card title="title3" img="https://phillipbrande.files.wordpress.com/2013/10/random-pic-14.jpg" />
  </div>
    );
  }
}

export default App;
