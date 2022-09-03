import { useState } from "react";
import "./login.scss";
import Title from "../../components/auth/Title.component";
import LoginForm from "../../components/auth/LoginForm.component";
import ForgotPassword from "../../components/auth/ForgotPassword.component";
import {
  signInWithGooglePopup,
  authenticateUser,
} from "../../utils/firebase/firebase.utils";

const defaultFormField = {
  email: "",
  password: "",
};

function Login() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await authenticateUser(user);
  };
  const [formFields, setForms] = useState(defaultFormField);

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setForms({ ...formFields, [name]: value });
  };

  const submitButton = () => {
    // Code here...
  };

  return (
    <div className="wrapper fadeInDown">
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <div id="formContent">
        <Title />
        <LoginForm
          formFields={formFields}
          submitButton={submitButton}
          inputHandler={handlerChange}
        />
        <ForgotPassword />
      </div>
    </div>
  );
}

export default Login;
