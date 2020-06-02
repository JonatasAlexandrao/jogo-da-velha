import React from 'react';

import './styles.css';
import CardGame from '../../objects/CardGame';
import Player from '../../objects/Player';


const Hashtag = () => {
  return (
    <CardGame>
      <ul className = "hashtag">
        <li className = "item"><Player player='o' /></li>
        <li className = "item"><Player player='x' /></li>
        <li className = "item"><Player player='x' /></li>

        <li className = "item"><Player player='x' /></li>
        <li className = "item"><Player player='o' /></li>
        <li className = "item"><Player player='x' /></li>

        <li className = "item"><Player player='x' /></li>
        <li className = "item"><Player player='x' /></li>
        <li className = "item"><Player player='o' /></li>
      </ul>
    </CardGame>
  )
}

export default Hashtag;