import { InputProps } from "../models/InputProps";

export const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col gap-0.5 mb-4">
      <label className="mb-1 font-medium">{props.label}</label>
      <input
        className="mt-1 mb-1 rounded-lg p-3  outline-primary-400 shadow"
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
