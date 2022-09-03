import { useState } from "react";
import "./register.scss";
import Title from "../../components/auth/Title.component";
import RegisterForm from "../../components/auth/RegisterForm.component";
import ForgotPassword from "../../components/auth/ForgotPassword.component";

const defaultFormField = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

function Register() {
  const [formFields, setForms] = useState(defaultFormField);

  const handlerChange = (event) => {
    const {name, value} = event.target;
    setForms({ ...formFields, [name]: value });
  };

  const submitButton = () => {
    // Code here...
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
      <Title />
        <RegisterForm
          formFields={formFields}
          submitButton={submitButton}
          inputHandler={handlerChange}
        />
        <ForgotPassword />
      </div>
    </div>
  );
}

export default Register;
