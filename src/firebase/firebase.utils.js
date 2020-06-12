import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBcywktnQKRcTGaQZxftUOZa6fu1yd4cDU",
  authDomain: "dashboard-db-ca334.firebaseapp.com",
  databaseURL: "https://dashboard-db-ca334.firebaseio.com",
  projectId: "dashboard-db-ca334",
  storageBucket: "dashboard-db-ca334.appspot.com",
  messagingSenderId: "572239336245",
  appId: "1:572239336245:web:5019a2a222d6e56d44b27c",
  measurementId: "G-MEDETLS3S1",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
