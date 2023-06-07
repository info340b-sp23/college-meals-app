import React from "react";
import { useState, useEffect} from "react";
import './index.css';
import { Nav } from "./Nav";

function Login(props) {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[loggedIn, setLoggedIn] = useState(false);
  const[errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    console.log(loggedIn, "YUH");
  }, [loggedIn]);

  const handleLogin = (event) => {
    event.preventDefault();
    if(username === "user123" && password === "pass123") {
      setLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Incorrect username or password.");
      setUsername("");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setErrorMessage("");
  }

  if (loggedIn) {
    return (
      <section id="welcome">
        <h1>Welcome, {username}! </h1>
        <button onClick={handleLogout} id="logout-button">Logout</button>
      </section>
    );
  }
  return (
    <section id="login-container">
        <form onSubmit={handleLogin} id='login-form'>
          <h1>Login</h1>
          <p>{errorMessage}</p>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <button type="submit">Login</button>
      </form>
    </section>
  );
}

export { Login };