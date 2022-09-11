
import SignInForm from "../../components/signin-form/SignInForm.component";
import SignUpForm from "../../components/signup-form/SignUpForm.component";
import './authentication.style.scss';

function AuthenticationPage() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default AuthenticationPage;
