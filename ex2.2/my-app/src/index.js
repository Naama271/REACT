import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// 

function print(){
  const data = ["hello", "world"];
  return data.toString().replace(",", " ");;
}


function sum(){
  const number1 = 5;
const number2 =6;
  return number1 + number2 ;
}


function str(){
  const string = "I love React!";

  return string.length ;
}







const App = function (){
return <div>
  <h2>{print()}</h2>
  <h2>{sum()}</h2>
  <h2>{str()}</h2>
  
   </div>
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
ReactDOM.render(
<App />, document.querySelector("#root")
);
