import PackingList from "./modules/components2/PackingList";
import Gallery from "./modules/components2/Gallery";
import ListaTareas from "./modules/components2/ListaTareas";
import MessageCount from "./modules/components2/MessageCount";
import DrinkList from "./modules/components2/Drink";
import Saludo from "./modules/components2/Saludo";

export default function App(){
  return (
    <section>
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

  
     
    </section>

  );
}