
import React, { useContext, useState } from "react";
import { SWContext } from "../../context/context";
import "./Dogs.scss"

const Dogs = () => {
    const { dogs } = useContext(SWContext);
    const [Img, setImg] = useState()
    
    return (
      
      <div className='dogs'>
       
       {Img ? <img className="imagen" src= {Img} alt="img"/> : null}
      {dogs.map((dog) => ( 
        <div onClick={()=> setImg( dog.picture) } key={dog._id} class='flip-card'>
          <div class='flip-card-inner'>
            <div class='flip-card-front'>
              <h2>{dog.breed}</h2>
              <img src={dog.picture} alt={dog.breed}></img>
            </div>
            <div class='flip-card-back'>
              <p>Tamaño:{dog.size}</p>
              <p>Caracter:{dog.caracter}</p>
              <p>Peso:{dog.weight}</p>
              <p>Tipo de pelo:{dog.hair_type}</p>

              
            </div>
          </div>
        </div>
      ))}
    </div>
    );
  };

export default Dogs
