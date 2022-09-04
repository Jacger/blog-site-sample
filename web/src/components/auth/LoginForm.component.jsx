function LoginForm(props) {
  const {formFields, handlerSubmit, inputHandler} = props;
  const {email, password} = formFields;
  console.log('Login Form');

  return (
    <form>
      <input
        type="email"
        id="email"
        className="fadeIn second"
        onChange={inputHandler}
        name="email"
        value={email}
        placeholder="Email"
      />
      <input
        type="password"
        id="password"
        className="fadeIn third"
        onChange={inputHandler}
        name="password"
        value={password}
        placeholder="Password"
      />
      <input
        type="submit"
        className="fadeIn fourth"
        value="Log In"
        onClick={handlerSubmit}
      />
    </form>
  )
}

export default LoginForm;
