import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function Login() {
  const { email, setEmail } = useLocalStorage(); // Use the custom hook correctly
  const [password, setPassword] = useState("");

  return (
    <>
      <h1>Login to the Portal!</h1>
      <h3>Login</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          console.log("Form submitted");
        }}
      >
        Login
      </button>
      <br />
    </>
  );
}
