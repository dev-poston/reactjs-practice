import React from 'react';

const Search = (props) => (
  <div id="search">
    <input placeholder="Wheel Brand" name="brand" onChange={props.onChange}/>
    <input placeholder="Wheel Model" name="model" onChange={props.onChange}/>
    <input placeholder="Wheel Diameter" name="diameter" type="number" onChange={props.onChange}/>
    <input placeholder="Wheel Width" name="width" type="number" onChange={props.onChange}/>
    <input placeholder="Bolt Pattern" name="pattern" onChange={props.onChange}/>
    <input placeholder="Wheel Offset" name="offset" type="number" onChange={props.onChange}/>
    <button onClick={props.submit}>Search</button>
  </div>
);

export default Search;