import { createContext } from "react";

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => any;
}

//create context returns a context object
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
export default ThemeContext;
