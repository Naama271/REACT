import './App.css';

import React, { useState } from 'react';

const Text = (props) => {
  const [fulltext, setText] = useState(props.text);
  const [length, setLenght] = useState(props.length);
  const [showAll, setShowAll] = useState(false);
  



  const onClick = () => {
    setShowAll(!showAll);
  };

  let display, buttonText;

  if (showAll === true){
    display=fulltext;
    buttonText='show less'
    
  }else{
    display=fulltext.slice(0,length);
    buttonText='show more'
  }

  return <div>
    {display}
    <a onClick={onClick}>{buttonText}</a>
  </div>;
};

function App() {
  return (
    <div className="App">

      <Text
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo quam, cursus id scelerisque in, viverra nec ante. Nam tincidunt imperdiet orci, 
        a tincidunt nisl pellentesque sed. Suspendisse condimentum nisi vitae felis hendrerit auctor. In efficitur dolor nisi, eget sollicitudin velit fringilla id. 
        Sed dictum velit ac diam maximus dapibus. Nullam quis ipsum sit amet urna gravida aliquam. Aliquam fringilla, risus at consequat venenatis,
         nulla mi hendrerit tellus, non pellentesque leo odio eu felis. Suspendisse massa augue, rutrum sed turpis in, aliquet elementum purus.
         Pellentesque ultrices quis nibh in consequat. Morbi eget blandit ipsum. Fusce non leo aliquam, gravida nulla ac, bibendum mauris.
          Curabitur varius metus lacus, vitae semper nulla tempor at. "
				length="100"
			/>


    </div>
  );
}

export default App;
