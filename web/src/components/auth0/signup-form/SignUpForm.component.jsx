import { useState } from "react";
import FormInput from '../../form-input/FormInput.component';
import Button from '../../button/Button.component';
import './SignUpForm.style.scss';

const defaultFormField = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setForms] = useState(defaultFormField);
  const { name, email, password, confirmPassword } = formFields;

  const InputHandler = (event) => {
    const { name, value } = event.target;
    setForms({ ...formFields, [name]: value });
  };

  const handlerSubmit = async (event) => {
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
          onChange={InputHandler}
          name="name"
          value={name}
        />
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
        <FormInput
          label="Confirm password"
          type="password"
          required
          onChange={InputHandler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
