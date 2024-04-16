import { useState } from "react";

type Text = {
    id: number;
    content: string;

  };
  
  // Arreglo de mascotas
  const textos: Text[] = [
    { id: 1, content: 'Descripcion de Kukelina: Una gata callejera astuta de pelaje negro, conocida por su habilidad para sobrevivir en las calles y por su corazón generoso al proteger a los más necesitados. '},
    { id: 2, content:'Descripcion de Oso: Un imponente oso marrón que vive en lo profundo del bosque, valorado por su fuerza y valentía al proteger su hogar y a los habitantes del bosque de los peligros.'},
    { id: 3, content: 'Descripcion de Lolita: Una elegante gata de pelo blanco que vive en un pintoresco pueblo costero, admirada por su gracia y belleza, pero también por su determinación para enfrentar cualquier desafío y defender a su comunidad.'},
  ];

  export default function Text(){
    const[index, setIndex]=useState(0)
    
    function handleText(){
        //if(index >= textos.length - 1){
          //  setIndex(0)
        //} else
        //setIndex(index+1)
    index >= textos.length -1 ? setIndex(0) : setIndex(index+1)

    }


    let texto=textos[index];

    return(
        <div className="card">
            <button onClick={handleText}>Next</button>
            <p>{texto.content}</p>
        </div>
    )
  }