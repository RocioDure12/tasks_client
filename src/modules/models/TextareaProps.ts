export interface TextareaProps {
    type:string
    name: string;
    value?: string | number;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    label?: string;
    placeholder?: string;
    rows?: number;
    cols?: number;
  }
  