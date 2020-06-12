import React from 'react';

import './styles.css';
import CardGame from '../../objects/CardGame';
import PlayerGame from '../../objects/PlayerGame';


const HashtagGame = ({historyGame, onClick, lastRound}) => {

  return (
    <CardGame>
      {/* <ul className = "hashtag-game">
        {players.map(({id, content}) => (
          <li 
            key = {id}
            className = "item" 
            onClick={() => content === '' && handleClick(id)}
          >
            <PlayerGame id={id} content={content}/>
          </li>
        ))}      
      </ul> */}
      <ul className = "hashtag-game">
        {historyGame[lastRound].state.map(player => (
          <li 
            key = {player.id}
            className = "item" 
            onClick={() => player.content === '' && onClick(player.id)}
          >
            <PlayerGame id={player.id} content={player.content}/>
          </li>
        ))}      
      </ul>
    </CardGame>
  )
}

export default HashtagGame;