import { TextareaProps } from "../models/TextareaProps"

export const Textarea: React.FC<TextareaProps> = (props) => (
    <label className="flex flex-col gap-2">
      {props.label && <span className="text-sm font-medium text-gray-700">{props.label}</span>}
      <textarea
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        rows={props.rows}
        cols={props.cols}
        onChange={props.onChange}
        className="w-full rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </label>
  );