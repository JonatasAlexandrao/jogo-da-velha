import React from 'react';
import './styles.css';
import InputGame from '../InputGame';
import LabelGame from '../LabelGame';

const InputCheckbox = ({ id="", value="", content=""}) => {
  return(
    <>
      <InputGame id={id} value={value} content={content} type='checkbox' />   
      <LabelGame htmlFor={id} content={content}/>
    </>
  );
}

export default InputCheckbox;