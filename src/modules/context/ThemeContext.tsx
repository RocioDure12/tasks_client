import { createContext } from "react";

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => any;
}

//create context returns a context object
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
//<ThemeContextProps | undefined>(undefined)
//es un tipo genérico que se utiliza para definir qué tipo de valores pueden ser proporcionados en el contexto.
// En este caso, ThemeContextProps | undefined indica que el contexto puede contener valores que sean del tipo ThemeContextProps o undefined.

export default ThemeContext;
