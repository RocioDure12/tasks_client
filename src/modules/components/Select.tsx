import { SelectProps } from "../models/SelectProps"

export const Select: React.FC<SelectProps> = (props) => {
    return(
        <div className="flex flex-col gap-0.5 mb-4">
            <label htmlFor={props.id}>{props.label}</label>
            <select  className="mb-1 rounded-lg p-2 border-solid border border-gray-200 outline-primary-400 bg-gray-50"
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
