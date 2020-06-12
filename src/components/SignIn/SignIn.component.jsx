import React, { useState } from "react";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../FormInput/FormInput.component";
import CustomButton from '../CustomButton/CustomButton.component'

import {SignInContainer} from './SignIn.styles'

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <SignInContainer>
      <h1>Sign in with your email and password</h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          autoComplete="email"
          required
        />

        <FormInput
          label="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          autoComplete="password"
          required
        />

        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
