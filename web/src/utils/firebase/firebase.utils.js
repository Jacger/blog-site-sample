import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import Cookies from "universal-cookie";

const firebaseConfig = {
  apiKey: "AIzaSyC9BlMFpUZv53WFFSfpzJ3D_74s9oXKyj0",
  authDomain: "crown-clothing-db-406d3.firebaseapp.com",
  projectId: "crown-clothing-db-406d3",
  storageBucket: "crown-clothing-db-406d3.appspot.com",
  messagingSenderId: "1034423503308",
  appId: "1:1034423503308:web:9e8ae23316d93fb85e7569",
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocument = async (key, objects) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, key);

  objects.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Done");
};

export const getCategoriesAndDocument = async () => {
  const collectionRef = collection(db, "categories");
  const queryData = query(collectionRef);

  const querySnapshot = await getDocs(queryData);
  const categoryMap = querySnapshot.docs.reduce((objects, docsSnapshot) => {
    const { title, items } = docsSnapshot.data();
    objects[title.toLowerCase()] = items
    return objects;
  }, {});

  return categoryMap;
};

export const authenticateUser = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

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
        ...additionalInformation,
      });
      console.log("User create successful");
    } catch (error) {
      console.log("Error createing the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
  (new Cookies()).remove("user", { path: "/", sameSite: true });
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
