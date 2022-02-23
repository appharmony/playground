import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-role")) {
      navigate("/dashboard");
    }
  });

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://auth-LoadBa-CGBE68BBZ13X-bf0d1207c1bf57b7.elb.us-east-1.amazonaws.com:8080/api/auth/signin",
        JSON.stringify({ username, password }),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: false,
        }
      );
      setUsername("");
      setPassword("");
      localStorage.setItem("user-role", response?.data?.roles[0]);
      localStorage.setItem("token", response?.data?.accessToken);
      navigate("/dashboard");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Please Enter valid username & password.");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <p
          className={errMsg ? "login__errmsg" : "login__offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Sign-in</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="login__SignInButton"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
