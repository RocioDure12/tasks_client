import { useState, useEffect } from "react";
import { Input } from "../components/Input";
import Category from "../models/Category";
import useCategoriesApi from "../hooks/useCategoriesApi";
import { Plus, X } from "lucide-react";
import MainLayout from "../components/MainLayout";
import toast from "react-hot-toast";
import Loading from "../components/Loading";  // <-- tu componente Loading

export const Categories: React.FC = () => {
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const [category, setCategory] = useState<Partial<Category>>({});
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const categoriesApi = useCategoriesApi();

  useEffect(() => {
    readCategories();
  }, []);

  const readCategories = async () => {
    setLoading(true);
    try {
      const result = await categoriesApi.readMyCategories();
      if (result.data) {
        setCategoriesList(result.data);
      } else {
        console.log("Error al obtener las categorías");
      }
    } catch (error) {
      console.error("Error en la API", error);
      toast.error("Error al cargar categorías");
    } finally {
      setLoading(false);
    }
  };

  const createCategory = async () => {
    if (!category.category_name?.trim()) {
      toast.error("El nombre de la categoría no puede estar vacío");
      return;
    }
    setLoading(true);
    try {
      const response = await categoriesApi.createCategory(category as Category);
      if (response.data) {
        toast.success("Categoría creada");
        setCategory({});
        await readCategories();
      } else {
        toast.error("La categoría ya existe");
        setCategory({});
        await readCategories();
      }
    } catch (error) {
      toast.error("Error en la creación de categoría");
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id: number) => {
    setLoading(true);
    try {
      const result = await categoriesApi.deleteCategory(id);
      if (result.error) {
        toast.error("No se pudo eliminar");
        console.error(result.errorMessage);
      } else {
        toast.success("Se eliminó correctamente");
        await readCategories();
      }
    } catch (error) {
      toast.error("Error al eliminar categoría");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filterCategories = categoriesList.filter(
    (cat: Category) =>
      !searchText || cat.category_name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="bg-primary-300 p-8 rounded-lg text-primary-900 font-semibold relative">
        {/* Overlay de loading */}
        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-70 flex justify-center items-center rounded-lg z-10">
            <Loading />
          </div>
        )}

        {/* Inputs */}
        <div className="flex items-center gap-2">
          <Input
            type="text"
            label="Categoría"
            name="category"
            value={category.category_name ?? ""}
            onChange={(e) => setCategory({ category_name: e.target.value })}
            disabled={loading}
          />
          <Plus
            size={30}
            className={`bg-primary-400 rounded-md text-purple-50 cursor-pointer hover:bg-primary-900 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={loading ? undefined : createCategory}
          />
        </div>

        <Input
          type="text"
          label="Buscar"
          name="search"
          onChange={(e) => setSearchText(e.target.value)}
          disabled={loading}
        />

        {/* Lista de categorías */}
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
                    className={`hover:text-primary-contrast-300 transition ${
                      loading ? "pointer-events-none opacity-50" : "cursor-pointer"
                    }`}
                    onClick={loading ? undefined : () => deleteCategory(item.id)}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mensaje si no hay categorías */}
        {categoriesList.length === 0 && !loading && (
          <p className="mt-4 text-primary-700 italic">
            Aún no hay categorías. Creá una para comenzar.
          </p>
        )}
      </div>
    </MainLayout>
  );
};
