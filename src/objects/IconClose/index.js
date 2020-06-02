import React from 'react';

import './styles.css';


const IconClose = ({ onClick }) => {
  return(
  <a className='icon-close' href='#' onClick={onClick}>
    <span className='content'>Fechar</span>
  </a>
  );

}

export default IconClose;