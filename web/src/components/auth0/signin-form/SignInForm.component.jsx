import { useState } from "react";
import FormInput from "../../form-input/FormInput.component";
import Button from "../../button/Button.component";
import "./SignInForm.style.scss";

const defaultFormField = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setForms] = useState(defaultFormField);
  const { email, password } = formFields;
  console.log("SignInForm");

  const InputHandler = (event) => {
    const { name, value } = event.target;
    setForms({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
  };

  const handlerSubmit = async (event) => {
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
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
