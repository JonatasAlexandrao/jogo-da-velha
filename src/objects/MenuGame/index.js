import React from 'react';
import './styles.css';


const MenuGame = ({ onClick }) => {
  return(
  <a className='menu-game' 
  href="#menu"
  onClick={onClick} 
  >
  <span className='center'>Menu</span></a>);
}

export default MenuGame;