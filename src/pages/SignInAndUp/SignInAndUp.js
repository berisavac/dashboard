import React, { useState } from "react";

import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";

import CustomButton from "../../components/CustomButton/CustomButton.component";

// import "./SignInAndUp.styles.scss";

import { SignInAndUpContainer, SignInAndUpBox } from "./SignInAndUp.styles";

const SignInAndUp = () => {
  const [text, setText] = useState("SIGN UP");
  const [hidden, setHidden] = useState(false);


  const clickHandle = (event) => {
    event.preventDefault();

    if (!hidden) {
      setHidden(true);
      setText("SIGN IN");
    } else {
      setHidden(false);
      setText("SIGN UP");
    }
  };

  return (
    <SignInAndUpContainer>
      <CustomButton onClick={clickHandle}>{text}</CustomButton>
      <SignInAndUpBox>{hidden ? <SignUp /> : <SignIn />}</SignInAndUpBox>
    </SignInAndUpContainer>
  );
};

export default SignInAndUp;
