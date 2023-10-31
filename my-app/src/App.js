import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import { Alumnos } from './components/alumnos';
import { Login } from './components/login';


const amigos = ['Vinny', 'Pingul', 'Nao', 'Fredos', 'Alexis', 'Sabine', 'Xime'];

function App() {
  const [sesion, setSesion] = useState(true)
  
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Mi proyecto" color={"#E1AA74"}/>

        <img src={logo} className="App-logo" alt="logo" />
        <Login />
        
        {
          sesion === true ? 
          <>
            <button onClick={()=>{setSesion(false)}}>Cerrar sesion</button>
            <Header title="Bienvenidos a" />
            <Alumnos alumnos={amigos}/>
          </>
          :
          <>
            <p>No has iniciado sesion...</p>
            <button onClick={()=>{setSesion(true)}}>Iniciar sesion</button>
          </>
        }

      </header>
    </div>
  );
}

export default App;