import { FormProps } from "../models/FormProps";
import { Button } from "./Button";

import { useEffect, useState } from "react";

export const Form = <T extends {}>({
  fields,
  initialValues,
  onFormSubmit,
  buttonText,
}: FormProps<T>) => {
  /*if (!initialValues || Object.keys(initialValues).length === 0) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }*/

  const [values, setValues] = useState<Partial<T>>({} /*initialValues*/);

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = evt.target;
    const updatedValues = {
      ...values,
      [name]: type === "checkbox" ? checked : value,
    };

    setValues(updatedValues);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(values as T);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <label key={field.name}>
          {field.label}
          <input
            type={field.type}
            name={field.name}
            value={
              field.type === "checkbox"
                ? undefined
                : (values[field.name as keyof T] as string) || ""
            }
            checked={
              field.type === "checkbox"
                ? Boolean(values[field.name as keyof T] as boolean)
                : undefined
            }
            onChange={handleChange}
            required={field.required}
          />
        </label>
      ))}

      <Button type="submit">{buttonText}</Button>
    </form>
  );
};
