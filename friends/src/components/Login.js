import React from "react";
import "../Login.css";
const Login = () => {
  return (
    <div className="login">
      <h1>Sign Into Your Account</h1>
      <form>
        <label>
          Username: {""}
          <input type="text" placeholder="Enter Username" />
          <br />
          Password: {""}
          <input type="password" placeholder="Enter Password" />
          <br />
          <button>Login</button>
        </label>
      </form>
    </div>
  );
};

export default Login;
