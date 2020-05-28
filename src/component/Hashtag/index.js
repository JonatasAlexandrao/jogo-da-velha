import React from 'react';

import './styles.css';
import Card from '../../objects/Card';
import Player from '../../objects/Player';


const Hashtag = () => {
  return (
    <Card>
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
    </Card>
  )
}

export default Hashtag;