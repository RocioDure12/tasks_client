import { FormProps } from "../models/FormProps";
import { Button } from "./Button";
import { Input } from "./Input";

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
    setValues({})
  };

  return (
    <form className="m-2 rounded-lg bg-white h-full p-7 flex flex-col gap-2 shadow-lg" onSubmit={handleSubmit}>
 
        <div>
        {fields.map((field, index) => (
          <Input
          key={index}
          type={field.type}
          name={field.name}
          value={
            field.type === "checkbox"
              ? undefined
              : (values[field.name as keyof T] as string) || ""
          }
          checked={
            field.type === "checkbox"
              ? Boolean(values[field.name as keyof T])
              : undefined
          }
      
          onChange={handleChange}
          required={field.required}
          label={field.label}
          />
          
    
        ))}
        </div>


        <Button type="submit">{buttonText}</Button>
    </form>
  );
};
