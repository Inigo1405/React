import logo from './logo.svg';
import './App.css';

let sesion = true;
const amigos = ['Vinny', 'Pingul', 'Nao', 'Fredos', 'Sabine'];


function Header({title, color}){
  console.log(title)
  return <h1 style={{color: color}}> {title ? title : "No hay nada"} JSX </h1>
}


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <Header title="Hola" />
        <Header title="Adios" color="red" />
        <Header color="green"/>

      </header>

      {sesion === true ? 
        <>
        <Header title="Bienvenidos" />
        <Amigos />
        {/* <ul>
          {amigos.map((amigo, index) => {
            return <li key={index}>{amigo}</li>
          })}
        </ul> */}
        </>
        :
        <p>No has iniciado sesion...</p>
      }

    </div>
  );
}


function Amigos (){
  return (
    amigos.map((amigo, index) => {
      return Amigo(amigo, index)
    })
  )
}

function Amigo (amigo, index){
  return <p>{index}.- {amigo} </p>
}
// Crear el componente 
// amigos
// amigo  

export default App;