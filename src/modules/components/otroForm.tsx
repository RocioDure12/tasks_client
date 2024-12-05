import { FormProps } from "../models/FormProps";
import { Button } from "./Button";
import { Input } from "./Input";
import { useEffect, useState } from "react";

export const otroForm = <T extends {}>({
    fields,
    initialValues,
    onFormSubmit,
    buttonText,
  }: FormProps<T>) => {
    
    const [values, setValues] = useState<Partial<T>>({} /*initialValues*/);

    useEffect(() => {
        setValues(initialValues);
      }, [initialValues]);

    const handleChange=(name:string, value:any)=>{
        setValues({
            ...values,
            [name]: value,
        });

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onFormSubmit(values as T);
        setValues({})
      };
    
    return(
        <></>
   

      )

    

  }