import { useState } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import Category from "../models/Category";
import useCategoriesApi from "../hooks/useCategoriesApi";

export const Categories:React.FC=()=>{
const [categoriesList, setCategoriesList] = useState<Category[]>([]);
const [newCategory, setNewCategory]=useState<Partial<Category>>({})
const categoriesApi = useCategoriesApi();


    const handleChange=(evt :React.ChangeEvent<HTMLInputElement>)=>{
        setNewCategory({category_name:evt.target.value})
        //setCategoriesList(evt.target.value)
    }

//deberia agregar una funcion handle submit para que se lleve a cbo en el onClick event 
    return(
    
        <div className="m-2 rounded-lg bg-white  p-7 flex-col shadow-lg">
            <>
            <Input
            type="text"
            label="Categoria"
            name="category"
            onChange={handleChange}
            />
            <Button onClick={()=>categoriesApi.createCategory(newCategory)}>Agregar</Button>
            </>
            <>
            <Input
            type="text"
            label="Buscar"
            name="search"
            onChange={handleChange}

            />
            <Button>Buscar</Button>
            </>
            
            <div>
                <ul>
                    <li>popo</li>
                    <li>skjdf</li>
                </ul>
                
            </div>
            
            
        </div>

        
        
       


    )
}