import SignInForm from "../../components/signin-form/SignInForm.component";
import SignUpForm from "../../components/signup-form/SignUpForm.component";

function AuthenticationRoute() {
  return (
    <div>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
}

export default AuthenticationRoute;
