import React from 'react';

const Input = ({ id="", value="", type = "text"}) => {
  return(
      <input className="input" type={type} value={value} id={id} />
  );
}

export default Input;