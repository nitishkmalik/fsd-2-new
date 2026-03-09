import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider() {
  const [theme, setTheme] = useState("light");

  const style = {
    backgroundColor: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    padding: "15px",
    marginTop: "20px",
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={style}>
        <h2>Global State (Context API)</h2>
        <p>Current Theme: {theme}</p>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;