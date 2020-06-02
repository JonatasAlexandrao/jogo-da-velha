import React from 'react';
import './styles.css';
import InputGame from '../InputGame';
import Label from '../Label';

const InputCheckbox = ({ id="", value="", content=""}) => {
  return(
    <>
      <InputGame id={id} value={value} content={content} type='checkbox' />   
      <Label htmlFor={id} content={content}/>
    </>
  );
}

export default InputCheckbox;