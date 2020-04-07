import React, { Component } from 'react';
import './App.css';
import Formulario from './components/Formulario.js';
import Carrusel from './components/Carrusel.js';
import Imagen from './components/Imagen.js';
import GitImage from './components/GitImage.js';

class App extends Component {
  render(){
  return (
    <Carrusel styleName='Carrusel' titulo='Carrusel'>
      <GitImage/>
      <Imagen/>
      <Formulario/>
    </Carrusel>
  );
}
}

export default App;
