import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Category from "../models/Category";
import useCategoriesApi from "../hooks/useCategoriesApi";
import { useEffect } from "react";
import { Plus, X } from "lucide-react";
import { Modal } from "../components/Modal"
import MainLayout from "../components/MainLayout";

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

  const createCategory = async () => {
    const response = await categoriesApi.createCategory(category as Category)
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
    <MainLayout>
      <div className="bg-primary-300 p-8 rounded-lg text-primary-900 font-semibold">
          <div className="flex items-center gap-2">
            <Input
              type="text"
              label="Categoria"
              name="category"
              onChange={handleCategoryChange}
            />
            <Plus
              size={30}
              className="bg-primary-400 rounded-md text-purple-50 cursor-pointer hover:bg-primary-900"
              onClick={createCategory}
            ></Plus>
          </div>
        

        
          <Input
            type="text"
            label="Buscar"
            name="search"
            onChange={handleSearchChange}
          />
        

        <div className="mt-5 p-4 bg-primary-200 shadow-lg rounded-lg">
          <ul>
            {filterCategories.map((item: Category) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition m-2 text-primary-500"
              >
                {item.category_name}
                <X
                  className="hover:text-primary-contrast-300 transition"
                  onClick={() => deleteCategory(item.id)}
                ></X>
              </li>
            ))}
          </ul>
        </div>
    
      </div>
    </MainLayout>
  );
};
