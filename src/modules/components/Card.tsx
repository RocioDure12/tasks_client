import React, { useState } from 'react';

const Counter: React.FC = () => {
  // Declaramos el estado utilizando useState
  const [count, setCount] = useState<number>(0);

  // Función para incrementar el contador
  const increment = () => {
    setCount(count + 1);
  };

  // Función para decrementar el contador solo si count es mayor que 0
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default Counter;
