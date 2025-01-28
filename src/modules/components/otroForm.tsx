import { FormProps } from "../models/FormProps";
import { Input } from "./Input";
import { useEffect, useState } from "react";
import { Select } from "./Select";
import { Textarea } from "../components/Textarea"
import { Button } from "./Button";

export const OtroForm = <T extends {}>({
  fields,
  initialValues,
  onFormSubmit,
  buttonText,
  buttons=[],
}: FormProps<T>) => {
  const [values, setValues] = useState<Partial<T>>({});

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);


  const handleChange = (evt: React.ChangeEvent<any>) => {
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

  const handleAddCategory=()=>{

  }

  return (
    <form className="m-2 rounded-lg bg-white h-full p-7 flex flex-col gap-2 shadow-lg" onSubmit={handleSubmit}>
      <div>
        {fields.map((field) => {
          switch (field.type){
            case "select":
              return(
              <Select
                  key={field.name}
                  name={field.name}
                  options={field.options || []}
                  onChange={handleChange}
                  required={field.required}
                  label={field.label}
              />
            )

            case "textarea":
              return(
              <Textarea
                type={field.type}
                key={field.name}
                name={field.name}
                label={field.label}
                onChange={handleChange}
                rows={field.rows}
                cols={field.cols}
    
              />
            )

              case "text":
              case "email":
              case "password":
              case "date":
              case "datetime-local":
              case "color":
              case "url":
              case "range":
              case "tel":
              case "number":
              case "textarea":
              case"time":
              return (
                <>
                <Input
                  placeholder={field.name}
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
                {field.name ==="category" && (
                  <Button onClick={handleAddCategory}>+</Button>
                  //SOLUCIONAR EL TEMA DEL INPUT CON BOTON Y SIN BOTON LA LINEA DE ARRIBA NO SERIA LA SOLUCION
                )}
               </>
                

            
            );
            default:
              console.warn(`Tipo de campo desconocido: ${field.type}`);
              return null

          }
          
          
        
        }
        
        )}
        
   
      </div>

      <Button type="submit">{buttonText}</Button>
    </form>
  );
};

  