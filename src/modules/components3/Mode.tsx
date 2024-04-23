import { useState } from "react";
import ModePanel from "./ModePanel"


export default function Mode(){
    const[mode,setMode]=useState(true)

    function onLightOn(){
        setMode(true)

    }

    function onLightOff(){
        setMode(false)
        
    }

    return(
        <div className="card">
            {mode ? <div>🌞</div> : <div>🌑</div>}
            <ModePanel 
            onLightOff={onLightOff}
            onLightOn={onLightOn}
            />
        </div>
    )
}