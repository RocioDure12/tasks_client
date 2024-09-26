
import { InputProps } from "../models/InputProps"


export const Input:React.FC<InputProps>= (props)=>{

    return(

        <label key={props.name}>
        {props.label}
        <input
        type={props.type}
        name={props.name}
        value={props.type === "checkbox" || props.type === "datetime-local" ? undefined : props.value}
        checked={props.type === "checkbox" ? Boolean(props.value) : undefined}
        onChange={props.onChange}
        required={props.required}
        ></input>
        </label>
        
    )

}