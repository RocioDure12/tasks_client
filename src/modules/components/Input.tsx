import { InputProps } from "../models/InputProps";

export const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col gap-0.5 mb-4 w-full">
      <label htmlFor={props.id} className="mb-1 text-sm">{props.label}</label>
      <input
        className="mb-1 rounded-lg p-3 border-solid border border-primary-200 outline-primary-400 dark:outline-primary-800 dark:bg-neutralScale-600 dark:text-neutralScale-50"
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        required={props.required}
        value={props.value}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};
