import { useState,ChangeEvent } from "react";
import Categories from "./Categories";
import { Category } from "./CategoryForm";
import "../styles/Card.css"


interface CategoriesListProps {
  searchText:string
  categories: Category[];
  onDelete: (index: number) => any;
  onCheckChange:(value:boolean,index:number)=> any;
  onFavChanged:(value:boolean,index:number)=>any;
  onSearch:(input:string)=>any

}

export default function CategoriesList(props: CategoriesListProps) {
    //const filteredCategories=props.categories.filter((category:Category)=>props.searchText == "" || category.name == props.searchText )
  
    const filteredCategories=props.categories.filter((category:Category)=>!props.searchText || category.name.includes(props.searchText))
    const po=JSON.stringify( filteredCategories)
    console.log("somos las categorias filtradas",po)


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
    <form className="card" onSubmit={handleSubmit}>
      <label> Buscar

        <input 
          name="search"
          type="text"
          value={props.searchText}
          onChange={handleSearchInput}
        />
      🔎</label>
  
    </form>

      <ul className="card">

        {filteredCategories.map((category) => (
          <li key={category.id}>
            {category.isChecked ? <del>{category.name}</del> : category.name}
            <button onClick={() => props.onDelete(category.id)}>Eliminar</button>
            <label> Complete
                <input
                type="checkbox"
                checked={category.isChecked == true}
                onChange={(evt)=>props.onCheckChange(evt.currentTarget.checked,category.id)}
                />
            </label>
            <button onClick={()=>props.onFavChanged(!category.markedAsFavorite,category.id)}>
              {category.markedAsFavorite ? '💓' : '🤍'}
            
            </button>
     
          
          </li>

        ))}
      </ul>


      
    </>
  );
}