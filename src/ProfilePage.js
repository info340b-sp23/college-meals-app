import React, { useState } from "react";
import { Nav } from "./Nav";
import { Profile } from "./Profile";
import ProfileSettings from "./ProfileSettings";

function ProfilePage() {

    return (
        <div>

             <Profile />


             <footer>
                <div className="container">
                    <p><a href="mailto:email@collegemeals.uw.edu"><span className="material-icons"></span> email@collegemeals.uw.edu</a></p>
                    <p><a href="tel:555-555-5555"><span className="material-icons">phone</span> 555-555-5555</a></p>
                    <p>&copy; INFO 340 Group 6, The Noun Project, iStock </p>
                </div>
             </footer>
        </div>

    );
}
export {ProfilePage};