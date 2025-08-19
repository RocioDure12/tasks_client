import { useState } from "react";
import  ThemeContext  from "./ThemeContext";


interface ThemeProviderProps
{
  children: React.ReactNode 
}

export default function ThemeProvider(props: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
