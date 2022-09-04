function LoginForm(props) {
  const {formFields, handlerSubmit, inputHandler} = props;
  const {name, email, password, confirmPassword} = formFields;
  console.log('Register Form');

  return (
    <form>
      <input
        type="text"
        id="name"
        className="fadeIn second"
        onChange={inputHandler}
        name="name"
        value={name}
        placeholder="Display name"
      />
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
        type="password"
        id="confirmPassword"
        className="fadeIn third"
        onChange={inputHandler}
        name="confirmPassword"
        value={confirmPassword}
        placeholder="Confirm password"
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
