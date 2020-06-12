import React, { useState } from 'react';
import './App.css';

import HeaderGame from './component/HeaderGame';
import HeaderInternal from './component/HeaderInternal';
import ProfileUser from './component/ProfileUser';

import WrapperHashtagHistory from './objects/WrapperHashtagHistory';
import LayerDark from './objects/LayerDark';



const App = () => {

  const [activeAbout, setActiveAbout] = useState('');


  const handleClickAdd = () => setActiveAbout('-active');
  const handleClickRemove = () => setActiveAbout('');

 


 

 

  return (
    <main id='main' className='app'>
      <HeaderGame onClick={handleClickAdd} />
      <WrapperHashtagHistory />

      <LayerDark className= {activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
}



export default App;
