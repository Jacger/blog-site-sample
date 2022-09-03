import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9BlMFpUZv53WFFSfpzJ3D_74s9oXKyj0",
  authDomain: "crown-clothing-db-406d3.firebaseapp.com",
  projectId: "crown-clothing-db-406d3",
  storageBucket: "crown-clothing-db-406d3.appspot.com",
  messagingSenderId: "1034423503308",
  appId: "1:1034423503308:web:9e8ae23316d93fb85e7569",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const authenticateUser = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
      console.log("User create successful");
    } catch (error) {
      console.log("Error createing the user", error.message);
    }
  }

  return userDocRef;
};
