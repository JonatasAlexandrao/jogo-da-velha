import React from 'react';
import './styles.css';
import Input from '../Input';
import Label from '../Label';

const InputCheckbox = ({ id="", value="", content=""}) => {
  return(
    <>
      <Input id={id} value={value} content={content} type='checkbox'/>   
      <Label htmlFor={id} content={content}/>
    </>
  );
}

export default InputCheckbox;