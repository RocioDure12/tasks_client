export interface TextareaProps {
    name: string;
    value: string;
    onChange: (name: string, value: string) => void;
    label?: string;
    placeholder?: string;
    rows?: number;
    cols?: number;
  }
  