import React from 'react';
import './styles.css';

const TagGame = ({ content, className=''}) => {

  return (
    <output className={ `tag-game ${className}`}>{content}</output>
  );
}

export default TagGame;