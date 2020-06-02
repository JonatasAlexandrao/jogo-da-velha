import React from 'react';
import './styles.css';


const IconSocial = ({ src, alt, action }) => {
  return (
    <a target='_blank' href= {action}>
      <img className='icon-social' src= {src} alt={alt} />
    </a>
  );
}

export default IconSocial;