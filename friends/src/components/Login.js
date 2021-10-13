import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Login.css";
import axios from "axios";

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const [credentials, setCredentials] = useState(initialValues);
  let history = useHistory();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login">
      <h1>Sign Into Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username: {""}
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <br />
          Password: {""}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <br />
          <button>Login</button>
        </label>
      </form>
    </div>
  );
};

export default Login;
