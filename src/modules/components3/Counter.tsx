import { useState } from "react";
import Panel from "./Panel";
import "../styles/Card.css"

export default function Counter(){
    const [counter, setCounter]=useState(0)

    function onIncrement(){
        setCounter(counter + 1)
    }

    function onDecrement(){
        setCounter(counter > 0 ? counter-1 : counter )
    }

    return(
        <section className="card">
            <div>Contador: {counter}</div>
            <Panel
            onDecrement={onDecrement}
            onIncrement={onIncrement}/>
    
        </section>

    )

 

}