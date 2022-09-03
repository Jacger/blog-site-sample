function LoginForm(props) {
  const {formFields, submitButton, inputHandler} = props;
  console.log('Form');

  return (
    <form>
      <input
        type="text"
        id="name"
        className="fadeIn second"
        onChange={inputHandler}
        name="name"
        value={formFields.name}
        placeholder="Display name"
      />
      <input
        type="email"
        id="email"
        className="fadeIn second"
        onChange={inputHandler}
        name="email"
        value={formFields.email}
        placeholder="Email"
      />
      <input
        type="password"
        id="password"
        className="fadeIn third"
        onChange={inputHandler}
        name="password"
        value={formFields.password}
        placeholder="Password"
      />
      <input
        type="password"
        id="confirmPassword"
        className="fadeIn third"
        onChange={inputHandler}
        name="confirmPassword"
        value={formFields.confirmPassword}
        placeholder="Password"
      />
      <input
        type="submit"
        className="fadeIn fourth"
        value="Log In"
        onClick={submitButton}
      />
    </form>
  )
}

export default LoginForm;
