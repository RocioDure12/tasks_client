import { TextareaProps } from "../models/TextareaProps"

export const Textarea: React.FC<TextareaProps> = (props) => (
  <div>
    <label>
      {props.label && <span>{props.label}</span>}
      <textarea
        name={props.name}
        value={props.value}
        rows={props.rows}
        cols={props.cols}
        onChange={props.onChange}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here..."
        
      />
    </label>
  </div>
  );

  //corregir y mejorar estilo de este componente