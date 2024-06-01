import React from "react";
import "./Login.css";
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <div className="login">
      <div className="login-card">
        <div className="login-left">
          <h1>Welcome To WeChat .</h1>
          <p>
            It's time to share your profile and stay in touch with your friends
            ! with WeChat .
          </p>
          <h6>Don't you have an account?</h6>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="login-right">
          <form>
            <h1>Login</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
