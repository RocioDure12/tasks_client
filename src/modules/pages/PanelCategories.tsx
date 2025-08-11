import { useRef, useState } from "react";
import { Input } from "../components/Input";
import Category from "../models/Category";
import useCategoriesApi from "../hooks/useCategoriesApi";
import { useEffect } from "react";
import { Plus, X } from "lucide-react";
import MainLayout from "../components/MainLayout";
import toast from "react-hot-toast";

export const Categories: React.FC = () => {
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const [category, setCategory] = useState<Partial<Category>>({});
  const [searchText, setSearchText] = useState("");
  const categoriesApi = useCategoriesApi();

  useEffect(() => {
    readCategories();
  }, []);

  const handleCategoryChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCategory({ category_name: evt.target.value });
  };

  const handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(evt.target.value);
  };

  const createCategory = async () => {
    if (!category.category_name?.trim()) {
      toast.error("El nombre de la categoría no puede estar vacío");
      return;
    }

    const response = await categoriesApi.createCategory(category as Category);
    if (response.data) {
      toast.success("Categoría creada");
      setCategory({});
      await readCategories();
    } else {
      toast.error("La categoria ya existe");
      setCategory({});
      await readCategories();
    }
  };

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
      console.log("Error al obtener las categorías");
    }
  };

  const deleteCategory = async (id: number) => {
    const result = await categoriesApi.deleteCategory(id);

    if (result.error) {
      toast.error("No se pudo eliminar");
      console.error(result.errorMessage);
    } else {
      toast.success("Se eliminó correctamente");
      await readCategories();
    }
  };

  return (
    <MainLayout>
      <div className="bg-primary-300 p-8 rounded-lg text-primary-900 font-semibold">
        {/* Inputs siempre visibles */}
        <div className="flex items-center gap-2">
          <Input
            type="text"
            label="Categoría"
            name="category"
            value={category.category_name ?? ""}
            onChange={handleCategoryChange}
          />
          <Plus
            size={30}
            className="bg-primary-400 rounded-md text-purple-50 cursor-pointer hover:bg-primary-900"
            onClick={createCategory}
          />
        </div>

        <Input
          type="text"
          label="Buscar"
          name="search"
          onChange={handleSearchChange}
        />

        {/* Lista solo si hay categorías */}
        {categoriesList.length > 0 && (
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
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mensaje si no hay categorías */}
        {categoriesList.length === 0 && (
          <p className="mt-4 text-primary-700 italic">
            Aún no hay categorías. Creá una para comenzar.
          </p>
        )}
      </div>
    </MainLayout>
  );
};
