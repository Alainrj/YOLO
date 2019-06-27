import React from 'react';

export default (props) => (
  <div>
    <button className='btn-primary' onClick={props.onClick} >Search</button>
    <i className="fa fa-search" aria-hidden="true"></i>
  </div>
);