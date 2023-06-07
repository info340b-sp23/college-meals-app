import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
      <section className="profile-card">
        <div className="profile-box">
          <img src="img/profile-pic.jpeg" alt="profile of user" className="profile-pic"/>
          <Link to="/profileSettings"><img src="img/settings.png" alt="settings icon" className="settings-icon"/></Link>
          <h1>Rose Smith</h1>
          <p>3rd Year Undergraduate Student</p>
          <div className="profile-links">
            <Link to="/rankList">
                <img
                  src="img/rank-list.png"
                  alt="a shopping cart list with hearts indicating a rank list"
                />
            </Link>
            <a href="want-to-try-list.html">
              <img
                src="img/shopping-cart.png"
                alt="a shopping cart indicating recipes to try"
              />
          </a>
          </div>
        </div>
      </section>
  );
}

export { Profile };