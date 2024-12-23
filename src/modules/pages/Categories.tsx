import { useState } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import Category from "../models/Category";

export const Categories:React.FC=()=>{
const [categoriesList, setCategoriesList] = useState<Category[]>([]);

  //const taskApi = useTaskApi();


    const handleChange=()=>{

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
            <Button>Agregar</Button>
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