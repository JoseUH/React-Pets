import React, { useContext, useState } from "react";
import { SWContext } from "../../context/context";
import "./Cats.scss";
const Cats = () => {

  const { cats } = useContext(SWContext);
  const [Img, setImg] = useState()


  return (
    <div className='cats'>
    {Img ? <img className="imagen" src= {Img} alt="img"/> : null}
      {cats.map((cat) => (
        <div onClick={()=> setImg( cat.picture) } key={cat._id} class='flip-card'>
          <div class='flip-card-inner'>
            <div class='flip-card-front'>
              <h2>{cat.breed}</h2>
              <img src={cat.picture} alt={cat.breed}></img>
            </div>
            <div class='flip-card-back'>
            <p>Tamaño:{cat.size}</p>
              <p>Caracter:{cat.caracter}</p>
              <p>Peso:{cat.weight}</p>
              <p>Tipo de pelo:{cat.hair_type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cats;
