import { useContext, useState } from "react";
import "./register.scss";
import Title from "../../components/auth/Title.component";
import RegisterForm from "../../components/auth/RegisterForm.component";
import { UserContext } from "../../contexts/user.context";
import {
  createAuthUserWithEmailAndPassword,
  authenticateUser,
} from "../../utils/firebase/firebase.utils";

const defaultFormField = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const [formFields, setForms] = useState(defaultFormField);
  const { name, email, password, confirmPassword } = formFields;
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
      setCurrentUser(user);

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.log("error :>> ", error);
    }
  };

  return (
    <div className="wrapper fadeInDown register-form">
      <div id="formContent">
        <Title title="SIGNUP" />
        <RegisterForm
          formFields={formFields}
          handlerSubmit={handlerSubmit}
          inputHandler={handlerChange}
        />
      </div>
    </div>
  );
}

export default Register;
