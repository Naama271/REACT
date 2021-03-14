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


const Quiz = function (){
   return <div>
   <QuizTitle />
   <Q1 />
 
   <Q2 />
 
      </div>
   }

   const QuizTitle = function (){
      return <h1>
      QuizTitle
         </h1>
      }

      const Q1 = function (){
         return <div>
             <Q1Title />
         <Q1Input />
         </div>
         }
         
      const Q1Input = function (){
         return <input type="range" id="vol" name="vol" min="0" max="3">
       </input>
         }

         const Q1Title = function (){
            return <div>
            do you like react?
               </div>
            }
            const Q2Title = function (){
               return <div>
               what's your favorite FE???
                  </div>
               }

               const Q2Input = function (){
                  return <input type="text">
                 
                     </input>
                  }

                  
               const Q2 = function (){
                  return <div>
                    <Q2Title />
   <Q2Input />
                     </div>
                  }



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
ReactDOM.render(
<Quiz />, document.querySelector("#root")
);
