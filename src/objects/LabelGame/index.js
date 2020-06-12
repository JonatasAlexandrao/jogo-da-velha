import React from 'react';

import './styles.css';


const LabelGame = ({ htmlFor, content, onClick}) => {
  return(
    <label 
      className="label-game" 
      htmlFor={htmlFor} 
      onClick={onClick}
    >{content}</label>
  );
}

export default LabelGame;