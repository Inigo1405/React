import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import { Alumnos } from './components/alumnos';



let sesion = true;
const amigos = ['Vinny', 'Pingul', 'Nao', 'Fredos', 'Alexis', 'Sabine', 'Xime'];

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <Header title="Hola" />
        <Header title="Adios" color="red" />
        <Header color="green"/>

      </header>

      {
        sesion === true ? 
        <>
          <Header title="Bienvenidos" />
          <Alumnos alumnos={amigos}/>
        </>
        :
        <p>No has iniciado sesion...</p>
      }

    </div>
  );
}

export default App;