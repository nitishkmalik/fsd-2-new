import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (password.length < 6) {
      setError("Min 6 characters");
      return;
    }

    alert("Form submitted successfully");
  };

  return (
    <div>
      {/* ✅ IMPORTANT FIX */}
      <label htmlFor="email">Email</label>
      <input id="email" onChange={(e) => setEmail(e.target.value)} />

      {/* ✅ IMPORTANT FIX */}
      <label htmlFor="password">Password</label>
      <input id="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleSubmit}>Login</button>

      {error && <p>{error}</p>}
    </div>
  );
}
