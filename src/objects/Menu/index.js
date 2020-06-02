import React from 'react';
import './styles.css';


const Menu = ({ onClick }) => {
  return(
  <a className='menu' 
  href="#menu"
  onClick={onClick} 
  >
  <span className='center'>Menu</span></a>);
}

export default Menu;