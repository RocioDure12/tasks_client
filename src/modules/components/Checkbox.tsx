import { CheckboxProps} from "../models/CheckboxProps"

export const Checkbox: React.FC<CheckboxProps> = (props) => {
    return(
        <div>
            <input name={props.name}></input>
            <label>{props.label}</label>
        </div>

    )

}
