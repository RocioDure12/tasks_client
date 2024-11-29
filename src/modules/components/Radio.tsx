import { RadioProps} from "../models/RadioProps"

export const Radio: React.FC<RadioProps> = (props) => {
    return(
        <div>
            {props.options.map((option, index)=>
            <div key={index}>
                <input
                type="radio"
                name={props.name}
                value={option.value}
                checked={props.value === option.value}
                onChange={props.onChange}
                />
                <label>{option.label}</label>
            </div>
               
            )}


        </div>

    )

}
