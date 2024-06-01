import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <div className="register-card">
        <div className="register-left">
          <h1>Welcome To WeChat .</h1>
          <p>
            It's time to share your profile and stay in touch with your friends
            ! with WeChat .
          </p>
          <h6>Do you have an account?</h6>
          <Link to="/login">
            
            <button>Login</button>
          </Link>
        </div>
        <div className="register-right">
          <form>
            <h1>Register</h1>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
