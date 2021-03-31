import React, { useState, useEffect, useRef } from "react";

function App() {
  let inputEl = useRef(null);
  // let inputEl = document.querySelector('input');
  const [edit, setEdit] = useState([false]);

  useEffect(() => {
    console.log(inputEl);
    // inputEl.current.focus();
  });

  const toggleEditSave = () => {
    setEdit((edit) => !edit);
  };

  return (
    <div>
      {edit ? <></> : <input type="text" ref={inputEl} />}
      <div>
        <button onClick={toggleEditSave}>{edit ? "edit" : "save"} </button>
      </div>
    </div>
  );
}

export default App;
