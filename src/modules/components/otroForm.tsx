import { Checkbox } from "./Checkbox";
import { FormProps } from "../models/FormProps";
import { Input } from "./Input";
import { useEffect, useState } from "react";
import { Radio } from "./Radio";
import { Select } from "./Select";
import { Textarea } from "./Textarea";
import { Button } from "./Button";

export const OtroForm = <T extends {}>({
  fields,
  initialValues,
  onFormSubmit,
  buttonText,
}: FormProps<T>) => {
  const [values, setValues] = useState<Partial<T>>({});

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);


  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = evt.target;
    let updatedValue: any;

    if (type === "checkbox") {
      updatedValue = checked;  // Para checkboxes, usamos 'checked' en lugar de 'value'
    } else if (type === "radio") {
      updatedValue = checked ? value : undefined; // Solo actualizamos el valor si el radio button está seleccionado
    } else {
      updatedValue = value;  // Para otros tipos de campos, 'value' es lo que necesitamos
    }
  
    const updatedValues = {
      ...values,
      [name]: updatedValue,
    };
  
    setValues(updatedValues);
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(values as T);
    setValues({});
  };

  return (
    <form className="m-2 rounded-lg bg-white h-full p-7 flex flex-col gap-2 shadow-lg" onSubmit={handleSubmit}>
      <div>
        {fields.map((field) => {
          if (
            [
              "text",
              "email",
              "password",
              "date",
              "datetime-local",
              "color",
              "url",
              "range",
              "tel",
              "number",
              "textarea",
              "time",
            ].includes(field.type)
          ) {
            return (
              <Input
                label={field.label}
                key={field.name}
                type={field.type}
                name={field.name}
                onChange={handleChange}
                value={field.type === 'number' 
                  ? Number(values[field.name as keyof T] || 0)
                  :String(values[field.name as keyof T] || "")
                }
                required={field.required}
              />
            );

          }
          
          
          
        })}
      </div>

      <Button type="submit">{buttonText}</Button>
    </form>
  );
};

  