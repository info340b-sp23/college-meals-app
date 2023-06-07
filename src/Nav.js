import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Nav(props) {
    const {loggedIn, setLoggedIn} = props;
    console.log(loggedIn);
    const handleLogout = () => {
        setLoggedIn(false);
    }
    let loginStatus = loggedIn ? "Logout" : "Login";

    return (
        <nav>
            <div className="hamburger-menu"><img src="/img/menu.png" alt="Menu"></img></div>
            <div className="page-links">
                <Link to="/">Home</Link>
                <Link to="/grocerypage">Grocery</Link>
                <Link to="/profilepage">Profile</Link>
                <Link to="/loginpage" onClick={handleLogout}>
                    {loginStatus}
                </Link>

            </div>
            <header>
              <h1> Dorm Dishes</h1>
              <img src="/img/logo.png" alt="Logo"></img>
            </header>
        </nav>

    );
}
export { Nav };