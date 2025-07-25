import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Category from "../models/Category";
import useCategoriesApi from "../hooks/useCategoriesApi";
import { useEffect } from "react";
import { Plus, X } from "lucide-react";
import { Modal } from "../components/Modal"

export const Categories: React.FC = () => {
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const [category, setCategory] = useState<Partial<Category>>({});
  const [searchText, setSearchText] = useState("");
  const categoriesApi = useCategoriesApi();

  //const initialized = useRef(false)
  useEffect(() => {

    readCategories();
  }, []);


  const handleCategoryChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCategory({ category_name: evt.target.value });
    //setCategoriesList(evt.target.value)
  };

  const handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(evt.target.value);
  };

  const createCategory=async()=>{
    const response=await categoriesApi.createCategory(category as Category)
    await readCategories()

  }
  
  const filterCategories = categoriesList.filter(
    (category: Category) =>
      !searchText ||
      category.category_name.toLowerCase().includes(searchText.toLowerCase())
  );

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
    <div className="max-w-sm mx-auto dark:bg-neutralScale-800 dark:text-neutralScale-200 p-10 text-primary-800 font-semibold">
      <div className=" flex flex-col gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Input
            type="text"
            label="Categoria"
            name="category"
            onChange={handleCategoryChange}
          />
          <Plus
            size={30}
            className="p-1 bg-primary-500 rounded-md text-purple-50 cursor-pointer hover:bg-primary-900"
            onClick={createCategory}
          ></Plus>
        </div>
      </div>

      <>
        <Input
          type="text"
          label="Buscar"
          name="search"
          onChange={handleSearchChange}
        />
      </>

      <div className="max-w-md mx-auto mt-10 p-4 bg-primary-200 shadow-lg rounded-lg">
        <ul>
          {filterCategories.map((item: Category) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition m-2 text-primary-500"
            >
              {item.category_name}
              <X
                className="hover:text-red-500 transition"
                onClick={() => deleteCategory(item.id)}
              ></X>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};
