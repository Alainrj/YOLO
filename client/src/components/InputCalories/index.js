import React from 'react';

export default (props) => (
  <div>
    <input type="number" placeholder={props.placeholder} className={props.className} onChange={props.onChange}></input>   
  </div>
);