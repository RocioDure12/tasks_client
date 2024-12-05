import { TextareaProps } from "../models/TextareaProps"

export const Textarea: React.FC<TextareaProps> = ({
    name,
    value,
    onChange,
    label,
    placeholder,
    rows = 4,
    cols = 50,
  }) => (
    <label>
      {label && <span>{label}</span>}
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </label>
  );