import React from 'react';

const InputGame = ({ id="", value="", type = "text"}) => {
  return(
      <input className="input-game" type={type} value={value} id={id} />
  );
}

export default InputGame;