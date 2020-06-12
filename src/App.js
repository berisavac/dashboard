import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import SignInAndUp from "./pages/SignInAndUp/SignInAndUp";
import HomePage from "./pages/Homepage/HomePage";
import Header from "./components/Header/Header.component";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="app">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/homepage" component={HomePage} />
        <Route>
          {currentUser ? <Redirect to="/homepage" /> : <SignInAndUp />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
