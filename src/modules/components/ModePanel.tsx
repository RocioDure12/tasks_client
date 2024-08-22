interface modePanelProps{
    onLightOn: () => any;
    onLightOff:()=>any
}

export default function ModePanel( props:modePanelProps){
    return(
        <>
        <button onClick={props.onLightOn}>On</button>
        <button onClick={props.onLightOff}>Off</button>
        </>
    )
}