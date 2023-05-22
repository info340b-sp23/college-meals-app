import React from "react";

function Profile() {
  return (
      <section class="profile-card">
        <div class="profile-box">
          <img src="img/profile-pic.jpeg" alt="profile of user" class="profile-pic"/>
          <a href="profile-settings.html"><img src="img/settings.png" alt="settings icon" class="settings-icon"/></a>
          <h1>Rose Smith</h1>
          <p>3rd Year Undergraduate Student</p>
          <div class="profile-links">
            <a href="been-rank-list.html">
                <img
                  src="img/rank-list.png"
                  alt="a shopping cart list with hearts indicating a rank list"
                />
            </a>
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