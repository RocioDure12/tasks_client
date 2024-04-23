import { useState } from "react";
import CategoryForm, { Category } from "./CategoryForm";
import CategoriesList from "./CategoriesList";
import Item from "../components2/Item";


export default function Categories(){
    const[categories,setCategories]=useState<Category[]>([]);
    const show=JSON.stringify(categories)
    console.log(show)

    //Utiliza el operador de propagación (...) 
    //para copiar el contenido actual de categories y luego añade newCategory al final de la lista

    function onCategorySubmit(newCategory:Category){
        setCategories([...categories,newCategory])

    }

    //compara el índice de cada elemento (idx) con el índice proporcionado como parámetro.
    // Si el índice del elemento actual no coincide con el índice proporcionado, el elemento 
    //se conserva en el nuevo array; de lo contrario, se excluye.
   //actualiza el estado con el nuevo array❤️🤍

    function onDelete(index:number){
        const itemsFiltered=categories.filter((category, idx)=>idx != index)
        setCategories(itemsFiltered)

    }

    function onCheckChange(isChecked:boolean,index:number){
        const itemsFiltered=categories.map((category,idx)=> idx == index? {...category,...{isChecked:isChecked}}: category
        )
        setCategories(itemsFiltered)

    }

    function onFavChanged(value:boolean,index:number){
        const newCategories=categories.map((category, idx)=>idx == index ? {...category,...{markedAsFavorite:value}} : category

        )
        setCategories(newCategories)


    }



    return(
        <div className="card">
            <CategoryForm
            onCategorySubmit={onCategorySubmit}
            />
            <CategoriesList
            categories={categories}
            onDelete={onDelete}
            onCheckChange={onCheckChange}
            onFavChanged={onFavChanged}
           />
        </div>
    )
}