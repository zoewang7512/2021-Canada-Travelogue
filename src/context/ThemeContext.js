import React, { createContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props) {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div>
      <DarkModeContext.Provider value={{ mode, toggleMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
}
export { DarkModeContext, DarkModeProvider };
