import { useState } from 'react';
import "../styles/Card.css"


//Crea un componente de contador que muestre un número inicializado en 0 y dos botones: 
//uno para incrementar y otro para decrementar el contador en 1 unidad.

export default function Counter(){
    const [counter, setCounter]=useState(0)

    function handleIncrement(){
        setCounter(counter + 1)
    }

    function handleDecrement(){
        if (counter > 0) {
        setCounter(counter-1)
        }
    }

    return(
        <div className='card'>
            <p>{counter}</p>
            <button onClick={handleIncrement}>➕</button>
            <button onClick={handleDecrement}>➖</button>
        </div>
    )
}

