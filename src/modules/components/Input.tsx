import { InputProps } from "../models/InputProps";

export const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col gap-0.5">
      <label>{props.label}</label>
      <input
        className="rounded-md p-1"
        type={props.type}
        name={props.name}
        value={
          props.type === "checkbox" || props.type === "datetime-local"
            ? undefined
            : props.value
        }
        checked={props.type === "checkbox" ? Boolean(props.value) : undefined}
        onChange={props.onChange}
        required={props.required}
      ></input>
    </div>
  );
};
