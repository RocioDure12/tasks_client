import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Category from "../models/Category";
import useCategoriesApi from "../hooks/useCategoriesApi";
import { useEffect } from "react";

export const Categories: React.FC = () => {
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const [category, setCategory] = useState<Partial<Category>>({});
  const [searchText, setSearchText]=useState("")
  const categoriesApi = useCategoriesApi();


  //const initialized = useRef(false)
  useEffect(() => {
    /*if(!initialized.current){
        initialized.current = true;
        readCategories();
    }*/
    readCategories();
  }, []);

  /*
  useEffect(() => {
    if (categoriesList !== undefined) {
        readCategories();

    } else {
      setCategoriesList([]);
    }
  }, [categoriesList]);*/

  const handleCategoryChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCategory({ category_name: evt.target.value });
    //setCategoriesList(evt.target.value)
  };

  const handleSearchChange=(evt:React.ChangeEvent<HTMLInputElement>)=>{
    setSearchText(evt.target.value)

  }

  const createCategory = async () => {
    try {
      const response = await categoriesApi.getCategoriesCount();
      // Verificar si response.data está definido y si es un número
     //la verificacion antes de crear una categoria deberia estar en el backend (corregir eso)
      if (response.data && typeof response.data === 'number') {
        if (response.data >= 25) {
          alert("No puedes crear más categorías");
          return; // Detener la ejecución de la función
        }
      } else {
        alert("Error al obtener el conteo de categorías.");
        return;
      }
  
      if (category.category_name) {
        const result = await categoriesApi.createCategory(category as Category);
        await readCategories();
      } else {
        alert("Por favor, escribe un nombre para la categoría.");
      }
    } catch (error) {
      console.error("Error al crear la categoría:", error);
      alert("Hubo un error al procesar la solicitud.");
    }
  };
  

  const filterCategories =categoriesList.filter((category:Category)=>!searchText || category.category_name.toLowerCase().includes(searchText.toLowerCase()))


  const readCategories = async () => {
    const result = await categoriesApi.readMyCategories();
    if (result.data) {
      setCategoriesList(result.data);
    } else {
      console.log("Error al obtener las categorias");
    }
  };

  const deleteCategory = async (id: number) => {
    const result = await categoriesApi.deleteCategory(id);
    await readCategories();
  };

  return (
    <div className="m-2 rounded-lg bg-white  p-7 flex-col shadow-lg">
      <>
        <Input
          type="text"
          label="Categoria"
          name="category"
          onChange={handleCategoryChange}
        />
        <Button onClick={createCategory}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
        </Button>
      </>
      <>
        <Input
          type="text"
          label="Buscar"
          name="search"
          onChange={handleSearchChange}
        />
      </>

      <div>
        <ul>
          {filterCategories.map((item: Category) => (
            <li key={item.id}>
              {item.category_name}
              <Button onClick={()=>deleteCategory(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
