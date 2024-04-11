
// Definir un tipo para cada persona
type Person = {
  id:number;
  name: string;
  occupation: string;
};

// Arreglo de personas
const people: Person[] = [
  { id:1,name: 'Creola Katherine Johnson', occupation: 'mathematician' },
  { id:2,name: 'Mario José Molina-Pasquel Henríquez', occupation: 'chemist' },
  { id:3,name: 'Mohammad Abdus Salam', occupation: 'physicist' },
  { id:4,name: 'Percy Lavon Julian', occupation: 'chemist' },
  { id:5,name: 'Subrahmanyan Chandrasekhar', occupation: 'astrophysicist' }
];

// Componente Lista que mapea los miembros de people en una lista de elementos JSX
export default function Lista() {
  /*const listItems = people.map(person => <li key={person.name}>{person.name}: {person.occupation}</li>);
  return <ul>{listItems}</ul>;
  */
  const physicist= people.filter(person =>
    person.occupation === 'physicist')

  const listItems=physicist.map(person=><li key={person.id}><div>{person.id}) {person.name} occupation: {person.occupation}</div></li>)
  return <ul>{listItems}</ul>
}
