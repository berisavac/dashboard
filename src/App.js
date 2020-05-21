import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import SignInAndUp from "./pages/SignInAndUp/SignInAndUp";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header.component";
// {id:'ZEb1VzV5lHZ0f6souZeiE1K4pYL2'}


function App() {
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentEmail, setCurrentEmail] = useState("");

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {

          console.log(snapShot.data(), 'ovo je snapshot')
          
        });
      }
      // console.log(currentUser);
    });
    return () => {
      console.log("usao u return");
      unsubscribeFromAuth();
    };
  }, [currentUserId]);
  console.log( currentUserId, "userID");
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/signin" component={SignInAndUp} />
      </Switch>
    </div>
  );
}

export default App;
