import React, { useState } from 'react';
import './App.css';


import Header from './component/Header';
import HashtagGame from './component/HashtagGame';
import HeaderInternal from './component/HeaderInternal';
import ProfileUser from './component/ProfileUser';

import InputCheckbox from './objects/InputCheckbox';
import LayerDark from './objects/LayerDark';

const App = () => {

  const [activeAbout, setActiveAbout] = useState('');

  const handleClickAdd = () => setActiveAbout('-active');
  const handleClickRemove = () => setActiveAbout('');

  return (
    <main className='app'>
      <Header onClick={handleClickAdd} />
      <HashtagGame /> 
      <InputCheckbox id='show' value='show' content='Mostrar evento'/>

      <LayerDark className= {activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
}



export default App;
