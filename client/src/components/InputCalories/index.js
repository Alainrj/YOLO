import React from 'react';

export default (props) => (
  <div>
    <input type="number" className='form-control' onChange={props.onChange}></input>   
  </div>
);