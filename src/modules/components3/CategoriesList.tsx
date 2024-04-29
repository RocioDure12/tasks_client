import { useState,ChangeEvent } from "react";
import Categories from "./Categories";
import { Category } from "./CategoryForm";


interface CategoriesListProps {
  searchText:string
  categories: Category[];
  onDelete: (index: number) => any;
  onCheckChange:(value:boolean,index:number)=> any;
  onFavChanged:(value:boolean,index:number)=>any;
  onSearch:(input:string)=>any

}

export default function CategoriesList(props: CategoriesListProps) {
    const filteredCategories=props.categories.filter((category:Category)=>props.searchText == "" || category.name == props.searchText )
    const po=JSON.stringify( filteredCategories)
    console.log(po)

  function handleSearchInput(evt: ChangeEvent<HTMLInputElement>){
    //setInputSearch(evt.target.value)
    //props.onSearch(inputSearch)
    //const itemsFiltered=props.categories.filter((category:Category)=>category.name.includes(inputSearch))
    props.onSearch(evt.target.value)
  }


function handleSubmit(e: React.FormEvent<HTMLFormElement>){
  e.preventDefault()
}
    return (
    <>
    <form onSubmit={handleSubmit}>
      <label> Buscar

        <input 
          name="search"
          type="text"
          value={props.searchText}
          onChange={handleSearchInput}
        />
      🔎</label>
  
    </form>

      <ul>
        {filteredCategories.map((category, index) => (
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
            <button onClick={()=>props.onFavChanged(!category.markedAsFavorite,index)}>
              {category.markedAsFavorite ? '💓' : '🤍'}
            
            </button>
     
          
          </li>

        ))}
      </ul>


      
    </>
  );
}