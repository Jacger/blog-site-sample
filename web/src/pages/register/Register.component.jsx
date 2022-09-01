import React from 'react'

function Register() {
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">User Icon</div>
        <form>
          <input type="email" id="login" className="fadeIn second" name="email" placeholder="Email" />
          <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" />
          <input type="password" id="password" className="fadeIn third" name="confirm_password" placeholder="Confirm password" />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  )
}

export default Register;
