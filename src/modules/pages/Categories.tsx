import { useState } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import Category from "../models/Category";
import useCategoriesApi from "../hooks/useCategoriesApi";
import { useEffect } from "react";

export const Categories:React.FC=()=>{
const [categoriesList, setCategoriesList] = useState<Category[]>([]);
const [newCategory, setNewCategory]=useState<Partial<Category>>({})
const categoriesApi = useCategoriesApi();

  useEffect(() => {
    if (categoriesList !== undefined) {
      readCategories();
    } else {
      setCategoriesList([]);
    }
  }, [categoriesList]);

const handleChange=(evt :React.ChangeEvent<HTMLInputElement>)=>{
    setNewCategory({category_name:evt.target.value})
        //setCategoriesList(evt.target.value)
    }

const createCategory=async ()=>{
    if (newCategory.category_name){
        const result= await categoriesApi.createCategory(newCategory as Category)
        
       
    }
    else alert("Por favor, escribe un nombre para la categoría.")
   
}

const filteredCategories=()=>{
return
}


const readCategories=async()=>{
    const result= await categoriesApi.readMyCategories()
    if (result.data){
        setCategoriesList(result.data)
    }else{
        console.log("Error al obtener las categorias")
    }
}




    return(
    
        <div className="m-2 rounded-lg bg-white  p-7 flex-col shadow-lg">
            <>
            <Input
            type="text"
            label="Categoria"
            name="category"
            onChange={handleChange}
            />
            <Button onClick={createCategory}>+</Button>
            </>
            <>
            <Input
            type="text"
            label="Buscar"
            name="search"
            onChange={handleChange}

            />
            <Button onClick={readCategories}>🔍</Button>
            </>
            
            <div>
                <ul>
                {categoriesList.map((item:Category)=>(
                    <li key={item.id}>{item.category_name}</li>
                ))}
                </ul> 
            </div>
            
         
            
            
        </div>

        
        
       


    )
}