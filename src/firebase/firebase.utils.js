import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDMSiFkUyNHp_qdmfykQEWZ5_sujzRNoBQ",
  authDomain: "crwn-db-99259.firebaseapp.com",
  databaseURL: "https://crwn-db-99259.firebaseio.com",
  projectId: "crwn-db-99259",
  storageBucket: "crwn-db-99259.appspot.com",
  messagingSenderId: "1000635124164",
  appId: "1:1000635124164:web:6caa69204d95607d39fc91",
  measurementId: "G-RH9RRJCHLZ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
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
