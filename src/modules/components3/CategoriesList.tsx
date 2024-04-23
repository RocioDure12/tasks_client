import { useState,ChangeEvent } from "react";
import Categories from "./Categories";
import { Category } from "./CategoryForm";


interface CategoriesListProps {
  categories: Category[];
  onDelete: (index: number) => any;
  onCheckChange:(value:boolean,index:number)=> any;
  onFavChanged:(value:boolean,index:number)=>any
}

export default function CategoriesList(props: CategoriesListProps) {
  const[inputSearch, setInputSearch]=useState("")

  const itemsFiltered=props.categories.filter((category:Category)=> category.name.includes(inputSearch))

    const po=JSON.stringify(itemsFiltered)
    console.log(po)

  

  function handleSearchInput(evt: ChangeEvent<HTMLInputElement>){
    setInputSearch(evt.target.value)
  }


function handleSubmit(e: React.FormEvent<HTMLFormElement>){
  e.preventDefault()
}
    return (
    <>
    <form onSubmit={handleSubmit}>
      <label>

        <input 
          name="search"
          type="text"
          value={inputSearch}
          onChange={handleSearchInput}
        />
      </label>
    </form>

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
            <button onClick={()=>props.onFavChanged(!category.markedAsFavorite,index)}>
              {category.markedAsFavorite ? '💓' : '🤍'}
            
            </button>
     
          
          </li>

        ))}
      </ul>

      <ul>
        {itemsFiltered.map((category, idx)=>(
          <li key={idx}>{category.name}</li>

        ))}
        
      </ul>
      
    </>
  );
}
