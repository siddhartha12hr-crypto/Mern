// useState=>to manupulate the state using react react hooks
//state=>piece of info that change with time

import React, { useState } from "react";

const LearnUseState = () => {
  const [name, setName] = useState(0);
  //onChange
  //onClick
  //onSubmit
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name=""
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default LearnUseState;

//create a state varibale [name,setName] set the initial value to your name
// and when the button is clicked u it should be change into address
