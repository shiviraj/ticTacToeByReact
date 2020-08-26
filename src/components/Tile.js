import React from 'react';

export default (props) => (
  <button
    disabled={props.disabled}
    onClick={props.onClick}
    className={props.className}
  >
    {props.num}
  </button>
);
