import './App.css';
import freeCodeCampLogo from './imagenes/logo-free-code-camp.jpg';
import Boton from '../src/componentes/Boton.js';
import Contador from './componentes/Contador.js';
import { useState } from 'react';

function App() {
  const [numClics, setNumClicks] = useState(0);
  //Definimos una funcion dentro del compnente
  const manejarClic = () =>{
    setNumClicks(numClics+1);
  }

  const reiniciarCuenta = ()=>{
    if(numClics>=1){
      setNumClicks(numClics-1);
    }
  }
  
  return (
    <div className="App">
      <div className='freecodecmap-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='logo-de-freecodecamp' />
      </div>


      <div className='contenedor-principial'>
          <Contador numeroClics={numClics} />
        
          <Boton texto={"Incrementar 1"} esBotonDeClic={true} manejarClic={manejarClic}/>
          <Boton texto={"Decrementar 1"} esBotonDeClic={false} manejarClic={reiniciarCuenta}/>
      </div>

      
    </div>
  );
}

export default App;
