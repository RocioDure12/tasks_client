import { useContext, useState } from "react";
import ModePanel from "./ModePanel";
import ThemeContext from "../context/ThemeContext";
import useThemeContext from "../hooks/useThemeContext";

export default function Mode() {
  const [mode, setMode] = useState(true);
  //const themeContext = useContext(ThemeContext);
  const themeContext = useThemeContext()

  function onLightOn() {
    setMode(true);
  }

  function onLightOff() {
    setMode(false);
  }

  return (
    <div className="card">
      <button
        onClick={() =>
          themeContext.setTheme(
            themeContext.theme == "light" ? "dark" : "light"
          )
        }
      >Cambiar tema</button>
      {mode ? <div>🌞</div> : <div>🌑</div>}
      <ModePanel onLightOff={onLightOff} onLightOn={onLightOn} />
    </div>
  );
}
