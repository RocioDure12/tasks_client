interface panelProps{
    onIncrement: () => any;
    onDecrement:()=>any;
}


export default function Panel(props:panelProps){
    return(
        <>
            <button onClick={props.onDecrement}>-</button>
            <button onClick={props.onIncrement}>+</button>
        </>
    )

}