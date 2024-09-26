type InputType = 'text' | 'email' | 'password' | 'checkbox' | 'radio' | 'select' | 'date'|'datetime-local';

export default interface Field {
    name: string;
    label: string;
    type: InputType;
    required?: boolean;
    options?:Array<{ value: string | number; label: string }>; 
  }