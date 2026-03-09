import { useState } from "react";
import ThemeProvider from "./context/ThemeContext";
import ReduxCounter from "./redux/ReduxCounter";

function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Experiment 4: State Management</h1>

      {/* Local State */}
      <h2>Local State (useState)</h2>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>

      {/* Global State - Context API */}
      <ThemeProvider />

      {/* Global State - Redux */}
      <ReduxCounter />
    </div>
  );
}

export default App;