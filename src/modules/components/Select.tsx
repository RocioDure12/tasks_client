import { SelectProps } from "../models/SelectProps";

export const Select: React.FC<SelectProps> = (props) => {
  return (
    <div className="flex flex-col gap-0.5 mb-4">
      <label  htmlFor={props.id}>{props.label}</label>
      <select
        className="mb-1 rounded-lg p-2 border-solid border border-gray-200 outline-primary-400 bg-gray-50"
        name={props.name}
        id={props.id}
        value={props.value}  // Asegura que siempre haya un valor válido
        required={props.required}
        disabled={props.disabled}
        onChange={props.onChange}
      >
        {/* Opción predeterminada sin 'selected' */}
        <option style={{display:'none'}} selected={!props.value} disabled>
          -- Seleccione una opción --
        </option>

        {/* Iterar sobre las opciones solo si existen */}
        {props.options?.map((option) => (
          <option selected={option.value === props.value} key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
