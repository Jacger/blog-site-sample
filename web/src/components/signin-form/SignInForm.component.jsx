import { useState } from "react";
import { createAuthUserWithEmailAndPassword, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput.component";
import "./SignInForm.style.scss";
import Button from "../button/Button.component";

const defaultFormField = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setForms] = useState(defaultFormField);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setForms(defaultFormField);
  };

  const InputHandler = (event) => {
    const { name, value } = event.target;
    setForms({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await authenticateUser(user);
  }

  const handlerSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
      alert("Sign In successful");
    } catch (error) {
      if (error.code == 'auth/wrong-password') {
        alert('Incorrect password');
      } else if (error.code == 'auth/user-not-found') {
        alert('Incorrect email');
      }

      console.log("error :>> ", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handlerSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={InputHandler}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={InputHandler}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google sign in</Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
