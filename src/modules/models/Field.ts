type InputType = 'time'|'text'|'email'|'password'|'checkbox' |'radio'|'select'|'date'|'datetime-local'|'textarea'|'color'| 'url'| 'range'|'tel'|'file'|'number';

export default interface Field {
    name: string;
    label: string;
    type: InputType;
    required?: boolean;
    options?:Array<{ value: string | number; label: string }>; 
  }