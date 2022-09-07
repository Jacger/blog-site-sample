import { useState, useContext } from "react";
import "./login.scss";
import Title from "../../components/auth/Title.component";
import LoginForm from "../../components/auth/LoginForm.component";
import ForgotPassword from "../../components/auth/ForgotPassword.component";
import { UserContext } from "../../contexts/user.context";
import {
  signInAuthUserWithEmailAndPassword,
  authenticateUser,
} from "../../utils/firebase/firebase.utils";

const defaultFormField = {
  email: "",
  password: "",
};

function Login() {
  const [formFields, setForms] = useState(defaultFormField);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setForms(defaultFormField);
  };

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setForms({ ...formFields, [name]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);

      resetFormFields();
      alert("Login successful");
    } catch (error) {
      alert("Login failed");
      console.log("error :>> ", error);
    }
  };

  return (
    <div className="wrapper fadeInDown login-form">
      <div id="formContent">
        <Title title="LOGIN" />
        <LoginForm
          formFields={formFields}
          handlerSubmit={handlerSubmit}
          inputHandler={handlerChange}
        />
        <ForgotPassword />
      </div>
    </div>
  );
}

export default Login;
