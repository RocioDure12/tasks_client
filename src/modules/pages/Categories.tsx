import { Button } from "../components/Button"
import { Input } from "../components/Input"
export const Categories:React.FC=()=>{

    const handleChange=()=>{

    }
    return(
    <>
        <div className="m-2 rounded-lg bg-white  p-7 flex-row shadow-lg">
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
                </ul>
                
            </div>
            
            
        </div>

        
        
       
    </>

    )
}