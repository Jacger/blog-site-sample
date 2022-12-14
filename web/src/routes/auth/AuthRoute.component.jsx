import SignInForm from "../../components/auth0/signin-form/SignInForm.component";
import SignUpForm from "../../components/auth0/signup-form/SignUpForm.component";
import "./auth.style.scss";

function AuthRoute() {
  console.log('AuthRoute');

  return (
    <div>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
}

export default AuthRoute;
