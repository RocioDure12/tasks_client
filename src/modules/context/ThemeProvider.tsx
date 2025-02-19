import { useState, useEffect } from "react";
import  ThemeContext  from "./ThemeContext";
import { useLocalStorage } from "@mantine/hooks";
import { MantineProvider } from "@mantine/core";


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
