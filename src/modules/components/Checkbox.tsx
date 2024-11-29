import React from "react";
import { CheckboxProps } from "../models/CheckboxProps";

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <div className={props.className || ""}>
      {props.options ? (
        // Renderiza múltiples checkboxes si se pasa el array `options`
        props.options.map((option, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name={props.name}
              value={option.value}
              checked={props.checked}
              onChange={props.onChange}
              disabled={props.disabled}
            />
            <label>{option.label}</label>
          </div>
        ))
      ) : (
        // Renderiza un único checkbox si no hay opciones
        <div>
          <input
            type="checkbox"
            name={props.name}
            checked={props.checked}
            onChange={props.onChange}
            disabled={props.disabled}
          />
          <label>{props.label}</label>
        </div>
      )}
    </div>
  );
};
