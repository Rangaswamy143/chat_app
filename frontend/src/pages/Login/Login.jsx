import React, { useState } from "react";
import "./login.css";
import assets from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { SignIn, Signup } from "../../config/FaireBase";
import { toast } from "react-toastify";

const Login = () => {
  // const navigate = useNavigate();
  const [currState, setCurrState] = useState("Sign Up");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(username, email, password);

  const submitHandler = (e) => {
    e.preventDefault();
    if (currState === "Sign Up") {
      Signup(username, email, password);
    } else {
      SignIn(email, password);
      // navigate("/chat");
    }
    // setUserName("");
    // setEmail("");
    // setPassword(" ");
  };
  return (
    <div className="login">
      <img src={assets.logo_big} alt="logo" className="logo" />
      <form className="login-form" onSubmit={submitHandler}>
        <h2>{currState}</h2>
        {currState === "Sign Up" ? (
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="username"
            value={username}
            required
            className="form-input"
          />
        ) : null}
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          className="form-input"
        />
        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login now"}
        </button>
        <div className="login-term">
          <input type="checkbox" required />
          <p>Agree to the terms of use & private policy.</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurrState("Sign Up")}>click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
