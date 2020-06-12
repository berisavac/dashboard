import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

import { SignUpContainer } from "./SignUp.styles";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "displayName") {
      setDisplayName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  return (
    <SignUpContainer>
      <h1 className="title">Sign up with email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          autoComplete="display-name"
          label="display name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          autoComplete="email"
          label="email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          autoComplete="password"
          label="password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          autoComplete="current-password"
          value={confirmPassword}
          onChange={handleChange}
          label="confirm password"
          required
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
