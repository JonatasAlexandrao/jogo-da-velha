import React, {useState} from 'react';
import HistoryGame from '../../component/HistoryGame';
import HashtagGame from '../../component/HashtagGame';
import InputCheckbox from '../InputCheckbox';



const WrapperHashtagHistory = () => {
  const [history, setHistory] = useState(['Start']);
  const [active, setActive] = useState(false);
  
  const [nextPlayer, setNextPlayer] = useState('x');
  const [lastRound, setLastRound] = useState(0);

  const [historyGame, setHistoryGame] = useState([
    {
      round: 0,
      state: [
        {id: 1, content: ''}, 
        {id: 2, content: ''},
        {id: 3, content: ''},
        {id: 4, content: ''}, 
        {id: 5, content: ''},
        {id: 6, content: ''}, 
        {id: 7, content: ''},
        {id: 8, content: ''},
        {id: 9, content: ''},
      ]
    }
  ]);

  const addHistory = (player) => {
    setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`]);
  }
  
  const showHideHistory = () => {
    //setActive(old => old ? false : true);
    setActive(old => !!!old) // inverte true para false e false para true.
  }

  const changeHistory = (key) => { 
    setLastRound(key);
    setHistory(old => old.slice(0, key+1)); 
    setHistoryGame(old => old.slice(0, key+1));
  }

  const handleClick = (id) => {

    //setPlayers(old => old.map(player => player.id === id ? {id, content: nextPlayer} : player))
    setHistoryGame(old => [...old, {
      
        round: lastRound + 1,
        state: old[lastRound].state.map(player => player.id === id ? {id, content: nextPlayer} : player)
      
    }])
    setLastRound(old => old + 1)
    addHistory(nextPlayer);
    

    setNextPlayer((old) => {return old === 'x' ? 'o' : 'x'});
    //setNextPlayer(old => old === 'x' ? 'o' : 'x');
    
   }
  

  return (
    <div className={`wrapper-hashtagHistory ${active && '-active'}`}>
      <HashtagGame historyGame={historyGame} onClick={handleClick} lastRound={lastRound}/> 
      <InputCheckbox onClick={showHideHistory} id='show' value='show' content='Mostrar evento' />

      <HistoryGame  history={history} onClick={changeHistory} />
    </div>
  );
}

export default WrapperHashtagHistory;