import React from 'react';

import './App.css';
import Header from './component/Header';
import Hashtag from './component/Hashtag';

import Checkbox from './objects/Checkbox';

const App = () => {
  return (
  <main className='app'>
    <Header />
    <Hashtag /> 
    <Checkbox id='show' value='show' content='Mostrar evento'/>
  </main>
  );
}

export default App;
