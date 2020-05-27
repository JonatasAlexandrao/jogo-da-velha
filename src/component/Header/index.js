import React from 'react';
import './styles.css';

import Sobre from '../../objects/Sobre';
import Logo from '../../objects/Logo';
import Menu from '../../objects/Menu';


const Header = () => {
  return (
  <header className='header'>
    <Logo />
    <Sobre />
    <Menu />
  </header>
  );
}

export default Header;