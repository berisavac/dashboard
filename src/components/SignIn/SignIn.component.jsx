import React, { useState } from "react";

import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
    // console.log(event.target.value);
  };

  return (
    <div>
      <h3>Sign in with your email and password</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <button>Sign in</button>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </form>
    </div>
  );
};

export default SignIn;
