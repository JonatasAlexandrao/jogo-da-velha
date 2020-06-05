import React, { useState } from 'react';
import './App.css';


import HeaderGame from './component/HeaderGame';
import HashtagGame from './component/HashtagGame';
import HeaderInternal from './component/HeaderInternal';
import ProfileUser from './component/ProfileUser';

import HistoryGame from './component/HistoryGame';

import InputCheckbox from './objects/InputCheckbox';
import LayerDark from './objects/LayerDark';


const App = () => {

  const [activeAbout, setActiveAbout] = useState('');
  const [history, setHistory] = useState([]);

  const handleClickAdd = () => setActiveAbout('-active');
  const handleClickRemove = () => setActiveAbout('');

  const addHistory = (player) => {
    setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`]);
  }

  return (
    <main id='main' className='app'>
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame callback={addHistory}/> 
      <InputCheckbox id='show' value='show' content='Mostrar evento' />

      <HistoryGame  history={history}/>

      <LayerDark className= {activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
}



export default App;
