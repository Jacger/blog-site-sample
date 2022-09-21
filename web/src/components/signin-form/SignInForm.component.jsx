import { useState, useContext, useCallback } from "react";
import FormInput from "../form-input/FormInput.component";
import Button from "../button/Button.component";
import { UserContext } from "../../contexts/user.context";
import {
  signInWithGooglePopup,
  authenticateUser,
} from "../../utils/firebase/firebase.utils";
import { handleAfterSignIn, defaultSignInValue } from "../../utils/authentication/authentication.utils";

import "./SignInForm.style.scss";

function SignInForm() {
  const [formFields, setForms] = useState(defaultSignInValue);
  const { email, password } = formFields;
  const { saveUserInfo } = useContext(UserContext);
  console.log("SignInForm");

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setForms({ ...formFields, [name]: value });
  };

  const signInWithGoogle = useCallback(async () => {
    const { user } = await signInWithGooglePopup();
    await authenticateUser(user);
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    handleAfterSignIn(formFields, saveUserInfo, setForms);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={inputHandler}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={inputHandler}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
