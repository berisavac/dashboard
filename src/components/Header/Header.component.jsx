import React from "react";
import { Redirect } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import CustomButton from "../CustomButton/CustomButton.component";

// import "./Header.styles.scss";

import {HeaderContainer} from './Header.styles'

const Header = ({ currentUser }) => (
  <HeaderContainer className={currentUser ? "header" : "false-header"}>
    {currentUser ? (
      <CustomButton onClick={() => auth.signOut()}>Sign Out</CustomButton>
    ) : (
      <Redirect to="/signin"></Redirect>
    )}
  </HeaderContainer>
);

export default Header;
