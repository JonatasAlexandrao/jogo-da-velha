import React from 'react';
import './styles.css';

import playerO from '../../img/Circle.png';
import playerX from '../../img/X.png';

const PlayerGame = ({player}) => {

  const players = [];
  players['x'] = playerX;
  players['o'] = playerO;

  return (
  <button className= "player-game">
    <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />
  </button>
  );
}

export default PlayerGame;