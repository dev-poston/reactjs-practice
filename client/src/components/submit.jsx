import React from "react";

const Submit = (props) => (
  <div>
    <input placeholder="Enter Here" onChange={props.onChange}/>
    <button onClick={props.submit}>Submit</button>
  </div>
);

export default Submit;