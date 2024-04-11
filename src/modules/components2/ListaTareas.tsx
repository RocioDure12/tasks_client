// Definir un tipo para cada persona
type Tarea = {
    id:number;
    name: string;
  };
  
  // Arreglo de personas
  const tareas: Tarea[] = [
    { id:1,name: 'lavar platos'},
    { id:2,name: 'ordenar cuarto'},
    { id:3,name: 'pasear mascota'},
    { id:4,name: 'hacer ejercicio'},
    { id:5,name: 'lavar ropa'}
  ];

export default function ListaTareas(){
    const listaTareas=tareas.map(tarea => <li key={tarea.name}>{tarea.name}</li>);
    return <ul>{listaTareas}</ul>
}
    