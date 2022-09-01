import { useState } from 'react';
import './login.scss';

function Login() {
  const [inputField, setInputField] = useState({
    email: '',
    password: '',
  });

  const inputHandler = (e) => {
    setInputField({ [e.target.name]: e.target.value });
  };

  const submitButton = () => {
    alert(inputField.first_name);
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">Login page</div>
        <form>
          <input
            type="email"
            id="login"
            className="fadeIn second"
            onChange={inputHandler}
            name="login"
            value={inputField.email}
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            onChange={inputHandler}
            name="login"
            value={inputField.password}
            placeholder="Password"
          />
          <input
            type="submit"
            className="fadeIn fourth"
            value="Log In"
            onClick={submitButton}
          />
        </form>
        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
