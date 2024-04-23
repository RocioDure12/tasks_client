import { useState } from "react";
import Categories from "./Categories";
import { Category } from "./CategoryForm";


interface CategoriesListProps {
  categories: Category[];
  onDelete: (index: number) => any;
  onCheckChange:(value:boolean,index:number)=> any;
  onFavChanged:(value:boolean,index:number)=>any

}

export default function CategoriesList(props: CategoriesListProps) {
    return (
    <>
      <ul>
        {props.categories.map((category, index) => (
          <li key={index}>
            {category.isChecked ? <del>{category.name}</del> : category.name}
            <button onClick={() => props.onDelete(index)}>Eliminar</button>
            <label> Complete
                <input
                type="checkbox"
                checked={category.isChecked == true}
                onChange={(evt)=>props.onCheckChange(evt.currentTarget.checked,index)}
                />
            </label>
            {category.markedAsFavorite ?
             <button onClick={()=>props.onFavChanged(false,index)}>❤️</button> 
             :
            <button onClick={()=>props.onFavChanged(true,index)}>🤍</button>}
      
          </li>
        ))}
      </ul>
    </>
  );
}
