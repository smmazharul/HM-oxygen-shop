import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import "./Login.css";
const Login = () => {
  
  const { SignInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/shop';


  const handleGoogleLogin = () => {
      SignInUsingGoogle()
          .then(result => {
              history.push(redirect_uri);
          })
  }
  return (
    <div className="login-form">
      <div className="">
        <h2>Login</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          New to HM-oxygen-shop?
          <Link to="/register" style={{ textDecoration: "none" }}>
            Create Account
          </Link>
          <div>--------------Or-----------</div>
          <button onClick={handleGoogleLogin} className="btn-regular">Google Sign In</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
