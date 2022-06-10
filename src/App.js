
import './App.css';
import { useState } from 'react';
import { colores } from './componentes/ColoresRandom';



const App = () => {

  const [hex, setHex] = useState()
  let randomName = () => {
    
    const color = colores;

    const nombreRandom = Math.floor (Math.random() * color.length);

    setHex(nombreRandom)

  
  }; 
  
  
  return (
    <div 
    
      className="App" 
      style={{ 
        backgroundColor: [colores[hex]] ,
        minHeight:"35vh", 
        alignItems: 'center',
        alignContent: 'center',
        overflow: 'hidden',
        zoom: 5, 
        }}
      >
       <h1>{colores[hex]}</h1>

      <button onClick={randomName}>Haz Que El Fondo Cambie!</button>
      
    </div>
  );
}

export default App;
