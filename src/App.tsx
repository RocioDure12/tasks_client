import PackingList from "./modules/components2/PackingList";
import Gallery from "./modules/components2/Gallery";
import ListaTareas from "./modules/components2/ListaTareas";
import MessageCount from "./modules/components2/MessageCount";
import DrinkList from "./modules/components2/Drink";
import Saludo from "./modules/components2/Saludo";
import RenderingList from "./modules/components2/RenderingList";
import ListMascotas from "./modules/components2/ListMascotas"
import Counter from "./modules/components3/Counter";
import Text from "./modules/components2/Text";
import ToDoList from "./modules/components2/ToDoList";
import Form from "./modules/components2/FormSimple";
import TasksForm from "./modules/components2/TasksForm";
import Parent from "./modules/components2/Parent";
import Mode from "./modules/components3/Mode";
import Categories from "./modules/components3/Categories";


export default function App(){
  return (
    <section>
      <Counter></Counter>
      <Mode></Mode>
      <Categories/>
     
      {/*<TasksForm/>
       <Parent />
      
      <Gallery/>
      <h2>Lista de tareas</h2>
      <ListaTareas/>
      <PackingList/>
      <MessageCount
      messageCount={5}
      />
      <DrinkList/>
      <Saludo
        isAuthenticated={false}
      />

      <RenderingList/>
      <ListMascotas/>
      <Counter/>
      <Text/>
      <ToDoList></ToDoList>
      <Form/>*/}

  
     
    </section>

  );
}