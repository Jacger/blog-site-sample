import { Link } from 'react-router-dom';

function HomeRoute() {
  return (
    <div>
      Home page
      <br />
      <Link to='login'>Login</Link>
      <br />
      <Link to='register'>Register</Link>
    </div>
  )
}

export default HomeRoute;
