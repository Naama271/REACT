import React, { useState, useEffect, useRef } from "react";
import url from './haakaa_brand.mp4'

function App() {

  let video = document.getElementById("samp"); 
  console.log(video);
  useEffect(() => {
   
  }, []);;

  const pause = () => {
    video.pause();
  };

  const play = () => {
    video.play(); 
  };

  return (
    <div >
                <video id="samp" key={url} width="640" height="480" autoPlay="autoplay" controls>
                    <source src={url} type="video/mp4" /> 
                </video>
       <button onClick={pause}>pause</button>
       <button onClick={play}>play</button>
     

    </div>
  );
}

export default App;
