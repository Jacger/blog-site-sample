import { useState } from "react";
import FormInput from "../../form-input/FormInput.component";
import Button from "../../button/Button.component";
import { useAuth0 } from "@auth0/auth0-react";
import "./SignInForm.style.scss";

const defaultFormField = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setForms] = useState(defaultFormField);
  const { email, password } = formFields;
  const { loginWithRedirect } = useAuth0();
  console.log("SignInForm");

  const InputHandler = (event) => {
    const { name, value } = event.target;
    setForms({ ...formFields, [name]: value });
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
          <Button type="button" buttonType="google" onClick={() => loginWithRedirect()}>
            Auth0 sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
