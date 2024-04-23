import { useState,ChangeEvent } from "react";

 export interface Category{
    name:string
    isChecked:boolean
    markedAsFavorite:boolean
}

interface CategoryFormProps{
    onCategorySubmit: (category: Category) => any;
}

export default function CategoryForm(props:CategoryFormProps){
    const[category, setCategory]=useState<Partial<Category>>({});

    
  //Función para manejar cambios en los campos del formulario
    function handleChangeName(evt: ChangeEvent<HTMLInputElement>){
        setCategory({...category,...{name:evt.target.value}})
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        props.onCategorySubmit(category as Category)
        setCategory({})
        
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
            <label>Categoria
                <input
                type="text"
                name="name"
                value={category.name ?? ""}
                onChange={handleChangeName}
                />
            </label>
           
    
            <button>Enviar</button>
            </form>
                
               

         
        </>
    )
}