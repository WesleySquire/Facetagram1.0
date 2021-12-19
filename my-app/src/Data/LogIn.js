// Made by Wesley Squire

import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Users from "./LocalStorage";
import validate from "./validateInfo";
import useForm from "./useForm";

export default function LogIn() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const users = JSON.stringify(Users());
  // localStorage.setItem("users", users);

  // const logInRef = useRef();
  // const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const logInValue = logInRef.current.value;
    // const passValue = passRef.current.value;
    const userData = JSON.parse(localStorage.getItem("users"));
    const userData2 = JSON.parse(localStorage.getItem("account"));

    let userID = false;

    userData.forEach((user) => {
      if (user.login === username && user.password === password) {
        localStorage.setItem("user", JSON.stringify(user));
        return (userID = true);
      }
    });

    userData2.forEach((user2) => {
      if (user2.username === username && user2.password === password) {
        localStorage.setItem("user", JSON.stringify(user2));
        return (userID = true);
      }
    });

    if (!userID) {
      return alert("Username or Password incorrect!");
    } else {
      navigate("/MainFeed");
    }
  };

  return (
    <div class="LogIn">
      <div id="Login2">
        <form onSubmit={handleSubmit}>
          <h2 id="logo">
            Face<span>tagram</span>
          </h2>
          <input
            id="login"
            placeholder="Username: "
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            id="password"
            placeholder="Password: "
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button>Log In!</button>
          <span className="form-input-login">
            Need an account? <Link to="/Form">Sign Up</Link>
          </span>
        </form>
      </div>
    </div>
  );
}
