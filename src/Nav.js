import React from "react";

function Nav() {
    return (
        <nav> 
            <div className="hamburger-menu"><img src="/img/menu.png" alt="Menu"></img></div>
            <div className="page-links">
                <a href="index.html">Home</a>
                <a href="grocery.html">Grocery</a>
                <a href="profile.html">Profile</a>
                <a href="#">Log In</a>
            </div>
            <header>
              <h1> Dorm Dishes</h1>
              <img src="/img/logo.png" alt="Logo"></img>
            </header>
        </nav>

    );
}
export { Nav };