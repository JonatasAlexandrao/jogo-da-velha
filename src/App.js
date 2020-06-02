import React, { useState } from 'react';
import './App.css';


import Header from './component/Header';
import Hashtag from './component/Hashtag';
import HeaderInternal from './component/HeaderInternal';
import ProfileUser from './component/ProfileUser';

import Checkbox from './objects/Checkbox';
import LayerDark from './objects/LayerDark';

const App = () => {

  const [activeAbout, setActiveAbout] = useState('');

  const handleClickAdd = () => setActiveAbout('-active');
  const handleClickRemove = () => setActiveAbout('');

  return (
    <main className='app'>
      <Header onClick={handleClickAdd} />
      <Hashtag /> 
      <Checkbox id='show' value='show' content='Mostrar evento'/>

      <LayerDark className= {activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
}



export default App;
