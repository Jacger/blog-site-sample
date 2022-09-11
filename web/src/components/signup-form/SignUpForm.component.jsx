import { useState } from "react";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/FormInput.component';
import './SignUpForm.style.scss';
import Button from '../button/Button.component';

const defaultFormField = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setForms] = useState(defaultFormField);
  const { name, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setForms(defaultFormField);
  };

  const InputHandler = (event) => {
    const { name, value } = event.target;
    setForms({ ...formFields, [name]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await authenticateUser(user, { displayName: name });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.log("error :>> ", error);
    }
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
