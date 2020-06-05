import React from 'react';
import './styles.css';

import playerO from '../../img/Circle.png';
import playerX from '../../img/X.png';

//let i=0;

const PlayerGame = ({content = ''}) => {

  const players = [];
  players[''] = '';
  players['x'] = playerX;
  players['o'] = playerO;

  return (
  <button className= "player-game">
    {players[content] && <img src={players[content]} alt={`Jogador ${content}`} />}
  </button>
  );
}



export default PlayerGame;