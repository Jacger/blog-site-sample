import {
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  authenticateUser,
} from "../firebase/firebase.utils";

export const defaultSignInValue = {
  email: "",
  password: "",
};

export const defaultSignUpValue = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const handleAfterSignIn = async (formFields, saveUserInfo, setForms) => {
  const { email, password } = formFields;

  try {
    const { user } = await signInAuthUserWithEmailAndPassword(email, password);
    saveUserInfo(user);
    setForms(defaultSignInValue);
    alert("Sign In successful");
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      alert("Incorrect password");
    } else if (error.code === "auth/user-not-found") {
      alert("Incorrect email");
    }

    console.log("error :>> ", error);
  }
};

export const handleAfterSignUp = async (formFields, saveUserInfo, setForms) => {
  const { name, email, password } = formFields;

  try {
    const { user } = await createAuthUserWithEmailAndPassword(email, password);
    await authenticateUser(user, { displayName: name });
    setForms(defaultSignUpValue);
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      alert("Cannot create user, email already in use");
    }
    console.log("error :>> ", error);
  }
};
