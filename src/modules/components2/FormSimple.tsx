//utilizamos el estado para mantener el valor del input del formulario

import { useState, ChangeEvent, FormEvent } from "react";
import Item from "./Item";

function Form() {
  const [input, setInput] = useState("");
  const [formItems, setFormItems] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input != "") {
      setFormItems((prevItems) => [...prevItems, input]);
      setInput("");
    }
  }

  function deleteItem(index: number) {
    setFormItems(formItems.filter((item, idx) => idx != index));
  }

  function handleCkeckBox(index: number) {

}



  return (
    <div className="card">
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          nombre:
          <input type="text" value={input} onChange={handleChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {formItems.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
            <input type="checkbox" checked={isChecked} onChange={()=>handleCkeckBox(index)}></input>
            <button onClick={() => deleteItem(index)}>Eliminar</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Form;
