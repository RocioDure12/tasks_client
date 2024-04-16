import React from 'react';
import "../styles/Card.css"

type Mascota = {
  id: number;
  name: string;
  edad: number;
};

// Arreglo de mascotas
const mascotas: Mascota[] = [
  { id: 1, name: 'Kukelina', edad: 5 },
  { id: 2, name: 'Oso', edad: 3 },
  { id: 3, name: 'Lolita', edad: 5 },
  { id: 4, name: 'Simo', edad: 6 },
  { id: 5, name: 'Romeo', edad: 5 }
];

export default function List() {
  // Filtrar la lista de mascotas para encontrar las mascotas con edad igual a 5
  const mascotasEdad5 = mascotas.filter(mascota => mascota.edad === 5);

  return (
    <div className='card'>
      {mascotasEdad5.length > 0 ? (
        <ul>
          {mascotasEdad5.map(mascota => (
            <li key={mascota.id}>{mascota.name} - Edad: {mascota.edad} años</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron mascotas con 5 años de edad</p>
      )}
    </div>
  );
}
