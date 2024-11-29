import { SelectProps } from "../models/SelectProps"

export const Select: React.FC<SelectProps> = (props) => {
    return(
        <div>
            <label>{props.label}</label>
            <select 
            name={props.name}
            id={props.id}
            value={props.value}
            required={props.required}
            disabled={props.disabled}
            onChange={props.onChange}
            >
                {props.options.map((option, index)=>
                <option key={index} value={option.value}>
                    {option.label}
                </option>)}
            </select>

        </div>

    )

}
