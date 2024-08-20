import { FormProps } from "../models/FormProps"
import { Button } from "./Button"

import { useState } from "react"

export const Form=<T extends {}>({fields, initialValues, onFormSubmit }: FormProps<T>)=>{
    const [values, setValues]=useState<Partial<T>>(initialValues)

    const handleChange=(evt:React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value, type, checked } = evt.target;
        const updatedValues = { ...values, [name]: type === 'checkbox' ? checked : value };
        
        setValues(updatedValues);

    }

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        onFormSubmit(values as T)
        //aqui conectarse con la api para crear/editar etc
        //reestablecer los campos
        setValues(initialValues)

    }
    
    return(
    <form onSubmit={handleSubmit}>
        {fields.map(field=>(
            <label key={field.name}>
                {field.label}
                <input
                type={field.type}
                name={field.name}
                value={field.type === 'checkbox' ? undefined : (values[field.name as keyof T] as string) || ''}
                checked={field.type === 'checkbox' ? Boolean(values[field.name as keyof T] as boolean) : undefined}
                onChange={handleChange}
                required={field.required}
           
            />
            </label>
        ))}

        <Button/>




    </form>)
}