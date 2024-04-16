import "../styles/Card.css"
type Mascota = {
    id:number;
    name: string;
  };
  
  // Arreglo de mascotas
  const mascotas: Mascota[] = [
    { id:1,name: 'Kukelina'},
    { id:2,name: 'Oso'},
    { id:3,name: 'Lolita'},
    { id:4,name: 'Simo'},
    { id:5,name: 'Romeo'}
  ];

  export default function List() {

    return (
      <div className="card">
        {mascotas.length > 0 ? (
          <ul>
            {mascotas.map(mascota => (
              <li key={mascota.id}>{mascota.name}</li>
            ))}
          </ul>
        ) : (
          <p>No hay mascotas disponibles</p>
        )}
      </div>
    );
  }