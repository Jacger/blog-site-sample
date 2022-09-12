import { useState, useContext } from "react";
import FormInput from '../form-input/FormInput.component';
import Button from '../button/Button.component';
import { handleAfterSignUp, defaultSignUpValue } from "../../utils/authentication/authentication.utils";
import { UserContext } from "../../contexts/user.context";

import './SignUpForm.style.scss';

function SignUpForm() {
  const [formFields, setForms] = useState(defaultSignUpValue);
  const { name, email, password, confirmPassword } = formFields;
  const { saveUserInfo } = useContext(UserContext);
  console.log("SignUpForm");

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setForms({ ...formFields, [name]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match!");
      return;
    }
    handleAfterSignUp(formFields, saveUserInfo, setForms);
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handlerSubmit}>
        <FormInput
          label="Name"
          type="text"
          required
          onChange={inputHandler}
          name="name"
          value={name}
        />
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
        <FormInput
          label="Confirm password"
          type="password"
          required
          onChange={inputHandler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
