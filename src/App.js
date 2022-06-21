import { useState } from 'react';
import './App.scss';
import Cats from "./components/Cats/Cats"
import Dogs from "./components/Dogs/Dogs"
import Hero from './components/Hero/Hero';
import { SWContextProvider } from "./context/context";


function App() {

  const [showPets,setPets] = useState("1");
 
  
      
      
  return (
    <div className="App">

    <div className='buttons'>
      
      <button className='bt1' onClick={() => setPets("1")}>
        Inicio
      </button>

      <button className='bt1' onClick={() => setPets("2")}>
       Cats
      </button>

      <button className='bt1' onClick={() => setPets("3")}>
       Dogs
      </button>
      
      </div>
  

    <div className='principal'>

    <SWContextProvider>
        {showPets === "1" ?
         (<Hero></Hero>) :
          showPets === "2" ?
         (<Cats></Cats>) :
          showPets === "3" ?
          (<Dogs></Dogs>):
         (<Hero></Hero>)}
         </SWContextProvider>
      </div>
      </div>


  );
}

export default App;
